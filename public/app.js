$(document).ready( () => {
    $.getJSON('/api/todos')
        .then( addTodos )
        .catch( err => console.log(err));
    
    $('#todoInput').keypress( (e) => {
        if(e.which == 13) {
            createTodo();
        };
    });
});

const addTodos = (todos) => {
    todos.forEach( todo => {
        addTodo(todo);
    });
};

const addTodo = (todo) => {
    let newTodo = $(`<li class='task'>${todo.name}</li>`);
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
