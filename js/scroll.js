gsap.registerPlugin(Flip);

let isScrolling = false,
    lastTouch = -1,
    workItems = $('.work__items'),
    item1 = $('.projects__item-1'),
    timeOut = 1000,
    flipDuration = 1,
    touchDevice = false;

// if (screenWidth < 1000) {
//     timeOut = 1700;
//     flipDuration = 1.7;
// }

var hiddenInputColor = $('.work__inputHidden').css("color");

if (hiddenInputColor === 'rgb(0, 0, 0)') {
    touchDevice = true;
}

let workHeight = 0;
if (screenWidth > 1050) {
    workHeight = (screenWidth * 0.13 + 70) * 2 + 180;
    if (touchDevice) {
        console.log('touch');
        workHeight = (screenWidth * 0.13 + 150) * 2 + 180;
    }
} else if (screenWidth > 600) {
    workHeight = (screenWidth * 0.21 + 150) * 3 + 180 + 100;
} else {
    workHeight = (screenWidth * 0.5 + 180) * 6 + 180;
}
workContainer.css('height', workHeight);

// Scroll events
window.addEventListener("wheel", function (e) {
    if (isWorkVisible() && !navOpen()) {
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

// Touch Events
window.addEventListener("touchstart", function (e) {
    lastTouch = e.touches[0].clientY;
}, { passive: false });
window.addEventListener("touchmove", function (e) {
    if (isWorkVisible() && !navOpen()) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
}, { passive: false });
window.addEventListener("touchend", function (e) {
    const isScrollEvent = (Math.abs(lastTouch - e.changedTouches[0].clientY) > 2);
    if (isScrollEvent && isWorkVisible() && !navOpen()) {
        if (e.cancelable) {
            e.preventDefault();
        }
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

// $(window).scroll(function (e) {
//     if (e.cancelable) {
//         e.preventDefault();
//     }
//     if (isWorkVisible() && !navOpen()) {
//         if (!isScrolling) {
//             isScrolling = true;
//             if (scrollsDown(e)) {
//                 scrollToWork();
//             } else {
//                 scrollToHero();
//             }
//         }
//     }
// });


function workAtTop() {
    return $('.work').offset().top + 5 >= $(window).scrollTop();
}

if (!isWorkVisible()) {
    workTitle.addClass('reveal');
    orderProjects(flipDuration);
}

function scrollToHero() {
    unOrderProjects(flipDuration);
    $('html, body').stop().animate({
        scrollTop: $('.hero').offset().top
    }, timeOut, function () {
        isScrolling = false;
    });
}

function scrollToWork() {
    orderProjects(flipDuration);
    $('html, body').stop().animate({
        scrollTop: $('.work').offset().top + 1
    }, timeOut, function () {
        isScrolling = false;
    });
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


function navOpen() {
    return $('.navigation').hasClass('open');
}

function isWorkVisible() {
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


function scrollsDown(e) {
    switch (e.type) {
        case "wheel":
            return e.deltaY > 0;
        case "touchend":
            return e.changedTouches[0].clientY < lastTouch;
    }
}