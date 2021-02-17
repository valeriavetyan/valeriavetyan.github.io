//vercnenq bolor "link"-ery
let logo = document.querySelector("#logo");
let aboutLink = document.querySelector("#aboutLink");
let skillsLink = document.querySelector("#skillsLink");
 
//vercnenq bolor "section"-nery
let main = document.querySelector("#main");
let about = document.querySelector("#about");
let skills = document.querySelector("#skills");

//vercnenq "main secton"-i elementnery animaciayi hamar
let mainH1 = document.querySelector("#main h1");
let mainH12 = document.querySelector("#main h1:nth-child(2)");
let mainPara = document.querySelector("#main p");

//vercnenq "about section"-i elementnery animaciayi hamar
let aboutH1 = document.querySelector("#about h1");
let aboutPara = document.querySelector("#about p");

//vercnenq "skills section"-i elementnery animaciayi hamar
let skillsH1 = document.querySelector("#skills h1");
let skillsPara = document.querySelector("#skills p");
let skillsCard = document.querySelector("#skills .skills-card");


function handleOpacity(opacityOne, opacityZero1, opacityZero2, opacityZero3) {
    opacityOne.style.opacity = 1;
    opacityZero1.style.opacity = 0;
    opacityZero2.style.opacity = 0;
    opacityZero3.style.opacity = 0;
}

function handleAnimation() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].classList.remove('main-animaton')
        arguments[i].offsetWidth;
        arguments[i].classList('main-animaton')
    }
}

logo.addEventListener('click', function () {
    handleOpacity(main, about, skills);
    handleAnimation(mainH1, mainH12, mainPara);
})
aboutLink.addEventListener('click', function () {
    handleOpacity(about, main, skills);
    handleAnimation(aboutH1, aboutPara);
})
skillsLink.addEventListener('click', function () {
    handleOpacity(skills, main, about);
    handleAnimation(skillsH1, skillsPara, skillsCard);
})

let modal = document.querySelector('.modal')
let trigger = document.querySelector('.open-modal')
let closeButton = document.querySelector('.close-modal')

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(e) {
    if (e.target === modal) {
        toggleModal()
    }
}

trigger.addEventListener("click", toggleModal)
closeButton.addEventListener("click", toggleModal)
window.addEventListener("click", windowOnClick)