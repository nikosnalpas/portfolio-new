let burgerBtn = $('.navigation__burger'),
    burgerBtnLines = $('.navigation__burger-line'),
    navigation = $('.navigation'),
    navigationContainer = $('.navigation__container'),
    navigationList = $('.navigation__container-list'),
    navigationTitle = $('.navigation__container-title');

burgerBtn.on('click', function () {
    $('body').toggleClass('nav-open');
    navigation.toggleClass('open');
    navigationList.toggleClass('open');
    burgerBtnLines.toggleClass('open');
    navigationTitle.toggleClass('open');
});

$(".nav-work").click(function (e) {
    e.preventDefault();
    let work = $('.work');
    $('html, body').stop().animate({
        'scrollTop': work.offset().top
    }, 800);
    if (screenWidth < 1000) {
        console.log('test');
        burgerBtn.click();
    }
});

$(".nav-about").click(function (e) {
    e.preventDefault();
    let work = $('.about');
    $('html, body').stop().animate({
        'scrollTop': work.offset().top
    }, 800);
    if (screenWidth < 1000) {
        burgerBtn.click();
    }
});

$(".nav-contact").click(function (e) {
    e.preventDefault();
    let work = $('.contact');
    $('html, body').stop().animate({
        'scrollTop': work.offset().top
    }, 800);
    if (screenWidth < 1000) {
        burgerBtn.click();
    }
});

navigationTitle.click(function (e) {
    if (navigation.hasClass('open')) {
        burgerBtn.click();
    }
});