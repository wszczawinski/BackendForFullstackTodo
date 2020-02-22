const express = require('express'),
    router = express.Router(),
    db = require('../models/index'),
    helpers = require('../helpers/todos')

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.postTodos);

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;
