// // $('.projects__item').forEach(function (index, item) {
// //     animateProjects(item);
// // });

// function animateProjects(project) {
//     //Moving Animation Event
//     project.addEventListener("mousemove", (e) => {
//         let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//         let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//         project.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//     });
//     //Animate In
//     project.addEventListener("mouseenter", (e) => {
//         project.style.transition = "none";
//         //Popout
//         project.find('.projects__item-description-title').style.transform = "translateZ(150px)";
//         project.find('.projects__item-description-description').style.transform = "translateZ(200px) rotateZ(-45deg)";
//     });
//     //Animate Out
//     project.addEventListener("mouseleave", (e) => {
//         project.style.transition = "all 0.5s ease";
//         project.style.transform = `rotateY(0deg) rotateX(0deg)`;
//         //Popback
//         project.find('.projects__item-description-title').style.transform = "translateZ(0px)";
//         project.find('.projects__item-description-description').style.transform = "translateZ(0px) rotateZ(0deg)";
//     });
// }


// projects.on("mousemove", function (e) {
//     let xAxis = (screenWidth / 2 - e.pageX) / 25;
//     let yAxis = (screenHeight / 2 - e.pageY) / 25;
//     $(this)[0].style.transform = `scale(1.5) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// //Animate In
// projects.on("mouseenter", function (e) {
//     $(this)[0].style.transition = "none";
//     //Popout
//     $(this).find('.projects__item-description-title')[0].style.transform = "translateZ(150px)";
//     $(this).find('.projects__item-description-text')[0].style.transform = "translateZ(200px) rotateZ(-45deg)";
// });
// //Animate Out
// projects.on("mouseleave", function (e) {
//     $(this)[0].style.transition = "all 0.5s ease";
//     $(this)[0].style.transform = `rotateY(0deg) rotateX(0deg)`;
//     //Popback
//     $(this).find('.projects__item-description-title')[0].style.transform = "translateZ(0px)";
//     $(this).find('.projects__item-description')[0].style.transform = "translateZ(0px) rotateZ(0deg)";
// });