

function ET (what) {

    // fireNounTracking("interaction", what);

    // switch(what) {
        
    //     case "slideshow-completed":
    //         window.EB.userActionCounter("slideshow-completed");
    //         break;
    //     case "slide-1_slide-2":
    //         window.EB.userActionCounter("slide-1_slide-2");
    //         break;
    //     case "slide-2_slide-3":
    //         window.EB.userActionCounter("slide-2_slide-3");
    //         break;
    //     case "slide-3_slide-1":
    //         window.EB.userActionCounter("slide-3_slide-1");
    //         break;
    //     case "slide-3_slide-2":
    //         window.EB.userActionCounter("slide-3_slide-2");
    //         break;
    //     case "slide-2_slide-1":
    //         window.EB.userActionCounter("slide-2_slide-1");
    //         break;
    //     case "slide-1_slide-3":
    //         window.EB.userActionCounter("slide-1_slide-3");
    //         break;
       
    // }
}

function CT (what) {
    switch(what) {
        case "logo":
            window.EB.clickthrough("logo");
            break;
            case "cta":
            window.EB.clickthrough("cta");
            break;
            case "background":
            window.EB.clickthrough("background");
            break;
            case "messaging":
            window.EB.clickthrough("messaging");
            break;
        
    }
}
