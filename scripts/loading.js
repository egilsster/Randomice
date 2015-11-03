var degrees = 0;
function rotateAnimation(el, speed) {
    var elem = document.getElementById(el);

    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees + "deg)";
    } else {
        elem.style.transform = "rotate(" + degrees + "deg)";
    }

    setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);
    degrees++;

    if (degrees > 359) {
        location.href = "Login.html";
    }

    if (degrees < 301) {
        var n = parseInt(degrees / 3);
        document.getElementById("status").innerHTML = "Loading(" + n + "%)";
    }
}