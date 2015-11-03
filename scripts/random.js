'use strict';

var xtrValue = 1;

function setExtremeValue(value) {
    let xtrText = "How extreme are you? ";
    let xtrStatus = "";
    xtrValue = parseInt(value);

    switch (xtrValue) {
        case 0:
            xtrStatus = "Mellow";
            break;
        case 1:
            xtrStatus = "Semi";
            break;
        case 2:
            xtrStatus = "Very";
            break;
    }

    document.getElementById("xtrStatus").innerHTML = xtrText + xtrStatus;
}

function moveToEvent() {
    let rnd = Math.floor(Math.random() * 3);

    // TODO: Random in each case.

    switch (xtrValue) {
        case 0:
            location.href = "login.html";
            break;
        case 1:
            location.href = "login.html";
            break;
        case 2:
            if (rnd === 0 || rnd === 1) {
                location.href = "ParaglidingView.html";
            } else if (rnd === 2) {
                location.href = "RiverView.html";
            }

            break;
        default:
            location.href = "login.html";
        // Same as 2
    }
}
