
// Add new todo

function newTodo(event) {
    var li = document.createElement('li');
    var inputValue = document.getElementById('todo-input').value;
    var p = document.createElement('p');
    var t = document.createTextNode(inputValue);

    p.appendChild(t);
    li.appendChild(p);
    li.className = 'todo-item';
    li.className += 'show';

    if(event.which == 13 || event.keyCode == 13 || event.onclick) {
        if(inputValue === "") {
            alert("You must write something!");
        } else {
            document.getElementById('todo-list-id').appendChild(li);
        }
        // document.getElementById('todo-input').value = "";
}

    var span = document.createElement('span');
    span.className = 'close';
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
        div.remove();
        countTodos();
    };
    li.appendChild(span);
    li.onclick = function() {
        this.classList.toggle('checked');
        if(this.classList.contains('checked')) {
            removeClass(this, "incomplete");
            removeClass(this, "todo-item");
            addClass(this, "completed");
            countTodos();
        } else {
            removeClass(this, "completed");
            addClass(this, "todo-item");
            addClass(this, "incomplete");
            countTodos();
        }
    }
}











