
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
    document.getElementById('todo-2').classList.toggle('linethrough');
    document.getElementById('containerOne').classList.toggle('cross');
}

function strikeOne() {
    document.getElementById('todo-3').classList.toggle('linethrough');
    document.getElementById('containerTwo').classList.toggle('cross');
}

function strikeTwo() {
    document.getElementById('todo-4').classList.toggle('linethrough');
    document.getElementById('containerThree').classList.toggle('cross');
}

function strikeThree() {
    document.getElementById('todo-5').classList.toggle('linethrough');
    document.getElementById('containerFour').classList.toggle('cross');
}

function strikeFour() {
    document.getElementById('todo-6').classList.toggle('linethrough');
    document.getElementById('containerFive').classList.toggle('cross');
}

function strikeFive() {
    document.getElementById('todo-7').classList.toggle('linethrough');
    document.getElementById('containerSix').classList.toggle('cross');
}







//functionalities need to code for
// 1. drag and drop
// 2. Adding new Todos (make 10 max todos)
// 3. How to make sure when you click X on new Todo tasks it applies to the new ones
// 4. Make "5 items left" work to count how many todo tasks are left
// 5. Make "Clear completed work"
