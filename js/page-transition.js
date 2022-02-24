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
    contactFormItems = $('.contact__form-item'),
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
    item6Top = 0,
    workDuration = 0;

function calcSizes() {
    screenHeight = $(window).height();
    screenWidth = $(window).width();
    // Projects
    duration = '100%';
}

calcSizes();



// General scroll behaivor



var controller = new ScrollMagic.Controller();

// WORK SECTION

var timelineWork = new TimelineLite();

timelineWork.to(heroTitleFirst, 1, { marginLeft: '-150px' }, 0);
timelineWork.to(heroTitleScnd, 1, { marginLeft: '-300px' }, 0);
timelineWork.to(heroText, 1, { marginLeft: '-450px' }, 0);
timelineWork.to(heroBtn, 1, { marginLeft: '-600px' }, 0);
timelineWork.to(mockItems, 1, { opacity: 0 }, 0);

var sceneWork = new ScrollMagic.Scene({
    triggerElement: ".work",
    triggerHook: "onEnter",
    duration: duration,
})
sceneWork.setTween(timelineWork)
sceneWork.addTo(controller);


// ABOUT SECTION

var timelineAbout = new TimelineLite();

// timelineAbout.to(projects, 1, { left: '500px', opacity: 0 }, 0);
timelineAbout.to(aboutTitleLeft, 1, { x: '0', opacity: 1 }, 0);
timelineAbout.to(aboutTitleRight, 1, { x: '0', opacity: 1 }, 0);
aboutText.each(function (index, item) {
    timelineAbout.to(item, 1, { scale: 1, opacity: 1 }, 0);
});
timelineAbout.to(aboutSkill1, 1, { width: '95%' }, 0);
timelineAbout.to(aboutSkill2, 1, { width: '80%' }, 0);
timelineAbout.to(aboutSkill3, 1, { width: '89%' }, 0);
timelineAbout.to(aboutSkill4, 1, { width: '75%' }, 0);
// timelineAbout.to(aboutSkill5, 1, { width: '90%' }, 0);


var sceneAbout = new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: "onEnter",
    duration: "90%"
})
sceneAbout.setTween(timelineAbout)
sceneAbout.addTo(controller);



// CONTACT SECTION

var timelineContact = new TimelineLite();

timelineContact.to(contactTitle, 1, { opacity: 1, scale: 1 }, 0);
timelineContact.to(contactDetails, 1, { x: 0, opacity: 1 }, 0);
timelineContact.to(contactFormItems, 1, { x: 0, opacity: 1 }, 0);
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


