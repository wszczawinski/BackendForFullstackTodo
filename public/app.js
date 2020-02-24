$(document).ready( () => {
    $.getJSON('/api/todos')
        .then( addTodos )
        .catch( err => console.log(err));
    
    $('#todoInput').keypress( (e) => {
        if(e.which == 13) {
            createTodo();
        };
    });

    $('.list').on('click', 'span', function() {
        removeTodo($(this).parent());
    });
});

const removeTodo = (todo) => {
    let clickedId =todo.data('id');
    
    $.ajax({
        method: 'DELETE',
        url: `/api/todos/${clickedId}`
    })
        .then(data => todo.remove() )
        .catch(err => console.log(err));
}

const addTodos = (todos) => {
    todos.forEach( todo => {
        addTodo(todo);
    });
};

const addTodo = (todo) => {
    let newTodo = $(`<li class='task'>${todo.name}<span>X</span></li>`);
    newTodo.data('id', todo._id);
        if(todo.completed){
            newTodo.addClass('done');
        };
        $('.list').append(newTodo);
};

const createTodo = () => {
    let usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput})
        .then( newTodo => {
            $('#todoInput').val('')
            addTodo(newTodo)
        })
        .catch( err => console.log(err));
};
