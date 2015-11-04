'use strict';


const xtrText = "How extreme are you? ";

var xtrValue = 1;

var defaultStatus = "Semi";
document.getElementById("xtrStatus").innerHTML = xtrText + defaultStatus;

function setExtremeValue(value) {
    let button = $('.buttonMouse');
    let xtrStatus = "";
    xtrValue = parseInt(value);

    switch (xtrValue) {
        case 0:
            xtrStatus = "Mellow";
            button.attr("src", "../images/bathmousehead.png");
            break;
        case 1:
            xtrStatus = "Semi";
            button.attr("src", "../images/cowboymousehead.png");
            break;
        case 2:
            xtrStatus = "Very";
            button.attr("src", "../images/spacemousehead.png");
            break;
    }

    document.getElementById("xtrStatus").innerHTML = xtrText + xtrStatus;
}

function moveToEvent() {
    let rnd = Math.floor(Math.random() * 3);

    $('.buttonMouse').addClass("rotated");

    setTimeout(() => {
        switch (xtrValue) {
            case 0:
                if (rnd === 0 || rnd === 1) {
                    location.href = "../views/BowlingView.html";
                } else if (rnd === 2) {
                    location.href = "../views/SwimmingView.html";
                }
                break;
            case 1:
                if (rnd === 0) {
                    location.href = "../views/GoKartView.html";
                } else if (rnd === 1) {
                    location.href = "../views/LaserTagView.html";
                } else if (rnd === 2) {
                    location.href = "../views/PaintBallView.html";
                }
                break;
            case 2:
                if (rnd === 0 || rnd === 1) {
                    location.href = "../views/ParaglidingView.html";
                } else if (rnd === 2) {
                    location.href = "../views/RiverView.html";
                }
                break;
            default:
                location.href = "../views/Login.html";
        }
    }, 2000)
}
