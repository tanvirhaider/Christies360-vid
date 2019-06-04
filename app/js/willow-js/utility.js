

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






function detectIE() {
	var ua = window.navigator.userAgent;
  
	// Test values; Uncomment to check result …
  
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
	}
  
	// other browser
	return false;
  }
  
  
 

  

