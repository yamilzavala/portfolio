const toggleSwitch = document.querySelector('input[type="checkbox"]');
const rootElement = document.documentElement;

//Switch theme
function swithTheme(event) {
    if(event.target.checked) {
        rootElement.setAttribute('data-theme', 'dark')
    } else {
        rootElement.setAttribute('data-theme', 'light')
    }
}

toggleSwitch.addEventListener('change', swithTheme);
