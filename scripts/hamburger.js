'use strict';

/**
 * Created by Petra on 29-Oct-15.
 */

var hamburgerMenu = document.getElementById('hamburgerMenu');

/* Er þetta notað? */
//$(function () {
//    var slider = $("#slider-range");
//    $("#slider-range").slider({
//        range: true,
//        min: 0,
//        max: 500,
//        values: [75, 300],
//        slide: function (event, ui) {
//            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
//        }
//    });
//    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
//        " - $" + $("#slider-range").slider("values", 1));
//});

function hamburgerShow() {
    let menu = document.getElementById('hamburgerMenu');

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function showValue(newValue) {
    document.getElementById("price").innerHTML = newValue;
}