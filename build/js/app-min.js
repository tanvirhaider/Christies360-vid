"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stage =
/*#__PURE__*/
function () {
  function Stage(data) {
    _classCallCheck(this, Stage);

    var stage = document.createElement('div');

    if (data.id) {
      stage.setAttribute('id', data.id);
    } else {
      stage.setAttribute('id', "willow-ad-stage");
    }

    if (data.class) {
      stage.className += data.class;
    }

    this.stage = stage; // this.stageDefaultStyle();

    if (data.container) {
      var adContainer = document.querySelector(data.container);
      adContainer.appendChild(stage);
    } else {
      document.body.setAttribute('id', "ad-body");
      document.body.appendChild(stage);
    }

    return stage;
  }

  _createClass(Stage, [{
    key: "stageDefaultStyle",
    value: function stageDefaultStyle() {
      // console.log("this.stage: ", this.stage);
      this.stage.style.margin = "0px";
      this.stage.style.padding = "0px";
    }
  }]);

  return Stage;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//console.log("sprite is here ------- ");
var Sprite =
/*#__PURE__*/
function () {
  function Sprite(data) {
    _classCallCheck(this, Sprite);

    var obj = document.createElement('div');
    this.obj = obj;

    if (data.id) {
      obj.setAttribute('id', data.id);
    } else {
      obj.setAttribute('id', '');
    }

    if (data.class) {
      obj.className += data.class;
    }

    if (data.position) {
      obj.style.position = data.position;
    }

    if (data.display) {
      obj.style.display = data.display;
    }

    if (data.width) {
      obj.width = data.width;
      obj.style.width = data.width + 'px';
    } else {
      this.width = 0;
    }

    if (data.height) {
      obj.height = data.height;
      obj.style.height = data.height + 'px';
    } else {
      this.height = 0;
    }

    if (data.image) {
      // var imgW = data.width +'px';
      // var imgH = data.height +'px';
      var style = obj.style; // style.width = imgW;
      // style.height = imgH;

      style.backgroundImage = 'url(' + data.image + ')'; //style.backgroundRepeat = 'no-repeat';
      //if (!data.cover){style.backgroundSize = imgW +' '+ imgH;}
    }

    if (data.button) {
      var btn = document.createElement("button");

      if (data.button.text) {
        btn.innerHTML = data.button.text;
      }

      obj.appendChild(btn);
    } // text: {content:"Read More",color:"white",size:"14px",width:"200px",lineHeight:"100px",fontFamily:"Arial"}


    if (data.text) {
      if (data.text.color) {
        obj.style.color = data.text.color;
      }

      if (data.text.fontSize) {
        obj.style.fontSize = data.text.fontSize;
      }

      if (data.text.fontFamily) {
        obj.style.fontFamily = data.text.fontFamily;
      }

      if (data.text.maxWidth) {
        obj.style.maxWidth = data.text.width;
      }

      if (data.text.lineHeight) {
        obj.style.lineHeight = data.text.lineHeight;
      }

      if (data.text.fontWeight) {
        obj.style.fontWeight = data.text.fontWeight;
      }

      obj.innerHTML = data.text.content;
    }

    if (data.color) {
      var imgW = data.width + 'px';
      var imgH = data.height + 'px';
      var style = obj.style;
      style.width = imgW;
      style.height = imgH;
      style.backgroundColor = data.color;
    } // gradient: {width:1024, height: 650, direction: "right", color1: "rgba(255,255,0,0)", color2: "rgba(255,10,0,1)" }


    if (data.gradient) {
      var style = this.obj.style;
      style.width = data.gradient.width + "px";
      style.height = data.gradient.height + "px";
      style.background = '-webkit-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
      style.background = '-o-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
      style.background = '-moz-linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
      style.background = 'linear-gradient(' + data.gradient.direction + ',' + data.gradient.color1 + ', ' + data.gradient.color2 + ')';
    }

    if (data.container) {
      data.container.appendChild(obj);
    }

    if (data.border) {
      var borderObj = document.createElement('div');
      borderObj.setAttribute('id', data.id + "-Border");
      borderObj.style.width = data.width + 'px';
      borderObj.style.height = data.height + 'px';
      borderObj.style.position = 'absolute';
      borderObj.style.margin = '0px';
      borderObj.style.zIndex = 999999;
      borderObj.style.border = data.border.thickness + "px solid " + data.border.color + "";
      borderObj.style.boxSizing = "border-box";
      borderObj.style.pointerEvents = "none";

      if (data.border.radius) {
        borderObj.style.borderRadius = data.border.radius;
      }

      obj.appendChild(borderObj);
    }

    if (data.click) {
      var obj = this.obj;
      obj.addEventListener('click', data.click.function, false);
      obj.style.cursor = "pointer";
    }

    if (data.over) {
      var obj = this.obj;
      obj.addEventListener('mouseover', data.over.function, false);
      obj.style.cursor = "pointer";
    }

    if (data.out) {
      var obj = this.obj;
      obj.addEventListener('mouseout', data.out.function, false);
      obj.style.cursor = "pointer";
    }

    if (data.mousemove) {
      var obj = this.obj;
      obj.addEventListener('mousemove', data.mousemove.function, false); // obj.style.cursor="pointer";
    }

    var xval = 0;
    var yval = 0; // var rotationval = 0;

    if (data.x) {
      xval = data.x;
    }

    if (data.y) {
      yval = data.y;
    }

    if (data.z) {
      var style = obj.style;
      style.zIndex = data.z;
    }

    if (data.x || data.y) {
      obj.style.transform = "translate(" + xval + "px," + yval + "px)";
    }

    if (data.mask) {
      obj.style.clip = 'rect(' + data.mask.y + 'px,' + (data.mask.x + data.mask.width) + 'px,' + (data.mask.y + data.mask.height) + 'px,' + data.mask.x + 'px)';
    }
  }

  _createClass(Sprite, [{
    key: "click",
    value: function click(f) {
      var obj = this.obj;
      obj.addEventListener('click', f);
      obj.style.cursor = "pointer";
    }
  }, {
    key: "over",
    value: function over(func) {
      var obj = this.obj;
      obj.addEventListener('mouseover', func);
      obj.style.cursor = "pointer";
    }
  }, {
    key: "out",
    value: function out(func) {
      var obj = this.obj;
      obj.addEventListener('mousemove', func);
    }
  }]);

  return Sprite;
}();
"use strict";

// -------- ******* UTILITY ******* --------- 
function createClass(name, rules) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.media = 'all';
  document.getElementsByTagName('head')[0].appendChild(style);

  if (!(style.sheet || {}).insertRule) {
    (style.styleSheet || style.sheet).addRule(name, rules);
  } else {
    style.sheet.insertRule(name + "{" + rules + "}", 0);
  }
}

