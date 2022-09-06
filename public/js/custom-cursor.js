let cursor = $('.circle .cursor'),
    cursorContainer = $('.circle');

portfolio.on('mousemove', function (e) {
    //if (projectsContainer.hasClass('ordered')) {
    $(this).addClass('hovered');
    cursor.addClass('open');
    cursor.removeClass('close');
    cursorContainer.css('display', 'flex');
    let cursorX = 0;
    let cursorY = 0;
    cursorX = e.pageX;
    cursorY = e.pageY - $(window).scrollTop();
    cursorContainer.css('top', (cursorY - 10));
    cursorContainer.css('left', (cursorX - 10));
});

portfolio.on('mouseleave', function (e) {
    $(this).removeClass('hovered');
    cursor.addClass('close');
    cursor.removeClass('open');
});

projects.on('mousemove', function (e) {
    if (screenWidth > 1000) {
        $(this).find('.projects__item-description-title').addClass('open');
        $(this).find('.projects__item-description-line').addClass('open');
        $(this).find('.projects__item-description-text').addClass('open');
    }
});

projects.on('mouseleave', function (e) {
    if (screenWidth > 1000) {
        $(this).find('.projects__item-description-title').removeClass('open');
        $(this).find('.projects__item-description-line').removeClass('open');
        $(this).find('.projects__item-description-text').removeClass('open');
    }
});



















// projects.on('mousemove', function (e) {
//     //if (projectsContainer.hasClass('ordered')) {
//     $(this).addClass('hovered');
//     cursor.addClass('open');
//     cursor.removeClass('close');
//     cursorContainer.css('display', 'flex');
//     let cursorX = 0;
//     let cursorY = 0;
//     cursorX = e.pageX;
//     cursorY = e.pageY - $(window).scrollTop();
//     cursorContainer.css('top', (cursorY - 60));
//     cursorContainer.css('left', (cursorX - 60));

//     $(this).find('.projects__item-description-title').addClass('open');
//     $(this).find('.projects__item-description-line').addClass('open');
//     $(this).find('.projects__item-description-text').addClass('open');
//     //  }
// });

// projects.on('mouseleave', function (e) {
//     $(this).removeClass('hovered');
//     cursor.addClass('close');
//     cursor.removeClass('open');

//     if (screenWidth > 1000) {
//         $(this).find('.projects__item-description-title').removeClass('open');
//         $(this).find('.projects__item-description-line').removeClass('open');
//         $(this).find('.projects__item-description-text').removeClass('open');
//     }
// });