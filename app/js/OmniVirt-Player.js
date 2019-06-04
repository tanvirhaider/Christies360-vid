


class OmniVirtiFrame {
    constructor (appdata) {
        var SITE_URL = encodeURIComponent(window.location.href);

        var iframeContainer = appdata.container;
        iframeContainer.style.display = "block";
        var iframe = document.createElement('iframe');
        iframe.setAttribute('id', "ado-" + appdata.id);
        iframe.setAttribute('frameborder', "0");
        iframe.setAttribute('webkitAllowFullScreen', appdata.allowFullScreen);
        iframe.setAttribute('mozallowfullscreen', appdata.allowFullScreen);
        iframe.setAttribute('allowFullScreen', appdata.allowFullScreen);
        iframe.setAttribute("src", "//" + appdata.domain + "/content/" + appdata.id
            + "?id=" + appdata.id
            + "&player=" + appdata.player
            + "&control=" + appdata.control
            + "&autoplay=" + appdata.autoplay
            + "&audio=" + appdata.audio
            + "&referer=" + SITE_URL
            + "&type=" + appdata.type);

        iframeContainer.appendChild(iframe);

        if (appdata.bgstyle) {
            var iframeBG = document.createElement("iframeBG");
            iframeBG.className += appdata.bgstyle;
            iframeContainer.appendChild(iframeBG);
        }

        if (appdata.onPlay) {
            OmniVirt.api.receiveMessage(window, "started", function(type, data, iframe) {
                appdata.onPlay.function ();
            });
        }

        if (appdata.onPause) {
            OmniVirt.api.receiveMessage(window, "paused", function(type, data, iframe) {
                appdata.onPause.function ();
            });
        }

        if (appdata.onEnd) {
            OmniVirt.api.receiveMessage(window, "ended", function(type, data, iframe) {
                appdata.onEnd.function ();
            });
        }

        if (appdata.onProgress) {
            OmniVirt.api.receiveMessage(window, "progress", function(type, data, iframe) {
                appdata.onProgress.function (data);
            });
        }

        if (appdata.onDuration) {
            OmniVirt.api.receiveMessage(window, "duration", function(type, data, iframe) {
                appdata.onDuration.function (data);
            });
        }

        if (appdata.onLongitude) {
            OmniVirt.api.receiveMessage(window, "longitude", function(type, data, iframe) {
                appdata.onLongitude.function (data);
            });
        }

        if (appdata.onLatitude) {
            OmniVirt.api.receiveMessage(window, "latitude", function(type, data, iframe) {
                appdata.onLatitude.function (data);
            });
        }

        if (appdata.onAudio) {
            OmniVirt.api.receiveMessage(window, "audio", function(type, data, iframe) {
                appdata.onAudio.function (data);
            });
        }

        if (appdata.onLoaded) {
            OmniVirt.api.receiveMessage(window, "loaded", function(type, data, iframe) {
                appdata.onLoaded.function (iframe);
            });
        }

        if (appdata.onQuality) {
            OmniVirt.api.receiveMessage(window, "quality", function(type, data, iframe) {
                appdata.onQuality.function (data);
            });
        }
    }
  
}

