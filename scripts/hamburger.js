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
    let jmenu =  $('#hamburgerMenu');
    let visible = jmenu.hasClass("onScreen");

    if (!visible) {
        menu.style.display = "block";
        jmenu.addClass("onScreen");
        jmenu.removeClass("offScreen");
    } else {
        jmenu.addClass("offScreen");
        jmenu.removeClass("onScreen");
    }
    console.log();
}

function showValue(newValue) {
    document.getElementById("price").innerHTML = newValue;
}