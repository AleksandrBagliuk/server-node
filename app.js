const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/books', booksRouter);

app.listen(4000, () => {
    console.log('server is working')
})
