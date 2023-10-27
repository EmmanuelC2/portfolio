const hamburgerToggle = document.getElementById('hamburger-toggle');
const linkList = document.getElementById('link-list')

//Hamburger-toggle and link-list display functionality.
hamburgerToggle.addEventListener('click', () => {
    linkList.classList.toggle('active');
    hamburgerToggle.classList.toggle('active');
   
});

//Hamburger-toggle and link-list hide functionality.
document.addEventListener('click', (e) => {
    if(!linkList.contains(e.target) && !hamburgerToggle.contains(e.target)){
        linkList.classList.remove('active');
        hamburgerToggle.classList.remove('active');
    }
});