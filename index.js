const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    ip = process.env.IP || "127.0.0.1";

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hi there from express!!');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => console.log(`App is running on: ${port}`));