let burgerBtn = $('.navigation__burger'),
    burgerBtnLines = $('.navigation__burger-line'),
    navigation = $('.navigation'),
    navigationContainer = $('.navigation__container'),
    navigationList = $('.navigation__container-list'),
    navigationTitle = $('.navigation__container-title'),
    toggleDarkLight = $('.toggle-slot');

burgerBtn.on('click', function () {
    $('body').toggleClass('stop-scroll');
    navigation.toggleClass('open');
    navigationList.toggleClass('open');
    burgerBtnLines.toggleClass('open');
    navigationTitle.toggleClass('open');
});

$("#explore-more").click(function (e) {
    orderProjects(flipDuration);
    e.preventDefault();
    isScrolling = true;
    let work = $('.work');
    $('html, body').stop().animate({
        'scrollTop': work.offset().top + 1
    }, 1500, function () {
        isScrolling = false;
    });
});

$(".nav-work").click(function (e) {
    orderProjects(flipDuration);
    e.preventDefault();
    let work = $('.work');
    isScrolling = true;
    $('html, body').stop().animate({
        'scrollTop': work.offset().top + 1
    }, 800, function () {
        isScrolling = false;
    });
    if (screenWidth < 1000) {
        console.log('test');
        burgerBtn.click();
    }
});

navigationTitle.click(function (e) {
    e.preventDefault();
    unOrderProjects(flipDuration);
    let home = $('.hero');
    isScrolling = true;
    $('html, body').stop().animate({
        'scrollTop': home.offset().top
    }, 800, function () {
        isScrolling = false;
    });
    if (screenWidth < 1000) {
        burgerBtn.click();
    }
});

$(".nav-about").click(function (e) {
    e.preventDefault();
    orderProjects(flipDuration / 2);
    let work = $('.about');
    isScrolling = true;
    $('html, body').stop().animate({
        'scrollTop': work.offset().top
    }, 800, function () {
        isScrolling = false;
    });
    if (screenWidth < 1000) {
        burgerBtn.click();
    }
});

$(".nav-contact").click(function (e) {
    e.preventDefault();
    orderProjects(flipDuration / 3);
    isScrolling = true;
    let work = $('.contact');
    $('html, body').stop().animate({
        'scrollTop': work.offset().top
    }, 800, function () {
        isScrolling = true;
    });
    if (screenWidth < 1000) {
        burgerBtn.click();
    }
});

navigationTitle.click(function (e) {
    if (navigation.hasClass('open')) {
        burgerBtn.click();
    }
});

toggleDarkLight.on('click', function () {
    if ($('body').hasClass('light')) {
        $('.text-dark').each(function () {
            $(this).toggleClass('text-light');
            $(this).toggleClass('text-dark');
        });
    } else {
        console.log('test');
        $('.text-light').each(function () {
            $(this).toggleClass('text-light');
            $(this).toggleClass('text-dark');
        });
    }
    $('body').toggleClass('light');
    $('body').toggleClass('dark');
});