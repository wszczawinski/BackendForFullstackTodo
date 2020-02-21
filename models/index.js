const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect('mongodb://127.0.0.1:27017/todo-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.connection.once('open', () => {
    console.log("Connection hes been made!!");
}).on('error', (error) => {
    console.log('Connection error: ', error);
});

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
