$("#explore-more").click(function (e) {
    console.log('clicked');
    history.scrollRestoration = 'manual';
    //e.preventDefault();
    let work = $('.work');
    // $('html, body').stop().animate({
    //     'scrollTop': 1000
    // }, 800);
    const top = work.offset().top;
    $("html,body").animate({
        scrollTop: top
    }, 2000, function () {
        console.log('finished');
    });
});

$(window).resize(function () {
    location.reload();
    // $(".projects").load(window.location.href + " .projects");
});