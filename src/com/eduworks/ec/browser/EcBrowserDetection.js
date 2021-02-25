var EcBrowserDetection = function() {};
EcBrowserDetection = stjs.extend(EcBrowserDetection, null, [], function(constructor, prototype) {
    constructor.isIeOrEdge = function() {
        if (window == null) 
            return false;
        if (window.navigator == null) 
            return false;
        if (window.navigator.appName == null) 
            return false;
        return window.navigator.appName == "Microsoft Internet Explorer" || (window.navigator.appName == "Netscape" && window.navigator.appVersion.indexOf("Edge") > -1);
    };
}, {}, {});
