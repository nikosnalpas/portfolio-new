let isScrolling = false;
let lastTouch = -1;

// Scroll events
window.addEventListener("wheel", function (e) {
    if (isVisible()) {
        e.preventDefault();
        if (!isScrolling) {
            isScrolling = true;
            if (scrollsDown(e)) {
                scrollToWork();
            } else {
                scrollToHero();
            }
        }
    }
}, { passive: false });

window.scroll(function () {

});

// Touch Events
window.addEventListener("touchstart", function (e) {
    lastTouch = e.touches[0].clientY;
}, { passive: false });
window.addEventListener("touchmove", function (e) {
    if (isVisible()) {
        e.preventDefault();
    }
}, { passive: false });
window.addEventListener("touchend", function (e) {
    console.log('end');
    const isScrollEvent = (Math.abs(lastTouch - e.changedTouches[0].clientY) > 2);
    if (isVisible()) {
        // e.preventDefault();
        if (!isScrolling) {
            isScrolling = true;
            if (scrollsDown(e)) {
                scrollToWork();
            } else {
                scrollToHero();
            }
        }
    }
}, { passive: false });

function scrollsDown(e) {
    switch (e.type) {
        case "wheel":
            return e.deltaY > 0;
        case "touchend":
            return e.changedTouches[0].clientY < lastTouch;
    }
}


function isVisible() {
    var top_of_element = $('.hero').offset().top;
    var bottom_of_element = $('.hero').offset().top + $('.hero').outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
        return true;
    } else {
        return false;
    }
}

function scrollToHero() {
    $('html, body').stop().animate({
        scrollTop: $('.hero').offset().top
    }, 1000, function () {
        console.log('finsihed scrolling');
        isScrolling = false;
    });
}

function scrollToWork() {
    $('html, body').stop().animate({
        scrollTop: $('.work').offset().top
    }, 1000, function () {
        console.log('finsihed scrolling');
        isScrolling = false;
    });
}