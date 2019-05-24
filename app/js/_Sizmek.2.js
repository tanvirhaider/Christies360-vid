
/*------------------------*/
/*-----> VARIABLES  <-----*/
/*------------------------*/
var creativeId = "HTMLResponsiveRichMediaBanner";
var creativeVersion = "1.1.0";
var lastModified = "2017-02-07";
var lastUploaded = "2017-02-07";
var templateVersion = "2.0.24";
var templateName = "cf_deluxe_banner_mobile_flex_xl_messaging_1x1_" + creativeVersion + "_6266"; // cf_[format_name]_[template_name]_[wxh]_version_BlockID
var scrollPos = {
	x: undefined,
	y: undefined
};
var adId, rnd, uid;
var runOnce = false;
var listenerQueue;
var creativeIFrameId;
var isMobile = (/Mobi/i).test(navigator.userAgent);
var USE_RESIZE_LISTENER = false;


function checkIfAdKitReady(event) {
	try {
		if (window.localPreview) {
			adkit.onReady(function() {
				//window.initializeLocalPreview(); // In localPreview.js
				USE_RESIZE_LISTENER = true;
				initializeCreative();
			});
			return;
		}
	} catch (e) {}

	if (window.adkit) {
		adkit.onReady(initializeCreative);
	} else {
		initializeCreative();
	}
	// END ADD BY MSD
}

function initializeCreative(event) {
	var viewportMeta = document.querySelector('meta[name="viewport"]');
	viewportMeta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0");

	window.setTimeout(function(e) {viewportMeta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0");}, 500);

	//Workaround (from QB6573) for Async EB Load where Modernizr isn't properly initialized
	typeof Modernizr == "object" && (Modernizr.touch = Modernizr.touch || "ontouchstart" in window);

	EBG.pm.bind("sendCreativeId", function() { eventManager.apply(this, arguments);}, this);
	EBG.pm.bind("eventCallback", function() { eventManager.apply(this, arguments); }, this);

	initializeGlobalVariables();
	setCreativeVersion();
	setCreativeElements();

	window.setTimeout(function(e) {
		document.getElementById("willow-ad-stage").style.visibility = "visible";
		document.getElementById("willow-ad-stage").style.opacity = "1";
	}, 250);
}

function initializeGlobalVariables() {
    try {adId = EB._adConfig.adId;} catch (Error) {}
    try {rnd = EB._adConfig.rnd;} catch (Error) {}
    try {uid = EB._adConfig.uid;} catch (Error) {}
}


function setCreativeElements() {

	if (!runOnce) {
		initFXL(window);
	}

	sizeContentArea(null);

}

// Size creative area per available total area so 2:3 aspect ratio creative content will not overflow the available screen space.
// The parameter "data" will be populated only by the response from the custom scripts "creativeResize" event.  When calling this function from manually pass "null".  When accessing the "data" parameter make sure to do a check its existance prior to accessing.
function sizeContentArea(data) {
	var adWrapper = document.getElementById("willow-ad-stage");
	var adWrappoerWidth = adWrapper.offsetWidth;
	var adWrappoerHeight = adWrapper.offsetHeight;
	var initialWidth = adWrappoerWidth;

	var initialHeight = Math.round(adWrappoerWidth * 1.7);
	var winW = (data && typeof data.sfGeomObj !== "undefined") ? data.sfGeomObj.win.w : window.innerWidth;
	var winH = (data && typeof data.sfGeomObj !== "undefined") ? data.sfGeomObj.win.h : window.innerHeight;
	var winO = window.orientation || null;
	var determinedOrientation = (winH <= winW || winO === 90 || winO === -90) ? "land" : "port";

	var finalWidth;
	var finalHeight;	// if creative content would overflow available display space reduce creative content area

	if (initialHeight > adWrappoerHeight) {
		finalWidth = Math.round(adWrappoerHeight * 0.66666);
		finalHeight = adWrappoerHeight;
	} else {
		finalWidth = initialWidth;
		finalHeight = initialHeight;
	}

	if (window.innerWidth < 705) {
		adWrapper.style.width = (determinedOrientation === "port") ? "100%" : finalWidth + "px" ;
		adWrapper.style.height = finalHeight + "px";
	}

	//console.log("final height: ",finalHeight);
}


function setCreativeVersion() {


	// START ADD BY MSD
	sendMessage("setCreativeVersion", {
		creativeId: creativeId + " - " + templateName,
		creativeVersion: creativeVersion,
		creativeLastModified: lastModified,
		uid: uid
	});
	// END ADD BY MSD
}

function onPageScroll(event) {
	// use scrollPos anywhere to know the current x/y coordinates.
	scrollPos.x = event.scrollXPercent;
	scrollPos.y = event.scrollYPercent;
}




function sendMessage(type, data) {
	if (!data.type) data.type = type;
	EB._sendMessage(type, data);
}

function addCustomScriptEventListener(eventName, callback, interAd) {
	listenerQueue = listenerQueue || {};
	var data = {
		uid: uid,
		listenerId: Math.ceil(Math.random() * 1000000000),
		eventName: eventName,
		interAd: !!(interAd),
		creativeIFrameId: creativeIFrameId
	};
	sendMessage("addCustomScriptEventListener", data);
	data.callback = callback;
	listenerQueue[data.listenerId] = data;
	return data.listenerId;
}

function dispatchCustomScriptEvent(eventName, params) {
	params = params || {};
	params.uid = uid;
	params.eventName = eventName;
	params.creativeIFrameId = creativeIFrameId;
	sendMessage("dispatchCustomScriptEvent", params);
}

function removeCustomScriptEventListener(listenerId) {
	var params = {
		uid: uid,
		listenerId: listenerId,
		creativeIFrameId: creativeIFrameId
	};

	sendMessage("removeCustomScriptEventListener", params);
	if (listenerQueue[listenerId])
		delete listenerQueue[listenerId];
}

function eventManager(event) {

	var msg;
	if (typeof event == "object" && event.data) {
		msg = JSON.parse(event.data);

	} else {
		// this is safe frame.
		msg = {
			type: event.type,
			data: event
		};
	}
	if (msg.type && msg.data && (!uid || (msg.data.uid && msg.data.uid == uid))) {
		switch (msg.type) {
			case "sendCreativeId":
				creativeIFrameId = msg.data.creativeIFrameId;
				addCustomScriptEventListener('pageScroll', onPageScroll);
				addCustomScriptEventListener('creativeResize', sizeContentArea);
				sendMessage("dispatchScrollPos", {
					uid: uid
				});
				if (creativeContainerReady)
					creativeContainerReady();
				break;
			case "eventCallback": // Handle Callback
				var list = msg.data.listenerIds;
				var length = list.length;
				for (var i = 0; i < length; i++) {
					try {
						var t = listenerQueue[list[i]];
						if (!t) continue;
						t.callback(msg.data);
					} catch (e) {}
				}
				break;
		}
	}
}

window.addEventListener("message", function() {try { eventManager.apply(this, arguments); } catch (e) {}}, false);
window.addEventListener("load", checkIfAdKitReady);