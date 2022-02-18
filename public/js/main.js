$(window).resize(function () {
    if (screenWidth != $(window).width()) {
        location.reload();
    }
});

let projectNotAvailable = $('.not-available'),
    projectNotAvailableContainer = $('.projects__not-available'),
    projectNotAvailableContent = $('.projects__not-available-container');

projectNotAvailable.on('click', function () {
    $('body').addClass('stop-scroll');
    projectNotAvailableContainer.toggleClass('open');
});

projectNotAvailableContainer.on('click', function (e) {
    if (!$(e.target).hasClass('projects__not-available-container') && !$(e.target).hasClass('projects__not-available-container-text')) {
        $('body').removeClass('stop-scroll');
        $(this).removeClass('open');
    }
});

let contactForm = $('.contact__form'),
    contactFormPopup = $('.contact__form-confirmed'),
    contactFormBtn = $('.contact__form-submit-btn');

contactForm.on('submit', function () {
    contactFormBtn.addClass('submited').on('animationend', function (e) {
        $(this).removeClass('submited').off('animationend');
        contactFormPopup.addClass("open").on('animationend', function (e) {
            contactFormPopup.removeClass("open").off('animationend');
        });
    });
});

