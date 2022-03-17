let timeoutFinished = false,
    documentLoaded = false;

$(document).ready(function () {
    documentLoaded = true;
    if (timeoutFinished) {
        finishLoading();
    }
});

setTimeout(function () {
    timeoutFinished = true;
    if (documentLoaded) {
        finishLoading();
    }
}, 2500);

function finishLoading() {
    $('body').removeClass('stop-scroll');
    $('.loading-screen').addClass('close');
    setTimeout(function () {
        heroTitleFirst.addClass('open');
        heroTitleScnd.addClass('open');
        heroText.addClass('open');
        heroBtn.addClass('open');
        projectsContainer.addClass('open');
        $('.mock').addClass('open');
        $('.hero__indicator').addClass('open');
        $('.navigation').addClass('reveal');
    }, 500);
    setTimeout(function () {
        $('.loading-screen').addClass('hide');
    }, 900);
}