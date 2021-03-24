
const darkImage = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/bg-mobile-dark.jpg";
const lightImage = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/bg-mobile-light.jpg";
const sun = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-sun.svg";
const moon = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-moon.svg";
const btn = document.getElementById('icon-image');

// Icon
const iconImage = document.getElementById('icon-image');
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');


const image = document.getElementById('background-image');
const cols = document.getElementsByClassName('todos');
const font = document.getElementsByClassName('font');
const container = document.getElementsByClassName('container');


btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.querySelector('html').classList.toggle('light');
    iconImage.classList.toggle('lightimage');
})

// making image hidden when clicked
function changeIcon() {
    if(iconImage.classList.contains('sunimage')) {
        iconImage.classList.contains('moonimage');
        iconImage.classList.remove('sunimage');
    } else {
        
    }
}




// Functions for line strikethough when user is done with todo item
function strike() {
    document.getElementById('todo-2').style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerOne').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-1').style.display='block';
}

function strikeOne() {
    document.getElementById('todo-3').style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerTwo').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-2').style.display='block';
}

function strikeTwo() {
    document.getElementById('todo-4').style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerThree').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-3').style.display='block';
}

function strikeThree() {
    document.getElementById('todo-5').style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerFour').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-4').style.display='block';
}

function strikeFour() {
    document.getElementById('todo-6').style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerFive').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-5').style.display='block';
}

function strikeFive() {
    document.getElementById('todo-7').style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerSix').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-6').style.display='block';
}





 
// Can revert back to dark theme

//functionalities need to code for
// 1. drag and drop
// 2. switch between dark/light theme
// 3. checkmark when task completed