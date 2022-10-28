const lightModeBtn = document.querySelector('#light-mode-btn');
const darkModeBtn = document.querySelector('#dark-mode-btn');
const logoImageDark = document.querySelector('#logoImgDark');
const logoImageLight = document.querySelector('#logoImgLight');
const menuBtn = document.querySelector('.menu-btn');
const mobile_menu = document.querySelector('.mobile-nav');
let dark = true;
let menuOpen = false;
let isActive = false;
// lightModeBtn.classList.remove('d-none');

if(!dark){
    darkModeBtn.classList.remove('d-none');
    // lightModeBtn.classList.add('d-none');
    // logoImageLight.classList.remove('d-none');
    // logoImageDark.classList.add('d-none');
    logoImageDark.classList.add('d-none');


} else{
    lightModeBtn.classList.remove('d-none');
    // darkModeBtn.classList.add('d-none');
    
    logoImageDark.classList.remove('d-none');

    
}



menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.toggle('open');
        mobile_menu.classList.remove('d-none');
        menuOpen = true;
        // isActive = true;

    } else {
        menuBtn.classList.remove('open');
        mobile_menu.classList.add('d-none');
        menuOpen = false;
    }
});


// DARK MODE
const darkModeFunction = () => {
    let element = document.body;
    element.classList.toggle('toggleDark');
    logoImageLight.classList.add('d-none');
    logoImageDark.classList.remove('d-none');
    darkModeBtn.classList.add('d-none');
    lightModeBtn.classList.remove('d-none');
    dark = true;
}

const lightModeFunction = () => {
    let element = document.body;
    element.classList.toggle('toggleDark')
    logoImageDark.classList.add('d-none');
    logoImageLight.classList.remove('d-none');
    lightModeBtn.classList.add('d-none');
    darkModeBtn.classList.remove('d-none');
    dark = false;
}

lightModeBtn.addEventListener('click', (e) => {
         lightModeFunction();

})

darkModeBtn.addEventListener('click', (e) => {
         darkModeFunction();

})