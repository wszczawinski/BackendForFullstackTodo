$(document).ready( () => {
    $.getJSON('/api/todos')
        .then( addTodos )
        .catch( err => console.log(err));
    
    $('#todoInput').keypress( (e) => {
        if(e.which == 13) {
            createTodo();
        };
    });

    $('.list').on('click', 'li', function(){
        updateTodo($(this));
    });

    $('.list').on('click', 'span', function(e) {
        e.stopPropagation();
        removeTodo($(this).parent());
    });
});

const createTodo = () => {
    let usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput})
        .then( newTodo => {
            $('#todoInput').val('')
            addTodo(newTodo)
        })
        .catch( err => console.log(err));
};

const addTodos = (todos) => {
    todos.forEach( todo => {
        addTodo(todo);
    });
};

const addTodo = (todo) => {
    let newTodo = $(`<li class='task'>${todo.name}<span>X</span></li>`);
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
        if(todo.completed){
            newTodo.addClass('done');
        };
        $('.list').append(newTodo);
};

const updateTodo = (todo) => {
    let updateUrl = `/api/todos/${todo.data('id')}`;
    let isDone = !todo.data('completed');
    let updatedData = {completed: isDone};

    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updatedData
    })
        .then(updatedTodo => {
            todo.toggleClass('done');
            todo.data('completed', isDone);
        })
        .catch(err => console.log(err));
}

const removeTodo = (todo) => {
    let deleteUrl = `/api/todos/${clickedId}`;
    let clickedId =todo.data('id');
    
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
        .then(data => todo.remove() )
        .catch(err => console.log(err));
}