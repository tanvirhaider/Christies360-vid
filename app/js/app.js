


// @codekit-prepend "_GlobalVars.js"
// @codekit-prepend  "willow-js/stage.js"
// @codekit-prepend  "willow-js/sprite.js"
// @codekit-prepend  "willow-js/utility.js"
// @codekit-prepend  "OmniVirt-Player.js"
// @codekit-prepend  "_Sizmek.2.js"


window.prerollOnce = false;
window.playstatus = false;
window.playHeadPosition = 0;
var timer;
var fromBegining = true;
var isPlayer = false;
var getTime;
var soundStats = true;
var videoID = 107493;
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

var volume = 0;

var soundStats = true;
var Q1, Q2, Q3;
var Q1_Stats = true;
var Q2_Stats = true;
var Q3_Stats = true;

var calculatedID = Number(videoID) / 3;
//console.log(calculatedID);



function videoTracking (what) {
	//console.log("SWITCH value: ",what);
	console.log("EB.userActionCounter: ", arguments);
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
//	console.log("EB.clickThrough: ", arguments);

}






function init (all) {
	window.EB.userActionCounter("ad-init");
	var stage = document.getElementById("willow-ad-stage");

	var adContainer = new Sprite({
		id: "adContainer",
		class: "adContainerStyle",
		container: stage
	});

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

	var copy = new Sprite({
		id: "copy",
		class: "copy-Style",
		container: adContainer.obj,
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



	var OI = new OmniVirtiFrame ({
		id: calculatedID,
		container: vidContainer.obj,
		autoplay: false,
		control: false,
		player: true,
		allowFullScreen: true,
		audio: 1,
		onPlay: {
			function: function () {
				console.log("..... playing");
			}
		},
		onLoaded: {
			function: function (content) {
				OmniVirt.api.sendMessage('cameraFocalLength',15,content);
				OmniVirt.api.sendMessage('cameraZoom',1,content);
			}
		},
		onPause: {
			function: function () {
				//playstatus = false;
				videoCover.obj.style.visibility = "visible";
				console.log('Paused');
				muteBtn.obj.style.display = "none";
				speakerBtn.obj.style.display = "none";
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
		onProgress: {
			function: function (d) {
				if (playstatus) {
					playHeadPosition = Math.round(d * 100);
					console.log(playHeadPosition);
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
				console.log("volume: ", volume);
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
		type: "VIDEO_MOBILE_NON_FLITE",
		bgstyle: "iframeBG-style"
	});



	var playVideo = function () {
		console.log("play video now");
		OmniVirt.api.sendMessage('play',null,document.getElementById("ado-" + calculatedID));
		videoCover.obj.style.visibility = "hidden";
		playBtn.obj.style.visibility = "hidden"; 
		pauseBtn.obj.style.visibility = "visible";
		videoTracking("play");
	}

	var pauseVideo = function () {
		console.log("pause video now");
		OmniVirt.api.sendMessage('pause',null,document.getElementById("ado-" + calculatedID));
		playBtn.obj.style.visibility = "visible"; 
		videoCover.obj.style.visibility = "visible";
		pauseBtn.obj.style.visibility = "hidden";
		videoTracking("pause");
	}


	  


  
 
   


}



function initFXL () {
	
	var firstImageFileSize = fileSize("./assets/images/cover.jpg", function (filesize) {
		var FS = Number(filesize);
		console.log("image file size: ", filesize);
		if ((FS == "241327") || (FS == 0)) {
			init(window.stage);
		}
		else {
			//init(window.stage);
			console.log("aint gonna happen");
		}

	});

}
