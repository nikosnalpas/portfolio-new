let cursor = $('.circle .cursor'),
    cursorContainer = $('.circle');


projects.on('mousemove', function (e) {
    if (projectsContainer.hasClass('ordered')) {
        $(this).addClass('hovered');
        cursor.addClass('open');
        cursor.removeClass('close');
        cursorContainer.css('display', 'flex');
        let cursorX = 0;
        let cursorY = 0;
        cursorX = e.pageX;
        cursorY = e.pageY - $(window).scrollTop();
        cursorContainer.css('top', (cursorY - 60));
        cursorContainer.css('left', (cursorX - 60));
    }
});

projects.on('mouseleave', function (e) {
    $(this).removeClass('hovered');
    cursor.addClass('close');
    cursor.removeClass('open');
});

projects.on('click', function () {
    // cursor.addClass('close').on('animationend', function () {
    //     // $(this).removeClass('clicked');
    // });
});