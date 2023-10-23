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
    
    if(contactForm.style.zIndex == -1){
        contactForm.style.zIndex = 0;
        projectContainer.zIndex = 0;
    }else{
        contactForm.style.zIndex= -1;
        projectContainer.zIndex = -1;
    }

    projectContainer.forEach((element) => {
        
        if(element.style.zIndex == -1){
            element.style.zIndex = 0;
        }else{
            element.style.zIndex=-1;
        }
    })
   
});

//Side links functionality to hide or not and change img.
toggleArrow.addEventListener('click', () => {

    if(toggleArrow.classList.contains('active')){   
        toggleArrowImg = document.getElementById('toggle-arrow-image')
        toggleArrowImg.src = "/images/rightArrow.png";
    }else{
        toggleArrowImg.src = "/images/leftArrow.png";
    }

    toggleArrow.classList.toggle('active');
    linkContainer.classList.toggle('active');
   
});

//Click outside of the link-list, hamburgerToggle, or
//toggle arrow then hide them.
document.addEventListener('click', (e) => {
    if(!linkList.contains(e.target) && !hamburgerToggle.contains(e.target) && !toggleArrow.contains(e.target)){
        linkList.classList.remove('active');
        hamburgerToggle.classList.remove('active');
        contactForm.style.zIndex=0;

        projectContainer.forEach((element) => {
            element.style.zIndex = 0;
        })
    }
    
});

const fsuSlideShowBtnDotContainer = [document.getElementById('fsu-slideshow-btn-dot-container-0'),document.getElementById('fsu-slideshow-btn-dot-container-1')];
const fsuSlideShowContainer = [document.getElementById('fsu-slideshow-container-0'), document.getElementById('fsu-slideshow-container-1')];
let slides = '';
let dots = '';

let currentSlide = 0;

function showSlide(index){

    for(let i = 0; i < 2; i++){
        if(getComputedStyle(fsuSlideShowBtnDotContainer[i]).display != 'none'){
            dots = fsuSlideShowBtnDotContainer[i].querySelectorAll(".dot");
            slides = fsuSlideShowContainer[i].querySelectorAll(".slide");
            break;
        }
    }
    console.log("Not on switch: ", currentSlide);
    slides[currentSlide].style.display='none';
    dots[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].style.display= 'flex';
    dots[currentSlide].classList.add('active');
}

function nextSlide(){
    showSlide(currentSlide+1);
}

function prevSlide(){
    showSlide(currentSlide-1);
}

showSlide(currentSlide);

