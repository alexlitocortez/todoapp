
// Icon
const sun = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-sun.svg";
const moon = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-moon.svg";

// Icon divs
const sunIcon = document.getElementById('sunimage');
const btn = document.getElementById('icon-image');

// Background image divs
const image = document.getElementById('background-images');
const play = document.getElementById('play')

// ToDo item divs
const todoThree = document.getElementById('todo-3');

// App todo styling and divs
const cols = document.getElementsByClassName('todos');
const font = document.getElementsByClassName('font');
const container = document.getElementsByClassName('container');
const images = document.getElementById('background-images');
const iconImages = document.getElementById('iconImages')

// images
const darkImage = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/bg-mobile-dark.jpg";
const lightImage = "/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/bg-mobile-light.jpg";



btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.remove('darkimage');
    document.querySelector('html').classList.toggle('light');
})


// Functions for line strikethough when user is done with todo item
function strike() {
    document.getElementById('todo-2').style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerOne').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-1').style.display='block';
}

function strikeOne() {
    todoTwo.style.setProperty('text-decoration', 'line-through');
    document.getElementById('containerTwo').classList.toggle('checkmark-blue');
    document.getElementById('checkmark-active-2').style.display = 'block';
        else {
        todoTwo.style.textDecoration = 'none';
        document.getElementById('checkmark-active-2').style.display = 'none';
    }
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






//functionalities need to code for
// 1. drag and drop
// 2. Adding new Todos
// 3. Undoing strikethrough when clicked again