
function newTodo(event) {
    var li = document.createElement('li');
    var inputValue = document.getElementById('todo-input').value;
    var p = document.createElement('p');
    var t = document.createTextNode(inputValue);

    p.appendChild(t);
    li.appendChild(p);
    li.className = 'todo-item';
    li.className += 'show';
}











