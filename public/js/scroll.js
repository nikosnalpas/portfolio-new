gsap.registerPlugin(Flip);

//Variables
let scrollDisabled = false,
    magScrollDisabled = true,
    isScrolling = false,
    lastTouch = -1,
    workItems = $('.work__items'),
    timeOut = 1000,
    flipDuration = 1,
    touchDevice = false,
    isTouching = false;

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");


var hiddenInputColor = $('.work__inputHidden').css("color");

if (hiddenInputColor === 'rgb(0, 0, 0)') {
    touchDevice = true;
}

// Set Work Section - Height
let workHeight = 0;
if (screenWidth > 1050) {
    workHeight = (screenWidth * 0.13 + 70) * 2 + 160;
    if (touchDevice) {
        workHeight = (screenWidth * 0.13 + 150) * 2 + 70;
    }
} else if (screenWidth > 600) {
    workHeight = (screenWidth * 0.21 + 150) * 3 + 180;
} else {
    workHeight = (screenWidth * 0.5 + 180) * 6 + 70;
}
workContainer.css('height', workHeight);

const onScrollEvent = function (e) {
    if (e.cancelable) {
        magScrollDisabled && e.preventDefault();
    }
    if (!isScrolling) {
        scroll(e);
    }
}

// Mouse Event
window.addEventListener("wheel", function (e) {
    if (magneticScrollActive(e)) {
        onScrollEvent(e);
    }
}, { passive: false });

// Touch Events
window.addEventListener("touchstart", function (e) {
    lastTouch = e.touches[0].clientY;
    if (isAboveWork() && lastTouch > 100 && !navOpen()) {
        e.preventDefault();
    }
    isTouching = true;
}, { passive: false });
let lastY = 0;
window.addEventListener("touchmove", function (e) {
    var currentY = e.touches[0].clientY;
    if (isAndroid) {
        if (currentY > lastY) {
            e.preventDefault();
        } else {
            console.log('not canceling');
        }
    }
    lastY = currentY;
    if (isAndroid) {
        if (magneticScrollActive(e) && isScrolling) {
            if (e.cancelable) {
                e.preventDefault();
            }
        }
    }
}, { passive: false });
window.addEventListener("touchend", function (e) {
    isTouching = false;
    const isScrollEvent = (Math.abs(lastTouch - e.changedTouches[0].clientY) > 2);
    if (magneticScrollActive(e)) {
        isScrollEvent && onScrollEvent(e);
    }
}, { passive: false });


// Keyboard Event
// window.addEventListener("keydown", function(e) {
//     if (isDetailOpen() && e.code != "Tab") {
//         e.preventDefault();
//     }
//     if(magneticScroll.isActive() && !isDetailClosing()) {
//          if(!magneticScroll.isScrolling && ["ArrowUp","ArrowDown"].indexOf(e.code) >= 0) {
//             e.code == "ArrowUp" && magneticScroll.scrollToIndex(magneticScroll.lastSection - 1);
//             e.code == "ArrowDown" && magneticScroll.scrollToIndex(magneticScroll.lastSection + 1);
//          }
//         const isScrolling = ["Space","ArrowLeft","ArrowRight"].indexOf(e.code) > -1;
//         isScrolling && magneticScroll.isScrollDisabled && e.preventDefault();
//     }
// }, false);

$(window).scroll(function (e) {
    // if is above at least 20px lets say of work section, and is not scrolling, or is not touching screen, then scroll to hero
    if (isAboveWork() && !isScrolling && !isTouching) {
        if (e.cancelable) {
            magScrollDisabled && e.preventDefault();
        }
        unOrderProjects(flipDuration);
        isScrolling = true;
        $('html, body').stop().animate({
            scrollTop: $('.hero').offset().top
        }, timeOut, function () {
            isScrolling = false;
        });
    }
});

function isHeroVisible() {
    var top_of_element = $('.hero').offset().top;
    var bottom_of_element = $('.hero').offset().top + $('.hero').outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    let deviant = 1;

    if ((bottom_of_screen > top_of_element) && (top_of_screen + deviant < bottom_of_element)) {
        return true;
    } else {
        return false;
    }
}

function workAtTop() {
    return $('.work').offset().top + 5 >= $(window).scrollTop();
}

function isAboveWork() {
    return $('.work').offset().top - 20 >= $(window).scrollTop();
}

function magneticScrollActive(e) {
    let nick = false;

    if ((isHeroVisible() || (workAtTop() && !isScrollingNext(e)))) {
        nick = true;
    }

    //console.log((isHeroVisible || (workAtTop && !isScrollingNext(e))));

    // if (((isHeroVisible || (workAtTop && !isScrollingNext(e))) && $('.navigation').hasClass('open'))) {
    //     nick = true;
    // } else {
    //     nick = false;
    // }
    // console.log(nick);
    return nick;
}

function scroll(e) {
    const isNext = isScrollingNext(e);
    if (isNext) {
        // scrolling down ---- scroll to Work
        orderProjects(flipDuration);
        isScrolling = true;
        $('html, body').stop().animate({
            scrollTop: $('.work').offset().top
        }, timeOut, function () {
            isScrolling = false;
        });
    } else {
        // scrolling up ---- scroll to Hero
        unOrderProjects(flipDuration);
        isScrolling = true;
        $('html, body').stop().animate({
            scrollTop: $('.hero').offset().top
        }, timeOut, function () {
            isScrolling = false;
        });
    }
}

function navOpen() {
    return $('.navigation').hasClass('open');
}

function isScrollingNext(e) {
    switch (e.type) {
        case "wheel":
            return e.deltaY > 0;
        case "touchend":
            return e.changedTouches[0].clientY < lastTouch;
    }
}

function orderProjects(dur) {
    projects.each(function () {
        const item = $(this);
        item.removeClass('animate');
        const state = Flip.getState(item);

        workItems.append(item);

        Flip.from(state, {
            duration: dur, ease: 'power1.inOut', scale: true, onComplete: function () {
                item.addClass('ordered');
                workTitle.addClass('reveal');
                if (touchDevice) {
                    item.find('.projects__item-description-title').addClass('open');
                    item.find('.projects__item-description-line').addClass('open');
                    item.find('.projects__item-description-text').addClass('open');
                }
            }
        });
    });
}

function unOrderProjects(dur) {
    workTitle.removeClass('reveal');
    projects.each(function () {
        const item = $(this),
            state = Flip.getState(item);
        item.removeClass('ordered');
        $('.projects').append(item);

        Flip.from(state, {
            duration: flipDuration, ease: 'power1.inOut', scale: true, onComplete: function () {
                item.addClass('animate');
                item.find('.projects__item-description-title').removeClass('open');
                item.find('.projects__item-description-line').removeClass('open');
                item.find('.projects__item-description-text').removeClass('open');
            }
        });
    });
}

if (!isHeroVisible()) {
    workTitle.addClass('reveal');
    orderProjects(flipDuration);
}