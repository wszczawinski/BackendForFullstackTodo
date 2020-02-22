$(document).ready( () => {
    $.getJSON('/api/todos')
        .then( addTodos )
        .catch( err => console.log(err));
});

function addTodos(todos) {
    todos.forEach( todo => {
        let newTodo = $(`<li class='task'>${todo.name}</li>`);
        $('.list').append(newTodo);
    });
};
