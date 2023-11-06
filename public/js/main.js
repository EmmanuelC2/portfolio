const hamburgerToggle = document.getElementById('hamburger-toggle');
const linkList = document.getElementById('link-list')
const toggleArrow = document.getElementById('toggle-link-bar');
const linkContainer = document.getElementById('links-container');
let toggleArrowImg = document.getElementById('toggle-arrow-image');
const contactForm = document.getElementById('contact-form');
const projectContainer = document.querySelectorAll(".project-container");

//Hamburger functionality to hide or not and z-order positioning of links and forms.
hamburgerToggle.addEventListener('click', () => {
    linkList.classList.toggle('active');
    hamburgerToggle.classList.toggle('active');

    if (contactForm.style.zIndex == -1) {
        contactForm.style.zIndex = 0;
        projectContainer.zIndex = 0;
    } else {
        contactForm.style.zIndex = -1;
        projectContainer.zIndex = -1;
    }

    projectContainer.forEach((element) => {

        if (element.style.zIndex == -1) {
            element.style.zIndex = 0;
        } else {
            element.style.zIndex = -1;
        }
    })

});

//Side links functionality to hide or not and change img.
toggleArrow.addEventListener('click', () => {

    if (toggleArrow.classList.contains('active')) {
        toggleArrowImg = document.getElementById('toggle-arrow-image')
        toggleArrowImg.src = "/images/rightArrow.png";
    } else {
        toggleArrowImg.src = "/images/leftArrow.png";
    }

    toggleArrow.classList.toggle('active');
    linkContainer.classList.toggle('active');

});

//Click outside of the link-list, hamburgerToggle, or
//toggle arrow then hide them.
document.addEventListener('click', (e) => {
    if (!linkList.contains(e.target) && !hamburgerToggle.contains(e.target) && !toggleArrow.contains(e.target)) {
        linkList.classList.remove('active');
        hamburgerToggle.classList.remove('active');
        contactForm.style.zIndex = 0;

        projectContainer.forEach((element) => {
            element.style.zIndex = 0;
        })
    }

});

//current brute force solution? REFACTOR!
const cosSlideShowBtnDotContainer0 = document.getElementById('cos-slideshow-btn-dot-container-0');
const cosSlideShowContainer0 = document.getElementById('cos-slideshow-container-0');
const cosDots0 = cosSlideShowBtnDotContainer0.querySelectorAll(".dot");
const cosSlides0 = cosSlideShowContainer0.querySelectorAll(".slide");
let cosCurrentSlide0 = 0;

function cosShowSlide0(index) {

    cosSlides0[cosCurrentSlide0].style.display = 'none';
    cosDots0[cosCurrentSlide0].classList.remove('active');

    cosCurrentSlide0 = (index + cosSlides0.length) % cosSlides0.length;

    cosSlides0[cosCurrentSlide0].style.display = 'flex';
    cosDots0[cosCurrentSlide0].classList.add('active');

}

function cosNextSlide0() {
    cosShowSlide0(cosCurrentSlide0 + 1);
}

function cosPrevSlide0() {
    cosShowSlide0(cosCurrentSlide0 - 1);
}

const cosSlideShowBtnDotContainer1 = document.getElementById('cos-slideshow-btn-dot-container-1');
const cosSlideShowContainer1 = document.getElementById('cos-slideshow-container-1');
const cosDots1 = cosSlideShowBtnDotContainer1.querySelectorAll(".dot");
const cosSlides1 = cosSlideShowContainer1.querySelectorAll(".slide");
let cosCurrentSlide1 = 0;

function cosShowSlide1(index) {

    cosSlides1[cosCurrentSlide1].style.display = 'none';
    cosDots1[cosCurrentSlide1].classList.remove('active');

    cosCurrentSlide1 = (index + cosSlides1.length) % cosSlides1.length;

    cosSlides1[cosCurrentSlide1].style.display = 'flex';
    cosDots1[cosCurrentSlide1].classList.add('active');

}

function cosNextSlide1() {
    cosShowSlide1(cosCurrentSlide1 + 1);
}

function cosPrevSlide1() {
    cosShowSlide1(cosCurrentSlide1 - 1);
}

const cosSlideShowBtnDotContainer2 = document.getElementById('cos-slideshow-btn-dot-container-2');
const cosSlideShowContainer2 = document.getElementById('cos-slideshow-container-2');
const cosDots2 = cosSlideShowBtnDotContainer2.querySelectorAll(".dot");
const cosSlides2 = cosSlideShowContainer2.querySelectorAll(".slide");
let cosCurrentSlide2 = 0;

function cosShowSlide2(index) {

    cosSlides2[cosCurrentSlide2].style.display = 'none';
    cosDots2[cosCurrentSlide2].classList.remove('active');

    cosCurrentSlide2 = (index + cosSlides2.length) % cosSlides2.length;

    cosSlides2[cosCurrentSlide2].style.display = 'flex';
    cosDots2[cosCurrentSlide2].classList.add('active');

}

function cosNextSlide2() {
    cosShowSlide2(cosCurrentSlide2 + 1);
}

function cosPrevSlide2() {
    cosShowSlide2(cosCurrentSlide2 - 1);
}

