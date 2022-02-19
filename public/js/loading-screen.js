let timeoutFinished = false,
    documentLoaded = false;

$(document).ready(function () {
    console.log('test');
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
}, 3000);

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
    }, 500);
}