

checkbox.className = 'checkbox';
checkbox.id = 'checkbox';
li.appendChild(checkbox);
li.addEventListener('click', () => {
    checkbox.classList.toggle('completed');
})

// Perfectly placing check in span
document.getElementById('so').innerHTML = "<img src='/Users/l/Desktop/Frontendmentor.io/Todo App/todo-app-main/images/icon-check.svg'>";



checkbox.classList.toggle('doit');


// Method #1
function andOne() {
    var list = document.getElementsByClassName('todo-itemshow');
    if(document.getElementById('so').classList.contains('completion')) {
        document.getElementById('todo-number').innerHTML = --list.length;
    }
    else {
        document.getElementById('todo-number').innerHTML = list.length;
    }
}


// Method #2
li.addEventListener('click', () => {
    var money = document.querySelector('.todo-itemshow');
    if(document.getElementById('so').classList.contains('completion')) {
        document.getElementById('todo-number').innerHTML = --money.length;
    } else {
        document.getElementById('todo-number').innerHTML = money.length;
    }
})


// Method #3
let btns = document.getElementsByClassName('todo-itemshow');

for(i of btns) {
    i.addEventListener('click', function() {
        if(document.getElementById('so').classList.contains('completion')) {
            document.getElementById('todo-number').innerHTML = --btns.length;
        } else {
            document.getElementById('todo-number').innerHTML = btns.length;
        }
    })
}


// Method #1 for Clear Complete
clearCompleteBtn.addEventListener('click', () => {
    var todo = document.getElementsByClassName('todo-itemshow')
    if(document.getElementById('todo-itemshow').classList.contains('completion')) {
        for(todo of allCompleted) {
            todo.remove();
        }
    }
});

// Method #2 for Clear Complete (partially works, but doesn't just eliminate checkbox with "completion" class)
clearCompleteBtn.addEventListener('click', () => {
    var item = document.getElementById('todo-itemshow')
    item.remove();
    countTodos();
})

clearCompleteBtn.addEventListener('click', () => {
    var item = document.getElementById('todo-itemshow')
    item.remove();
    countTodos();
})

