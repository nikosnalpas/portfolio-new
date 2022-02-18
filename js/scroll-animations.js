// Dom elements
let portfolio = $('.portfolio'),
    heroTitleFirst = $('.hero__profile-title-first'),
    heroTitleScnd = $('.hero__profile-title-scnd'),
    heroText = $('.hero__profile-text'),
    heroBtn = $('.hero__profile-explore'),
    projectsContainer = $('.projects'),
    projects = $('.projects__item'),
    projectDescriptions = $('.projects__item-description'),
    maseratiPr = $('.projects__item-1'),
    illyPr = $('.projects__item-2'),
    apgPr = $('.projects__item-3'),
    smartmovePr = $('.projects__item-4'),
    takeCarePr = $('.projects__item-5'),
    mscPr = $('.projects__item-6'),
    mockItems = $('.mock__item'),
    workTitle = $('.work__title'),
    workContainer = $('.work'),
    aboutTitleLeft = $('.about__title-left'),
    aboutTitleRight = $('.about__title-right'),
    aboutText = $('.about__text-paragraph'),
    aboutSkill1 = $('.about__skills-container-item-progress-1'),
    aboutSkill2 = $('.about__skills-container-item-progress-2'),
    aboutSkill3 = $('.about__skills-container-item-progress-3'),
    aboutSkill4 = $('.about__skills-container-item-progress-4'),
    aboutSkill5 = $('.about__skills-container-item-progress-5'),
    contactTitle = $('.contact__title'),
    contactDetails = $('.contact__details-item'),
    contactFormInputs = $('.contact__form-input'),
    skillsProgress = $('.about__skills-container');

// Variables
let screenHeight = 0,
    screenWidth = 0,
    itemsTopScng = 0,
    itemWidth = 0,
    itemHeight = 0,
    itemWidthBig = 0,
    itemHeightBig = 0,
    item1Left = 0,
    item2Left = 0,
    item3Left = 0,
    item4Left = 0,
    item5Left = 0,
    item6Left = 0,
    item1Top = 0,
    item2Top = 0,
    item3Top = 0,
    item4Top = 0,
    item5Top = 0,
    item6Top = 0;

function calcSizes() {
    screenHeight = $(window).height();
    screenWidth = $(window).width();

    // Projects
    if (screenWidth > screenHeight) {
        itemWidthBig = screenWidth * 0.25;
        itemHeightBig = screenWidth * 0.13;
        item1Left = '7%';
        item2Left = '37%';
        item3Left = '67%';
        item4Left = '7%';
        item5Left = '37%';
        item6Left = '67%';

        let projectsTop = 130 + 70 + 70;
        let itemSeparator = 1.7;
        if (screenWidth < 1200) {
            itemSeparator = 2;
        }


        item1Top = projectsTop;
        item2Top = projectsTop;
        item3Top = projectsTop;
        item4Top = projectsTop + itemHeightBig * itemSeparator;
        item5Top = projectsTop + itemHeightBig * itemSeparator;
        item6Top = projectsTop + itemHeightBig * itemSeparator;

        let workHeight = 0;
        workHeight = 130 * 2 + 70 + 100 * 2 + (itemHeightBig + 70) * 2;

        workContainer.css('height', workHeight);

    } else {
        itemWidthBig = screenWidth * 0.9;
        itemHeightBig = screenWidth * 0.47;
        itemVar = screenHeight * 0.9;
        item1Left = '4%';
        item2Left = '4%';
        item3Left = '4%';
        item4Left = '4%';
        item5Left = '4%';
        item6Left = '4%';

        let projectsTop = 130 + 50 + 50;

        item1Top = projectsTop;
        item2Top = projectsTop + itemHeightBig * 1.7;
        item3Top = projectsTop + itemHeightBig * 3.4;
        item4Top = projectsTop + itemHeightBig * 5.1;
        item5Top = projectsTop + itemHeightBig * 6.8;
        item6Top = projectsTop + itemHeightBig * 8.5;
    }

}

calcSizes();

var controller = new ScrollMagic.Controller();

// WORK SECTION

var timelineWork = new TimelineLite();


