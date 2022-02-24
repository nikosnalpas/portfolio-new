$(window).on('load', function () {



    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });


    $('.hero-story').each(function (index, element) {

        new ScrollMagic.Scene({
            triggerElement: this,
        })
            .setPin(this)
            .addTo(ctrl);

        new ScrollMagic.Scene({
            triggerElement: this,
            offset: 10
        })
            .addTo(ctrl)
            .on('enter', function () {
                if (index < 2) {
                    TweenLite.to(window, 1, { scrollTo: { y: ".hero" + (index + 2), autoKill: false } });
                }
            });
    });

});

// var timelineHero = new TimelineLite();


// var sceneHero = new ScrollMagic.Scene({
//     triggerElement: ".hero",
//     triggerHook: "onLeave",
//     duration: '100%',
//     reverse: true
// }).on('enter', function () {
//     if (!projectsContainer.hasClass('nikos')) {
//         projectsContainer.addClass('nikos');
//         console.log('is scrolling to work');
//         TweenLite.to(window, 1, { scrollTo: { y: ".work", autoKill: false } });
//     } else {
//         projectsContainer.removeClass('nikos');
//         console.log('is scrolling to hero');
//         TweenLite.to(window, 1, { scrollTo: { y: ".hero", autoKill: false } });
//     }
// })
// sceneHero.setTween(timelineHero)
// sceneHero.addTo(controller);