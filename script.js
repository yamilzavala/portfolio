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
        setTheme('dark')
    } else {
        rootElement.setAttribute('data-theme', 'light')
        setTheme('light')
    }
}

toggleSwitch.addEventListener('change', swithTheme);
