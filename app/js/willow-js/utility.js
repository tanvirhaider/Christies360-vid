

// -------- ******* UTILITY ******* --------- 

function createClass(name,rules)
{
    var style = document.createElement('style');
    style.type = 'text/css';
    style.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule)  {(style.styleSheet || style.sheet).addRule(name, rules);}
    else {style.sheet.insertRule(name+"{"+rules+"}",0);}
}



var fileSize = function (whichFile,callbackfunc) {
	console.group("FileSizeCheck");
	var fileSizeinbytes = 0;
	try {
		var XMLHfsize = new XMLHttpRequest();
		XMLHfsize.open('HEAD', whichFile, true);
		XMLHfsize.onreadystatechange = function(){
			if ( XMLHfsize.readyState == 4 ) {
				console.log("XMLHttpRequest status: ", XMLHfsize.status);
				if ( XMLHfsize.status == 200 ) {
					console.log("file exists");
					fileSizeinbytes = XMLHfsize.getResponseHeader('Content-Length');
					console.log("fsize:",fileSizeinbytes);
					callbackfunc (fileSizeinbytes);
				} 
				else {
					console.log("file does not exists");
					fileSizeinbytes = 0;
					callbackfunc (fileSizeinbytes);
				}
			}
		};

		XMLHfsize.send(null);
	}
	catch (Error) {
		console.log("XMLHttpRequest didn't work ", Error);;
		callbackfunc (fileSizeinbytes);
	}
	
	console.groupEnd("FileSizeCheck");
	
}


// function createOmniVirtIframe (data) {
// 	console.log("create omnivirt video");
// 	var container = data.container;
// 	var videoFile = data.id;
// 	var CUSTOM_PLAYER_PATH = "//static.vroptimal-3dx-assets.com/manual_upload/2018-05+nyt-3d/omnivirt_custom_nyt_3d.html";
// 	var CUSTOM_PLAYER_P2 = "//www.vroptimal-3dx-assets.com/manual_upload/2018-05+nyt-3d/omnivirt_custom_nyt_3d.html/";
// 	var AUTO_PLAY = 'false';
// 	var SITE_URL = encodeURIComponent(window.location.href);
// 	//var TYPE = 'VIDEO_MOBILE_NON_FLITE';
// 	var TYPE = '';
// 	var WIDTH = '100%';
// 	var HEIGHT = '100%';
// 	//var url = CUSTOM_PLAYER_PATH + "?id=" + videoFile + "&autoplay=" + AUTO_PLAY + "&control=false&referer=" + SITE_URL + "&type=" + TYPE;
// 	//var url = "//www.vroptimal-3dx-assets.com/content/"+videoFile+"?player=true" + "&control=" + data.control + "&autoplay=" + data.autoplay + "&referer=" + SITE_URL + "&type=" + TYPE;

// 	var iframeContainer = container;
// 	iframeContainer.style.display = "block";
// 	var iframe = document.createElement('iframe');
// 	iframe.setAttribute('id', "ado-" + videoFile );
// 	iframe.setAttribute('frameborder', "0");
// 	iframe.setAttribute('webkitAllowFullScreen',data.allowFullScreen);
// 	iframe.setAttribute('mozallowfullscreen',data.allowFullScreen);
// 	iframe.setAttribute('allowFullScreen',data.allowFullScreen);
// 	//iframe.setAttribute("src",CUSTOM_PLAYER_P2  + "?id=" + videoFile + "&player=" + data.player + "&control=" + data.control + "&autoplay=" + data.autoplay + "&referer=" + SITE_URL + "&type=" + TYPE);
// 	iframe.setAttribute("src","//www.vroptimal-3dx-assets.com/content/" + videoFile + "?id=" + videoFile + "&player=" + data.player + "&control=" + data.control + "&autoplay=" + data.autoplay + "&audio=" + data.audio + "&referer=" + SITE_URL + "&type=" + TYPE);
// 	//console.log(url);
// 	//iframe.setAttribute("src",url);
// 	iframeContainer.appendChild(iframe);
// 	var iframeBG = document.createElement("iframeBG");
// 	iframeBG.className += "iframeBG-style";
// 	iframeContainer.appendChild(iframeBG);
// }