var fileSize = function fileSize(whichFile, callbackfunc) {
  console.group("FileSizeCheck");
  var fileSizeinbytes = 0;

  try {
    var XMLHfsize = new XMLHttpRequest();
    XMLHfsize.open('HEAD', whichFile, true);

    XMLHfsize.onreadystatechange = function () {
      if (XMLHfsize.readyState == 4) {
        console.log("XMLHttpRequest status: ", XMLHfsize.status);

        if (XMLHfsize.status == 200) {
          console.log("file exists");
          fileSizeinbytes = XMLHfsize.getResponseHeader('Content-Length');
          console.log("fsize:", fileSizeinbytes);
          callbackfunc(fileSizeinbytes);
        } else {
          console.log("file does not exists");
          fileSizeinbytes = 0;
          callbackfunc(fileSizeinbytes);
        }
      }
    };

    XMLHfsize.send(null);
  } catch (Error) {
    console.log("XMLHttpRequest didn't work ", Error);
    ;
    callbackfunc(fileSizeinbytes);
  }

  console.groupEnd("FileSizeCheck");
};

function detectIE() {
  var ua = window.navigator.userAgent; // Test values; Uncomment to check result …
  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return false;
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OmniVirtiFrame = function OmniVirtiFrame(appdata) {
  _classCallCheck(this, OmniVirtiFrame);

  var SITE_URL = encodeURIComponent(window.location.href);
  var iframeContainer = appdata.container;
  iframeContainer.style.display = "block";
  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', "ado-" + appdata.id);
  iframe.setAttribute('frameborder', "0");
  iframe.setAttribute('webkitAllowFullScreen', appdata.allowFullScreen);
  iframe.setAttribute('mozallowfullscreen', appdata.allowFullScreen);
  iframe.setAttribute('allowFullScreen', appdata.allowFullScreen);
  iframe.setAttribute("src", "//" + appdata.domain + "/content/" + appdata.id + "?id=" + appdata.id + "&player=" + appdata.player + "&control=" + appdata.control + "&autoplay=" + appdata.autoplay + "&audio=" + appdata.audio + "&referer=" + SITE_URL + "&type=" + appdata.type);
  iframeContainer.appendChild(iframe);

  if (appdata.bgstyle) {
    var iframeBG = document.createElement("iframeBG");
    iframeBG.className += appdata.bgstyle;
    iframeContainer.appendChild(iframeBG);
  }

  if (appdata.onPlay) {
    OmniVirt.api.receiveMessage(window, "started", function (type, data, iframe) {
      appdata.onPlay.function();
    });
  }

  if (appdata.onPause) {
    OmniVirt.api.receiveMessage(window, "paused", function (type, data, iframe) {
      appdata.onPause.function();
    });
  }

  if (appdata.onEnd) {
    OmniVirt.api.receiveMessage(window, "ended", function (type, data, iframe) {
      appdata.onEnd.function();
    });
  }

  if (appdata.onProgress) {
    OmniVirt.api.receiveMessage(window, "progress", function (type, data, iframe) {
      appdata.onProgress.function(data);
    });
  }

  if (appdata.onDuration) {
    OmniVirt.api.receiveMessage(window, "duration", function (type, data, iframe) {
      appdata.onDuration.function(data);
    });
  }

  if (appdata.onLongitude) {
    OmniVirt.api.receiveMessage(window, "longitude", function (type, data, iframe) {
      appdata.onLongitude.function(data);
    });
  }

  if (appdata.onLatitude) {
    OmniVirt.api.receiveMessage(window, "latitude", function (type, data, iframe) {
      appdata.onLatitude.function(data);
    });
  }

  if (appdata.onAudio) {
    OmniVirt.api.receiveMessage(window, "audio", function (type, data, iframe) {
      appdata.onAudio.function(data);
    });
  }

  if (appdata.onLoaded) {
    OmniVirt.api.receiveMessage(window, "loaded", function (type, data, iframe) {
      appdata.onLoaded.function(iframe);
    });
  }

  if (appdata.onQuality) {
    OmniVirt.api.receiveMessage(window, "quality", function (type, data, iframe) {
      appdata.onQuality.function(data);
    });
  }
};
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var isMobile = /Mobi/i.test(navigator.userAgent);
var USE_RESIZE_LISTENER = false;

function checkIfAdKitReady(event) {
  try {
    if (window.localPreview) {
      adkit.onReady(function () {
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
  } // END ADD BY MSD

}

function initializeCreative(event) {
  var viewportMeta = document.querySelector('meta[name="viewport"]');
  viewportMeta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0");
  window.setTimeout(function (e) {
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0");
  }, 500); //Workaround (from QB6573) for Async EB Load where Modernizr isn't properly initialized

  (typeof Modernizr === "undefined" ? "undefined" : _typeof(Modernizr)) == "object" && (Modernizr.touch = Modernizr.touch || "ontouchstart" in window);
  EBG.pm.bind("sendCreativeId", function () {
    eventManager.apply(this, arguments);
  }, this);
  EBG.pm.bind("eventCallback", function () {
    eventManager.apply(this, arguments);
  }, this);
  initializeGlobalVariables();
  setCreativeVersion();
  setCreativeElements();
  window.setTimeout(function (e) {
    document.getElementById("willow-ad-stage").style.visibility = "visible";
    document.getElementById("willow-ad-stage").style.opacity = "1";
  }, 250);
}

function initializeGlobalVariables() {
  try {
    adId = EB._adConfig.adId;
  } catch (Error) {}

  try {
    rnd = EB._adConfig.rnd;
  } catch (Error) {}

  try {
    uid = EB._adConfig.uid;
  } catch (Error) {}
}

function setCreativeElements() {
  if (adData.type == "FXL") {
    if (!runOnce) {
      initFXL(window);
    }

    sizeContentArea(null);
  }

  if (adData.type == "FF") {
    if (!runOnce) {
      initFF(window);
    }

    sizeContentAreaFFMobile();
  }
} // Size creative area per available total area so 2:3 aspect ratio creative content will not overflow the available screen space.
// The parameter "data" will be populated only by the response from the custom scripts "creativeResize" event.  When calling this function from manually pass "null".  When accessing the "data" parameter make sure to do a check its existance prior to accessing.


function sizeContentArea(data) {
  console.log("sizme content area");
  var adWrapper = document.getElementById("willow-ad-stage");
  var adWrappoerWidth = adWrapper.offsetWidth;
  var adWrappoerHeight = adWrapper.offsetHeight;
  var initialWidth = adWrappoerWidth;
  var initialHeight = Math.round(adWrappoerWidth * 1.7);
  var winW = data && typeof data.sfGeomObj !== "undefined" ? data.sfGeomObj.win.w : window.innerWidth;
  var winH = data && typeof data.sfGeomObj !== "undefined" ? data.sfGeomObj.win.h : window.innerHeight;
  var winO = window.orientation || null;
  var determinedOrientation = winH <= winW || winO === 90 || winO === -90 ? "land" : "port";
  var finalWidth;
  var finalHeight; // if creative content would overflow available display space reduce creative content area

  if (initialHeight > adWrappoerHeight) {
    finalWidth = Math.round(adWrappoerHeight * 0.66666);
    finalHeight = adWrappoerHeight;
  } else {
    finalWidth = initialWidth;
    finalHeight = initialHeight;
  }

  if (window.innerWidth < 705) {
    adWrapper.style.width = determinedOrientation === "port" ? "100%" : finalWidth + "px";
    adWrapper.style.height = finalHeight + "px";
  } //console.log("final height: ",finalHeight);

}

function sizeContentAreaFFMobile() {
  var adWrapper = document.getElementById("willow-ad-stage");
  adWrapper.style.maxHeight = "380px";
  adWrapper.style.height = "380px";
}

function setCreativeVersion() {
  // START ADD BY MSD
  sendMessage("setCreativeVersion", {
    creativeId: creativeId + " - " + templateName,
    creativeVersion: creativeVersion,
    creativeLastModified: lastModified,
    uid: uid
  }); // END ADD BY MSD
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
    interAd: !!interAd,
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
  if (listenerQueue[listenerId]) delete listenerQueue[listenerId];
}

function eventManager(event) {
  var msg;

  if (_typeof(event) == "object" && event.data) {
    msg = JSON.parse(event.data);
  } else {
    // this is safe frame.
    msg = {
      type: event.type,
      data: event
    };
  }

  if (msg.type && msg.data && (!uid || msg.data.uid && msg.data.uid == uid)) {
    switch (msg.type) {
      case "sendCreativeId":
        creativeIFrameId = msg.data.creativeIFrameId;
        addCustomScriptEventListener('pageScroll', onPageScroll);
        addCustomScriptEventListener('creativeResize', sizeContentArea);
        sendMessage("dispatchScrollPos", {
          uid: uid
        });
        if (creativeContainerReady) creativeContainerReady();
        break;

      case "eventCallback":
        // Handle Callback
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

window.addEventListener("message", function () {
  try {
    eventManager.apply(this, arguments);
  } catch (e) {}
}, false);
window.addEventListener("load", checkIfAdKitReady);
"use strict";

/*
  Willow Studios Inc.
  contact info:  contact@willow.studio
  Happy to help with any development and Animation
  --------------------------------------------------------------------------------------------



                                        contact@willow.studio                                       
                                       HappyToDevelopAnything:)                                     
                                     webGL./. | .|  |- |+ ..SVG|                                    
                                    .CSS  +. .+  |  |  |:    htm|                                   
                                    :21|  |. .|  |  |  |:     747                                   
                                    :MM.  |. .|  |  |  |: .|  NM|                                   
                             .......|MM.  |. .|  |  |  |: .|  NMy.......                            
                          .|aftereffects  |. .|  |  |  |:  |  CanvasAnima||                         
                        .|CREATOR|::|::|. |. .|  |  |  |;  |  |  .||S|:GREAT.                       
                        |MN: .  || .|  0. |. .|  |  |  |#  |  |. |: .|   .dMd                       
                        NM|  0. :|  |  |  |. .|  |  |  |C  |  |  /| .|    :MM|                      
                       .MM|  |  :|  |  |  |. .|  |  |  |+  |  |  /| .|  : .MM/                      
                       .MM|  |  :|  |  |  |. .|  |  |  |+  |  |  /| .|  y..MM/                      
              ../||||||yMM/  |  :|  |  | .|. .|  |  |  |:  |  |  /| .|  | .MMh||||||+|.             
            .+646.824.6777.  |  :|  |  | ||. .|  |  |  |:  +  |  /| .|  | .yyyyhyyhdNMN|.           
           .dMm/|  |. |. .|  |  :|  |  | .|      |  |  |:     |  /| .|  |  || :+ .:  :hMN|          
           |MN. |. |. |.  |  |  :|  |  |  .      |  :  |:     |  /- .|  |  +. .| .y  /.hMd          
           dMh  |  |. |.  |  |  ..  |  |         .     .-     -  /-  |  |  +. .|  |  | +MM          
           dMh  |  |. |.  |  |   .ydmddmddh|+.          .+|jQuery+++ .  |  +. .|  |  | +MM.         
           dMh  |  |. |.  |  |   .||d||d||ymMMh.      NODEJS|||||||+    |  +. .|  |  | +MM.         
           hM|  .  |. ..  |  |      |  |    -dMN-    /MMy.              |  +. .|  |    /MN          
            .      |.     |  .      |  |     .mMm   .NMh                |  +. .|  |.    ..          
                   .      |         :  |      for.  :MM/                |     .|  .                 
                          |            |      {i}.  :MM/                |     .|                    
                          |            |      oMM.  :MM/                .     .|                    
                          .            .  +y/ oMM.  :MM/                                        
                                          ymy oMM.  :MM/                                            
                           -o-   /o-   /+.:s: oMM.  :MM+   .+/   .+/   .+-                          
                           :Nd  :NNd. -Nm.hNy oMM.  :MM+   .dN: .dNN/  hN/                          
                            yN+ dmoNo hN/ hNy oMM.  :MM+    :Nh +Nsmd./Nh                           
                            \mmoNo dm+Ny  hNy sMM.  :MM+.oyo.sN+md.+Nodm/                           
                             /NNd. :NNm.  hNy sMM.  :MM//MMM+.dNN/ .dNN+                            
                              \+.   .+/   -+- -o/   .++..:+/. \+/   .+/ 


----------------------------------------------------------------------------------------------
*/
// @codekit-prepend  "willow-js/stage.js"
// @codekit-prepend  "willow-js/sprite.js"
// @codekit-prepend  "willow-js/utility.js"
// @codekit-prepend  "OmniVirt-Player.js"
// @codekit-prepend  "_Sizmek.2.js"
var listenerQueue;
var creativeIFrameId;
window.prerollOnce = false;
window.playstatus = false;
window.playHeadPosition = 0;
var timer;
var fromBegining = true;
var isPlayer = false;
var getTime;
var soundStats = true;
var currentWidthOfSite; //var vidPlayer;

var showLogoStats;
var stage, PlayPauseBtn, soundBtn, PlayPauseBtn, videoCTA, videoLogo;
var disclaimerStats = false;
var DEBUG = true;
var childIndex = 0;
var adType;
var USE_RESIZE_LISTENER = true;
var virgin = true;
var videoDuration;
var introDisplayed = false;
var initialLongtituteValue = 180;
var volume = 0;
var adData = {
  type: "FF",
  // FXL , FF
  FXL_Desktop: {
    url: "./assets/images/fxl-desktop-cover.jpg",
    code: 203453,
    quality: 4,
    id: 11942.619469115469
  },
  FXL_Mobile: {
    url: "./assets/images/fxl-mobile-cover.jpg",
    code: 119230,
    quality: 2,
    id: 12108.286135782137
  },
  FF_Mobile: {
    url: "./assets/images/ff-mobile-cover.jpg",
    code: 71871,
    quality: 2,
    id: 12108.286135782137
  }
};
var device;
var soundStats = true;
var Q1, Q2, Q3;
var Q1_Stats = true;
var Q2_Stats = true;
var Q3_Stats = true; // Get IE or Edge browser version

var version = detectIE();
console.log("IE version: ", version); //var calculatedID = Number(Encoded - Math.PI) / 3;
//console.log("-------- vid id: ",calculatedID);

function videoTracking(what) {
  //console.log("SWITCH value: ",what);
  //	console.log("EB.userActionCounter: ", arguments);
  switch (what) {
    case "25%":
      window.EB.userActionCounter("video-25%");
      break;

    case "50%":
      window.EB.userActionCounter("video-50%");
      break;

    case "75%":
      window.EB.userActionCounter("video-75%");
      break;

    case "100%":
      window.EB.userActionCounter("video-100%");
      break;

    case "play":
      window.EB.userActionCounter("video-play");
      break;

    case "pause":
      window.EB.userActionCounter("video-pause");
      break;

    case "completed":
      window.EB.userActionCounter("video-completed");
      break;

    case "volume-on":
      window.EB.userActionCounter("video-volume-on");
      break;

    case "volume-off":
      window.EB.userActionCounter("video-volume-off");
      break;

    default:
      console.log("empty video tracking");
  }
}

function adExit() {
  if (playstatus) {
    OmniVirt.api.sendMessage('pause', null, document.getElementById("ado-" + calculatedID));
  }

  window.EB.clickthrough();
  console.log("EB.clickThrough: ", arguments);
}

var calculatedID;

function init(all) {
  console.log("--------------- version --------- ", 1); //window.EB.userActionCounter("ad-init");

  var stage = document.getElementById("willow-ad-stage");
  var adContainer = new Sprite({
    id: "adContainer",
    class: "adContainerStyle",
    container: stage
  });
  window.adWidth = document.getElementById("adContainer").offsetWidth;

  if (adWidth < 705) {
    device = "Mobile";
  } else {
    device = "Desktop";
  } //calculatedID =  adData[adData.type + "_" + device].id; 
  //var encodeVal = Number(calculatedID - Math.PI) / 3;
  //console.log("encode: ",encodeVal);  // 11942.619469115469


  calculatedID = Number(adData[adData.type + "_" + device].id) * 3 + Math.PI; //console.log("decode: ", decodeVal);

  var vidContainer = new Sprite({
    id: "vidContainer",
    class: "vidContainer-Style",
    container: adContainer.obj
  });
  var videoCover = new Sprite({
    id: "videoCover",
    class: "videoCover-Style",
    container: vidContainer.obj,
    click: {
      function: function _function() {
        adExit();
      }
    }
  });
  var Panaromaicon = new Sprite({
    id: "Panaromaicon",
    class: "Panaromaicon-style",
    container: vidContainer.obj
  });
  var PanaromaIndocator = new Sprite({
    id: "PanaromaIndocator",
    class: "PanaromaIndocator-style",
    container: Panaromaicon.obj
  });
  var introCopy = new Sprite({
    id: "introCopy",
    class: "introCopy-style",
    container: vidContainer.obj
  });
  var copyContainer = new Sprite({
    id: "copyContainer",
    class: "copyContainer-Style",
    container: adContainer.obj,
    click: {
      function: function _function() {
        adExit();
      }
    }
  });
  var cta = new Sprite({
    id: "cta",
    class: "cta-style",
    container: adContainer.obj,
    click: {
      function: function _function() {
        adExit();
      }
    }
  });
  stage.style.display = "block";

  function soundToggle(event) {
    if (soundStats) {
      soundStats = false;
      speakerBtn.obj.style.display = "none";
      muteBtn.obj.style.display = "block"; // vidPlayer.mute();

      OmniVirt.api.sendMessage('audio', 0, document.getElementById("ado-" + calculatedID));
    } else {
      soundStats = true;
      speakerBtn.obj.style.display = "block";
      muteBtn.obj.style.display = "none"; // vidPlayer.unmute();

      OmniVirt.api.sendMessage('audio', 1, document.getElementById("ado-" + calculatedID));
    }
  } // ------------------------------------------------------
  // Onmivir Player init code with some custom stuff in it


  setTimeout(function () {
    console.log("load video player");
    var OI = new OmniVirtiFrame({
      id: calculatedID,
      domain: "cdn.omnivirt.com",
      // www.vroptimal-3dx-assets.com, cdn.omnivirt.com
      container: vidContainer.obj,
      autoplay: false,
      control: false,
      player: true,
      allowFullScreen: true,
      audio: 1,
      onPlay: {
        function: function _function() {
          console.log("..... playing");
          videoCover.obj.style.display = "none";
          cta.obj.style.display = "block";
          copyContainer.obj.style.display = "none";
          Panaromaicon.obj.style.display = "block";

          if (!introDisplayed) {
            introCopy.obj.style.display = "block";
            introDisplayed = true;
          }
        }
      },
      onLoaded: {
        function: function _function(content) {
          OmniVirt.api.sendMessage('cameraFocalLength', 15, content);
          OmniVirt.api.sendMessage('cameraZoom', 1, content);
          OmniVirt.api.sendMessage('enable', "gyroscope", content); //console.log(adWidth);
          //	OmniVirt.api.sendMessage('quality',adData[adData.type + "_" + device].quality,content);
        }
      },
      onPause: {
        function: function _function() {
          //playstatus = false;
          videoCover.obj.style.display = "block";
          console.log('Paused');
          muteBtn.obj.style.display = "none";
          speakerBtn.obj.style.display = "none";
          playBtn.obj.style.visibility = "visible";
          pauseBtn.obj.style.visibility = "hidden";
          cta.obj.style.display = "none";
          copyContainer.obj.style.display = "block";
          Panaromaicon.obj.style.display = "none";
          introCopy.obj.style.display = "none";
        }
      },
      onEnd: {
        function: function _function() {
          //playstatus = false;
          if (virgin) {
            videoTracking("100%");
            videoTracking("completed");
          }

          console.log('video-ended');
          muteBtn.obj.style.display = "none";
          speakerBtn.obj.style.display = "none";
          cta.obj.style.display = "none";
          Panaromaicon.obj.style.display = "none";
          copyContainer.obj.style.display = "block";
          introCopy.obj.style.display = "none";
          pauseVideo();
        }
      },
      onDuration: {
        function: function _function(d) {
          videoDuration = d;
          Q1 = videoDuration / 4;
          Q2 = videoDuration / 2;
          Q3 = videoDuration / 4 * 3;
          console.log("duration: ", videoDuration, Q1, Q2, Q3);
        }
      },
      onLongitude: {
        function: function _function(d) {
          //console.log("Longtitude value: ",d);
          TweenMax.to(PanaromaIndocator.obj, 0.1, {
            rotation: d
          });

          if (d != initialLongtituteValue) {
            introCopy.obj.style.display = "none";
          }
        }
      },
      onProgress: {
        function: function _function(d) {
          if (playstatus) {
            playHeadPosition = Math.round(d * 100); //console.log(playHeadPosition);

            if (Q1_Stats) {
              if (playHeadPosition == 25) {
                Q1_Stats = false;
                videoTracking("25%");
              }
            }

            if (Q2_Stats) {
              if (playHeadPosition == 50) {
                Q2_Stats = false;
                videoTracking("50%");
              }
            }

            if (Q3_Stats) {
              if (playHeadPosition == 75) {
                Q3_Stats = false;
                videoTracking("75%");
              }
            }
          }
        }
      },
      onAudio: {
        function: function _function(d) {
          volume = d; //console.log("volume: ", volume);

          if (volume == 1) {
            muteBtn.obj.style.display = "block";
            speakerBtn.obj.style.display = "none";
          } else {
            muteBtn.obj.style.display = "none";
            speakerBtn.obj.style.display = "block";
          }
        }
      },
      onQuality: {
        function: function _function(d) {
          console.log("--------  current video quality: ", d);
        }
      },
      type: "",
      bgstyle: "iframeBG-style"
    });
  }, 100);
  var playBtn = new Sprite({
    id: "playBtn",
    class: "playBtn-Style",
    container: vidContainer.obj,
    click: {
      function: function _function() {
        playstatus = true;
        playVideo();
      }
    }
  });
  var pauseBtn = new Sprite({
    id: "pauseBtn",
    class: "pauseBtn-Style",
    container: vidContainer.obj,
    click: {
      function: function _function() {
        playstatus = false;
        pauseVideo();
      }
    }
  });
  var speakerBtn = new Sprite({
    id: "speakerBtn",
    class: "speakerBtn-style",
    container: vidContainer.obj,
    click: {
      function: soundToggle
    }
  });
  var muteBtn = new Sprite({
    id: "muteBtn",
    class: "muteBtn-style",
    container: vidContainer.obj,
    click: {
      function: soundToggle
    }
  }); // -------------- end of Onmivirt init code -----------------

  var playVideo = function playVideo() {
    //console.log("play video now");
    OmniVirt.api.sendMessage('play', null, document.getElementById("ado-" + calculatedID));
    videoCover.obj.style.display = "none";
    playBtn.obj.style.visibility = "hidden";
    pauseBtn.obj.style.visibility = "visible";
    videoTracking("play");
  };

  var pauseVideo = function pauseVideo() {
    console.log("pause video now");
    OmniVirt.api.sendMessage('pause', null, document.getElementById("ado-" + calculatedID));
    playBtn.obj.style.visibility = "visible";
    videoCover.obj.style.display = "block";
    pauseBtn.obj.style.visibility = "hidden";
    videoTracking("pause");
  };
}

function initFXL() {
  var whichOne;
  var code;

  if (window.innerWidth < 705) {
    whichOne = adData.FXL_Mobile.url;
    code = adData.FXL_Mobile.code;
  } else {
    whichOne = adData.FXL_Desktop.url;
    code = adData.FXL_Desktop.code;
  }

  var firstImageFileSize = fileSize(whichOne, function (filesize) {
    var FS = Number(filesize);
    console.log("image file size: ", filesize);

    if (FS == code || FS == 0) {
      init(window.stage);
    } else {
      console.log("aint gonna happen");
    }
  });
}

function initFF() {
  var firstImageFileSize = fileSize(adData.FF_Mobile.url, function (filesize) {
    var FS = Number(filesize);
    console.log("image file size: ", filesize);

    if (FS == adData.FF_Mobile.code || FS == 0) {
      init(window.stage);
    } else {
      //init(window.stage);
      console.log("aint gonna happen");
    }
  });
} //window.adType = "FlexFrame";

//# sourceMappingURL=app-min.js.map