if (screenWidth > 1000) {
    timelineWork.to(heroTitleFirst, 1, { marginLeft: '400px', letterSpacing: '100px', opacity: 0 }, 0);
    timelineWork.to(heroTitleScnd, 1, { marginLeft: '700px', letterSpacing: '150px', opacity: 0 }, 0);
    timelineWork.to(heroText, 1, { marginLeft: '-400px', opacity: 0, scale: 0 }, 0);
    timelineWork.to(heroBtn, 1, { marginLeft: '900px', opacity: 0, scale: 0 }, 0);
} else {
    // timelineWork.to(heroTitleFirst, 1, { x: '200px', opacity: 0 }, 0);
    // timelineWork.to(heroTitleScnd, 1, { x: '400px', opacity: 0 }, 0);
    // timelineWork.to(heroText, 1, { x: '-300px', opacity: 0 }, 0);
    // timelineWork.to(heroBtn, 1, { x: '400px', opacity: 0 }, 0);
}


timelineWork.to(projectsContainer, 1, { top: screenHeight, width: screenWidth, left: 0 }, 0);
timelineWork.to(projects, 1, { width: itemWidthBig, height: itemHeightBig, animation: 'unset' }, 0);
timelineWork.to(projectDescriptions, 1, { top: '110%', opacity: 1 }, 0);
timelineWork.to(maseratiPr, 1, { left: item1Left, top: item1Top }, 0);
timelineWork.to(illyPr, 1, { left: item2Left, top: item2Top }, 0);
timelineWork.to(apgPr, 1, { left: item3Left, top: item3Top }, 0);
timelineWork.to(smartmovePr, 1, { left: item4Left, top: item4Top }, 0);
timelineWork.to(takeCarePr, 1, { left: item5Left, top: item5Top }, 0);
timelineWork.to(mscPr, 1, { left: item6Left, top: item6Top }, 0);
timelineWork.to(mockItems, 1, { opacity: 0, left: screenWidth }, 0);
timelineWork.to(workTitle, 1, { opacity: 1 }, 0);
timelineWork.call(workEntered);

var sceneWork = new ScrollMagic.Scene({
    triggerElement: ".work",
    triggerHook: "onEnter",
    duration: "100%"
}).on('leave', function () {
    workEntered();
}).on('enter', function () {
    workLeave();
});
sceneWork.setTween(timelineWork)
sceneWork.addTo(controller);

function workEntered() {
    projectsContainer.addClass('ordered');
}
function workLeave() {
    projectsContainer.removeClass('ordered');
}



// ABOUT SECTION

var timelineAbout = new TimelineLite();

timelineAbout.to(projects, 1, { left: '500px', opacity: 0 }, 0);
timelineAbout.to(aboutTitleLeft, 1, { x: '0', opacity: 1 }, 0);
timelineAbout.to(aboutTitleRight, 1, { x: '0', opacity: 1 }, 0);
aboutText.each(function (index, item) {
    timelineAbout.to(item, 1, { scale: 1, opacity: 1 }, 0);
});
timelineAbout.to(aboutSkill1, 1, { width: '90%' }, 0);
timelineAbout.to(aboutSkill2, 1, { width: '88%' }, 0);
timelineAbout.to(aboutSkill3, 1, { width: '65%' }, 0);
timelineAbout.to(aboutSkill4, 1, { width: '75%' }, 0);
timelineAbout.to(aboutSkill5, 1, { width: '90%' }, 0);


var sceneAbout = new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: "onEnter",
    duration: "90%"
}).on('enter', function () {
    aboutEnter();
}).on('leave', function () {
    aboutLeave();
});
sceneAbout.setTween(timelineAbout)
sceneAbout.addTo(controller);

function aboutEnter() {
    projectsContainer.removeClass('ordered');
}
function aboutLeave() {
    projectsContainer.addClass('ordered');
}


// CONTACT SECTION

var timelineContact = new TimelineLite();

timelineContact.to(contactTitle, 1, { opacity: 1, scale: 1 }, 0);
timelineContact.to(contactDetails, 1, { x: 0, opacity: 1 }, 0);
timelineContact.to(contactFormInputs, 1, { x: 0, opacity: 1 }, 0);
skillsProgress.each(function (index, item) {
    let left = (index + 1) * 100;
    timelineContact.to(item, 1, { x: left, opacity: 0 }, 0);
});
aboutText.each(function (index, item) {
    let left = -(index + 1) * 200;
    timelineContact.to(item, 1, { x: left, opacity: 0 }, 0);
});

var sceneContact = new ScrollMagic.Scene({
    triggerElement: ".contact",
    triggerHook: "onEnter",
    duration: "80%"
}).on('enter', function () {

}).on('leave', function () {

});
sceneContact.setTween(timelineContact)
sceneContact.addTo(controller);

