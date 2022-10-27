const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('seeeerver is running');
});

app.get('/category', (req, res) => {
    res.send(category);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const course = category.filter(item => item.id === id);
    res.send(course);   
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
