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

const textAreaElement = document.getElementById('message');
function maxLength(txtArea) {
    if (!('maxLength' in txtArea)) {
        let max = textAreaElement.attributes.maxLength.value;
        txtArea.onkeypress = function () {
            if (this.value.length >= max) return false;
        }
    }
}

maxLength(document.getElementById("message"));

emailjs.init('5-N9q_DyZQPA2Pnip');

const messengerEmail = document.getElementById("from-email");
const messengerName = document.getElementById("from-name");
const messengerMsg = document.getElementById("message");

const emailLabel = document.getElementById("email-label");
let emailErrorLabel = "";
let errorCheck = false;

let alertModal = document.getElementById("alert-modal");
let alertModalContent = document.getElementById("alert-modal-content");
let alertModalSpan = document.getElementById("close-alert-modal");
let alertModalParagraph = document.getElementById("alert-modal-p");

let emailModal = document.getElementById("email-modal-success");
let emailModalContent = document.getElementById("email-modal-content");
let emailModalSpan = document.getElementById("close-email-modal");
let emailModalParagraph = document.getElementById("email-modal-p");

let emailModalFailed = document.getElementById("email-modal-failed");
let emailModalContentFailed = document.getElementById("email-modal-content-failed");
let emailModalSpanFailed = document.getElementById("close-email-modal-failed");
let emailModalParagraphFailed = document.getElementById("email-modal-p-failed");

let validRegex = /\S+@\S+\.\S+/;

var reCaptchaToken = '';

let emailValidation = function () {

    if (messengerEmail.value.match(validRegex)) {

        if (reCaptchaToken != '') {
            return { isValid: true, reason: 'success' };
        } else {
            return { isValid: false, reason: 'recaptchaFailed' };
        }

    } else {
        if (!errorCheck) {
            let errorMsg = document.createElement("label");
            errorMsg.innerHTML = "Invalid Email Format!";
            errorMsg.style.color = "FireBrick";
            errorMsg.style.marginBottom = "-25px";
            errorMsg.setAttribute("id", "email-error-msg");
            errorMsg.setAttribute("for", "from-email");
            contactForm.insertBefore(errorMsg, emailLabel);
            errorCheck = true;
            emailErrorLabel = errorMsg;
        }

        return { isValid: false, reason: 'emailFailed' };

    }
}

var verifyCallback = function (res) {
    reCaptchaToken = res;
}

var onloadCallback = function () {
    grecaptcha.render('recaptcha-container', {
        'sitekey': '6Lek8wApAAAAAP8NEqzEQMy9-88g5kCmFVjAt29E',
        'callback': verifyCallback,
        'theme': 'dark'
    });
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailCheck = emailValidation()
    if (emailCheck.isValid) {
        emailjs.send("service_jjw8vu9", "template_4uggx9k", { message: messengerMsg.value, from_email: messengerEmail.value, from_name: messengerName.value, 'g-recaptcha-response': reCaptchaToken })
            .then((res) => {
                emailModal.style.display = "flex";
            })
            .catch((err) => {
                emailModalFailed.style.display = "flex";
            })
        reCaptchaToken = '';
        contactForm.reset();
    } else {
        if (emailCheck.reason == "recaptchaFailed") {
            if (errorCheck) { emailErrorLabel.remove(); errorCheck = false; }
            alertModal.style.display = "flex";
        }
    }
});

alertModalSpan.onclick = function () {
    alertModal.style.display = "none";
}
emailModalSpan.onclick = function () {
    emailModal.style.display = "none";
}
emailModalSpanFailed.onclick = function () {
    emailModalFailed.style.display = "none";
}

window.onclick = function (event) {

    if (event.target != alertModal && event.target != alertModalContent && event.target != alertModalParagraph) {
        alertModal.style.display = "none";
    }

    if (event.target != emailModal && event.target != emailModalContent && event.target != emailModalParagraph) {
        emailModal.style.display = "none";
    }

    if (event.target != emailModalFailed && event.target != emailModalContentFailed && event.target != emailModalParagraphFailed) {
        emailModalFailed.style.display = "none";
    }

}
