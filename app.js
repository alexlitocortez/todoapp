
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

// Add new todo
function newTodo(event) {
    // Create DOM elements
    var li = document.createElement('li');
    var checkbox = document.createElement('span'); //Creating span for checkbox
    var inputValue = document.getElementById('todo-input').value;
    var p = document.createElement('p');
    var t = document.createTextNode(inputValue);

    // paragraph that gets a text node
    p.appendChild(t);
    // list item that appends a paragraph
    li.appendChild(p);
    li.className = 'todo-item';
    li.className += 'show';
    li.id = 'show';

    if(event.which == 13 || event.keyCode == 13 || event.onclick) {
        if(inputValue === "") {
            alert('You must write something!');
        } else {
            document.getElementById('todo-list-id').appendChild(li);
        }
        // makes value in input bar disappear after you press enter

        var checkbox = document.createElement('span');
        var image = document.createElement('image');
            checkbox.className = 'so';
            checkbox.id = 'so';
            p.id = 'strike-through';
            p.className = 'strike-through';
            image.src = '/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-check.svg';
        // Creating span for checkmark with linear-gradient background

            li.addEventListener('click', () => {
                checkbox.classList.toggle('completion');
                p.classList.toggle('amazing');
            })
            // Added event listener so when you click list item, it fills the span with a linear gradient and crosses out the todo item
        li.appendChild(checkbox);

            li.onclick = function() {
                 var money = document.getElementById('todo-number').innerText
                if(checkbox.classList.contains('completion')) {
                    money--;
                }
            }

        document.getElementById('todo-input').value = "";
        var span = document.createElement('span');
            span.className = 'close';
            span.onclick = function() {
                var div = this.parentElement;
                div.style.display = 'none';
                div.remove();
                countTodos();
            }
        li.appendChild(span);
        countTodos();
        }
}

// Check number of Todo items
function countTodos() {
    var li = document.getElementsByClassName('close');
    document.getElementById('todo-number').innerText = li.length;
}





//functionalities need to code for
// 1. Make "Clear completed work"
// 2. When I click checkmark the todo count goes down





// Click div and counter goes down