cosShowSlide2(cosCurrentSlide2);
cosShowSlide1(cosCurrentSlide1);
cosShowSlide0(cosCurrentSlide0);

const fsuSlideShowBtnDotContainer0 = document.getElementById('fsu-slideshow-btn-dot-container-0')
const fsuSlideShowContainer0 = document.getElementById('fsu-slideshow-container-0');
const slides0 = fsuSlideShowContainer0.querySelectorAll(".slide");
const dots0 = fsuSlideShowBtnDotContainer0.querySelectorAll(".dot");
let currentSlide0 = 0;

function showSlide0(index) {

    slides0[currentSlide0].style.display = 'none';
    dots0[currentSlide0].classList.remove('active');

    currentSlide0 = (index + slides0.length) % slides0.length;

    slides0[currentSlide0].style.display = 'flex';
    dots0[currentSlide0].classList.add('active');

}

function nextSlide0() {
    showSlide0(currentSlide0 + 1);
}

function prevSlide0() {
    showSlide0(currentSlide0 - 1);
}

showSlide0(currentSlide0);

const fsuSlideShowBtnDotContainer1 = document.getElementById('fsu-slideshow-btn-dot-container-1');
const fsuSlideShowContainer1 = document.getElementById('fsu-slideshow-container-1');
const dots1 = fsuSlideShowBtnDotContainer1.querySelectorAll(".dot");
const slides1 = fsuSlideShowContainer1.querySelectorAll(".slide");
let currentSlide1 = 0;

function showSlide1(index) {

    slides1[currentSlide1].style.display = 'none';
    dots1[currentSlide1].classList.remove('active');

    currentSlide1 = (index + slides1.length) % slides1.length;

    slides1[currentSlide1].style.display = 'flex';
    dots1[currentSlide1].classList.add('active');

}

function nextSlide1() {
    showSlide1(currentSlide1 + 1);
}

function prevSlide1() {
    showSlide1(currentSlide1 - 1);
}

const fsuSlideShowBtnDotContainer2 = document.getElementById('fsu-slideshow-btn-dot-container-2');
const fsuSlideShowContainer2 = document.getElementById('fsu-slideshow-container-2');
const dots2 = fsuSlideShowBtnDotContainer2.querySelectorAll(".dot");
const slides2 = fsuSlideShowContainer2.querySelectorAll(".slide");
let currentSlide2 = 0;

function showSlide2(index) {

    slides2[currentSlide2].style.display = 'none';
    dots2[currentSlide2].classList.remove('active');

    currentSlide2 = (index + slides2.length) % slides2.length;

    slides2[currentSlide2].style.display = 'flex';
    dots2[currentSlide2].classList.add('active');

}

function nextSlide2() {
    showSlide2(currentSlide2 + 1);
}

function prevSlide2() {
    showSlide2(currentSlide2 - 1);
}

showSlide2(currentSlide2);
showSlide1(currentSlide1);
showSlide0(currentSlide0);

const textAreaElement = document.getElementById('msg');
function maxLength(txtArea) {
    if (!('maxLength' in txtArea)) {
        let max = textAreaElement.attributes.maxLength.value;
        txtArea.onkeypress = function () {
            if (this.value.length >= max) return false;
        }
    }
}

maxLength(document.getElementById("msg"));

import { db } from "./firebase.js"; 

const messengerEmail = document.getElementById("email");
const emailLabel = document.getElementById("email-label");
const messengerName = document.getElementById("msgr-name");
const messengerMsg = document.getElementById("msg");

let emailErrorLabel = "";
let errorCheck = false;

let validRegex = /\S+@\S+\.\S+/;

let emailValidation = function () {

    console.log(messengerName, " ", messengerEmail, " ", messengerMsg);
    
    if (messengerEmail.value.match(validRegex)) {
        contactForm.reset();
        document.getElementById("contact-p").style.color = "lightgreen";
        document.getElementById("contact-p").textContent = "The email was sent. I will get back to you as soon as possible.";
        
        if(errorCheck){
            emailErrorLabel.remove();
            errorCheck = false;
        }
        setTimeout(()=> {
            document.getElementById("contact-p").style.color = "white";
            document.getElementById("contact-p").textContent = "To get a hold of me please fill out this form and click submit.";
        }, 10000);

        console.log("Email is correct send form data to cloud firestore");

        db.collectionReference("mail").add({
            from: messengerEmail.value,
            to: 'portfolio.ec.mail@gmail.com',
            message: {
                subject: 'Possible employment from: ' + messengerName.value,
                text: messengerMsg.value
            }
        })
        .then(()=>{
            console.log("Docuemnt succesfully written");
        })
        .catch((error)=>{
            console.error("Error writing document: ", error);
        });

    } else {
        if (!errorCheck) {

            let errorMsg = document.createElement("label");
            emailErrorLabel = errorMsg;
            errorMsg.innerHTML = "Invalid Email Format!";
            errorMsg.style.color = "FireBrick";
            errorMsg.style.marginBottom = "-25px";
            errorMsg.setAttribute("id", "email-error-msg");
            contactForm.insertBefore(errorMsg, emailLabel);
            errorCheck = true;
        }
    }
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailValidation();
});