

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
var currentWidthOfSite;
//var vidPlayer;
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
	type: "FF",  // FXL , FF
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
}

var device;
var soundStats = true;
var Q1, Q2, Q3;
var Q1_Stats = true;
var Q2_Stats = true;
var Q3_Stats = true;


 // Get IE or Edge browser version
 var version = detectIE();
 console.log("IE version: ",version);

 //var calculatedID = Number(Encoded - Math.PI) / 3;
//console.log("-------- vid id: ",calculatedID);




function videoTracking (what) {
	//console.log("SWITCH value: ",what);
//	console.log("EB.userActionCounter: ", arguments);
	switch(what) {
		
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

function adExit () {
	if (playstatus) {
		OmniVirt.api.sendMessage('pause',null,document.getElementById("ado-" + calculatedID));
	}

	window.EB.clickthrough();
	console.log("EB.clickThrough: ", arguments);

}




var calculatedID;

function init (all) {
	console.log("--------------- version --------- ",1);
	//window.EB.userActionCounter("ad-init");
	var stage = document.getElementById("willow-ad-stage");

	var adContainer = new Sprite({
		id: "adContainer",
		class: "adContainerStyle",
		container: stage
	});

	

	window.adWidth = document.getElementById("adContainer").offsetWidth;
	if (adWidth < 705) {
		device = "Mobile";
		
	}
	else {
		device = "Desktop";
	}

	//calculatedID =  adData[adData.type + "_" + device].id; 
	//var encodeVal = Number(calculatedID - Math.PI) / 3;
	//console.log("encode: ",encodeVal);  // 11942.619469115469
	calculatedID = Number(adData[adData.type + "_" + device].id) * 3 + Math.PI;
	//console.log("decode: ", decodeVal);

	var vidContainer = new Sprite({
		id: "vidContainer",
		class: "vidContainer-Style",
		container: adContainer.obj
	});

	var videoCover = new Sprite({
		id: "videoCover",
		class: "videoCover-Style",
		container: vidContainer.obj,
		click: {function() {adExit ();}}
	});

	

	var Panaromaicon = new Sprite({
		id:"Panaromaicon",
		class: "Panaromaicon-style",
		container:vidContainer.obj
	});

	var PanaromaIndocator = new Sprite({
		id:"PanaromaIndocator",
		class: "PanaromaIndocator-style",
		container:Panaromaicon.obj
	});

	var introCopy = new Sprite({
		id:"introCopy",
		class: "introCopy-style",
		container:vidContainer.obj
	});

	var copyContainer = new Sprite({
		id: "copyContainer",
		class: "copyContainer-Style",
		container: adContainer.obj,
		click: {function() {adExit ();}}
	});

	var cta = new Sprite({
		id:"cta",
		class: "cta-style",
		container:adContainer.obj,
		click: {function() {adExit ();}}
	  });


	stage.style.display = "block";

	function soundToggle (event) {
		if (soundStats) {
		  soundStats = false;
		  speakerBtn.obj.style.display = "none";
		  muteBtn.obj.style.display = "block";
		 // vidPlayer.mute();
		 OmniVirt.api.sendMessage('audio',0,document.getElementById("ado-" + calculatedID));
		}
		else {
		  soundStats = true;
		  speakerBtn.obj.style.display = "block";
		  muteBtn.obj.style.display = "none";
		 // vidPlayer.unmute();
		 OmniVirt.api.sendMessage('audio',1,document.getElementById("ado-" + calculatedID));
		}
	  }

	// ------------------------------------------------------
	// Onmivir Player init code with some custom stuff in it

	setTimeout(function(){ 

		console.log("load video player");

		var OI = new OmniVirtiFrame ({
			id: calculatedID,
			domain: "cdn.omnivirt.com", // www.vroptimal-3dx-assets.com, cdn.omnivirt.com
			container: vidContainer.obj,
			autoplay: false,
			control: false,
			player: true,
			allowFullScreen: true,
			audio: 1,
			onPlay: {
				function: function () {
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
				function: function (content) {
					OmniVirt.api.sendMessage('cameraFocalLength',15,content);
					OmniVirt.api.sendMessage('cameraZoom',1,content);
					OmniVirt.api.sendMessage('enable',"gyroscope",content);
					
					//console.log(adWidth);
	
					
	
				//	OmniVirt.api.sendMessage('quality',adData[adData.type + "_" + device].quality,content);
				}
			},
			onPause: {
				function: function () {
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
				function: function () {
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
				function: function (d) {
					videoDuration = d;
					Q1 = videoDuration / 4;
					Q2 = videoDuration / 2;
					Q3 = ( videoDuration / 4 ) * 3;
					console.log("duration: ",videoDuration, Q1, Q2, Q3);
				}
			},
			onLongitude: {
				function: function (d) {
					//console.log("Longtitude value: ",d);
					TweenMax.to(PanaromaIndocator.obj, 0.1,{rotation: d});
	
					if (d != initialLongtituteValue) {
						introCopy.obj.style.display = "none";
					}
				}
			},
			onProgress: {
				function: function (d) {
					if (playstatus) {
						playHeadPosition = Math.round(d * 100);
						//console.log(playHeadPosition);
						if (Q1_Stats) {
							if (playHeadPosition == 25) {
								Q1_Stats = false;
								videoTracking ( "25%");
							}
						}
						if (Q2_Stats) {
							if (playHeadPosition == 50) {
								Q2_Stats = false;
								videoTracking ( "50%");
							}
						}
						if (Q3_Stats) {
							if (playHeadPosition == 75) {
								Q3_Stats = false;
								videoTracking ( "75%");
							}
						}
					}
				}
			},
			onAudio: {
				function: function (d) {
					volume = d;
					//console.log("volume: ", volume);
					if (volume == 1) {
						muteBtn.obj.style.display = "block";
						speakerBtn.obj.style.display = "none";
					}
					else {
						muteBtn.obj.style.display = "none";
						speakerBtn.obj.style.display = "block";
					}
				}
			},
			onQuality: {
				function: function (d) {
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
		click: {function() {
			playstatus = true;
			playVideo();
		}}
	});

	var pauseBtn = new Sprite({
		id: "pauseBtn",
		class: "pauseBtn-Style",
		container: vidContainer.obj,
		click: {function() {
			playstatus = false;
			pauseVideo();
		}}
	});

	var speakerBtn = new Sprite({
		id:"speakerBtn",
		class: "speakerBtn-style",
		container:vidContainer.obj,
		click: {function: soundToggle}
		});
	
	var muteBtn = new Sprite({
		id:"muteBtn",
		class: "muteBtn-style",
		container:vidContainer.obj,
		click: {function: soundToggle}
	});

	// -------------- end of Onmivirt init code -----------------







	var playVideo = function () {
		//console.log("play video now");
		OmniVirt.api.sendMessage('play',null,document.getElementById("ado-" + calculatedID));
		videoCover.obj.style.display = "none";
		playBtn.obj.style.visibility = "hidden"; 
		pauseBtn.obj.style.visibility = "visible";
		videoTracking("play");
	}

	var pauseVideo = function () {
		console.log("pause video now");
		OmniVirt.api.sendMessage('pause',null,document.getElementById("ado-" + calculatedID));
		playBtn.obj.style.visibility = "visible"; 
		videoCover.obj.style.display = "block";
		pauseBtn.obj.style.visibility = "hidden";
		videoTracking("pause");
	}


}



function initFXL () {

	var whichOne;
	var code;
	if (window.innerWidth < 705) {
		whichOne = adData.FXL_Mobile.url;
		code = adData.FXL_Mobile.code;
	}
	else {
		whichOne = adData.FXL_Desktop.url;
		code = adData.FXL_Desktop.code;
	}
	
	var firstImageFileSize = fileSize(whichOne, function (filesize) {
		var FS = Number(filesize);
		console.log("image file size: ", filesize);
		if ((FS == code) || (FS == 0)) { init(window.stage);}
		else {console.log("aint gonna happen");}

	});

}


function initFF () {
	
	var firstImageFileSize = fileSize(adData.FF_Mobile.url, function (filesize) {
		var FS = Number(filesize);
		console.log("image file size: ", filesize);
		if ((FS == adData.FF_Mobile.code) || (FS == 0)) {
			init(window.stage);
		}
		else {
			//init(window.stage);
			console.log("aint gonna happen");
		}

	});

}


//window.adType = "FlexFrame";
