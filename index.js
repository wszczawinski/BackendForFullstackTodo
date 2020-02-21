const express = require('express');
const app = express();
const port = process.env.PORT || 3000,
      ip = process.env.IP || "127.0.0.1";

const todoRoutes = require('./routes/todos')

app.get('/', (req, res) => {
    res.send('Hi there from express!!');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => console.log(`App is running on: ${port}`));