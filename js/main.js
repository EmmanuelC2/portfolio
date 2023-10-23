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

const fsuSlideShowBtnDotContainer = document.getElementById('fsu-slideshow-btn-dot-container');
const fsuSlideShowContainer = document.getElementById('fsu-slideshow-container');
const slides = fsuSlideShowContainer.querySelectorAll(".slide");
const dots = fsuSlideShowBtnDotContainer.querySelectorAll(".dot");
const dotsContainer = fsuSlideShowBtnDotContainer.querySelector('.dots-container');
let currentSlide = 0;

console.log(dots)
function showSlide(index){
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
//setInterval(nextSlide, 10000);

function slideShowWindowResize(){
    
    if(window.innerWidth <= 1100){
        const currentSlideElement = slides[0];
        const ul = currentSlideElement.querySelector('ul');
        const liElements = currentSlideElement.querySelectorAll('li');

        if(liElements.length >= 3){
            const newSlide = document.createElement('div');
            const newUl = document.createElement('ul');
            const newDot = document.createElement('span');
            
            newSlide.classList.add('slide');
            newUl.classList.add('course-list');
            newDot.classList.add('dot');
            newDot.onclick = () => currentSlide(5);

            fsuSlideShowContainer.appendChild(newSlide);
            dotsContainer.appendChild(newDot);
        }else{
            return;
        }
    }

    if(window.innerWidth <= 780){
        const currentSlideElement = slides[0];
        const ul = currentSlideElement.querySelector('ul');
        const liElements = ul.querySelectorAll('li');

        if(liElements.length >= 2){
            
        }else{
            return;
        }
    }

}

slideShowWindowResize();

window.addEventListener('resize', slideShowWindowResize);
