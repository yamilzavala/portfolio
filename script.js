const toggleSwitch = document.querySelector('input[type="checkbox"]');
const rootElement = document.documentElement;
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textbox = document.getElementById('text-box');
const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');

//Set icon and text
function setIconAndText(mode) {
    if(mode === 'dark') {
        toggleIcon.children[0].textContent = 'Light Mode';
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    } else {
        toggleIcon.children[0].textContent = 'Dark Mode';
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    }    
}

function setImage(mode){      
        img1.src = `./img/undraw_proud_coder_${mode}.svg`;
        img2.src = `./img/undraw_feeling_proud_${mode}.svg`;
        img3.src = `./img/undraw_conceptual_idea_${mode}.svg`;   
}

//Set theme
function setTheme(mode) {
    if(mode === 'dark') {        
        nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        textbox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    } else {        
        nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        textbox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }
    setIconAndText(mode);
    setImage(mode);
}

//Switch theme
function swithTheme(event) {
    if(event.target.checked) {
        rootElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark');
        setTheme('dark')
    } else {
        rootElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light');
        setTheme('light')
    }
}

//validate local storage
function validateLocalStorage() {
    const mode = localStorage.getItem('theme');    
    if(mode === 'dark') {
        toggleSwitch.checked = true;     
        rootElement.setAttribute('data-theme', 'dark')   
    } else {
        toggleSwitch.checked = false;
        rootElement.setAttribute('data-theme', 'light')
    }
    setTheme(mode);
}

validateLocalStorage();
toggleSwitch.addEventListener('change', swithTheme);
