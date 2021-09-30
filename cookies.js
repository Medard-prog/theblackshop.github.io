function _getPathForCookie() {
    var _path = "" + window.location.pathname;
    var n = _path.indexOf("/", 1);
    if (n > 0) {
        _path = _path.substring(0, n);
    }
    return _path;
}

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    var secure = "";
    if (("" + location.protocol).toLowerCase().indexOf("https") == 0) {
        secure = "; Secure";
    }
    // leave path empty => will be filled by system with the current path
    // valid path must be used to can run different instances on the same machines with different settings
    document.cookie = name + "=" + value + expires + secure + "; SameSite=strict; path=" + _getPathForCookie();
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            var cval = c.substring(nameEQ.length, c.length);

            return cval;
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}