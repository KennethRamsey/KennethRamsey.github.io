


var bizItems = $(".business-item-container").children();
console.log(bizItems.length);

var hideClass = "filtered";
var fadeIn = "fadein";
var fadeOut = "fadeout";



function showall() {
    foreach(bizItems, unhide);
}

function filterTo(_class) {
    foreach(bizItems, _filter);

    function _filter(elem) {
        var hasClass = $(elem).hasClass(_class);
        if (hasClass) {
            unhide(elem);
        }
        else {
            hide(elem);
        }
    }
}


function hide(elem) {
    $(elem).removeClass(fadeIn);
    $(elem).addClass(fadeOut);
}

function unhide(elem) {
    $(elem).addClass(fadeIn);
    $(elem).removeClass(fadeOut);
}


function foreach(list, fn) {
    var len = list.length;
    for (var i = 0; i < len; i++) {
        fn(list[i]);
    }
}