
// Add new todo
function newTodo(event) {
    // Create DOM elements
    var li = document.createElement('li');
    var inputValue = document.getElementById('todo-input').value;
    var p = document.createElement('p');
    var t = document.createTextNode(inputValue);

    // paragraph that gets a text node
    p.appendChild(t);
    // list item that appends a paragraph
    li.appendChild(p);
    li.className = 'todo-item';
    li.className += 'show';

    if(event.which == 13 || event.keyCode == 13 || event.onclick) {
        if(inputValue === "") {
            alert('You must write something!');
        } else {
            document.getElementById('todo-list-id').appendChild(li);
        }
        // makes value in input bar disappear after you press enter
        document.getElementById('todo-input').value = "";
        var span = document.createElement('span');
            span.className = 'close';
            span.onclick = function() {
                var div = this.parentElement;
                div.style.display = 'none';
                div.remove();
                countTodosRemove();
            }
        li.appendChild(span);
        countTodos();
        }
}

// Check number of Todo items
function countTodos() {
    var li = document.getElementsByClassName('close');
    document.getElementById('todo-number').innerHTML = li.length;
}


// Check number of Todo items when closed
function countTodosRemove() {
    var li = document.getElementsByClassName('close');
    document.getElementById('todo-number').innerHTML = li.length;
}
