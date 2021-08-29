const express = require('express');
const router = express.Router();

let idBook = 0;

let books = [
  {
    id: idBook++,
    author: 'John Doe',
    title: 'Javascript Book'
  },
  {
    id: idBook++,
    author: 'Kristofer Roben',
    title: 'Vini Puh'
  }
]

// получение всех книг
router.get('/', (req, res) => {
    res.json(books);
});
// получение одной книги
router.get('/:id', (req, res) => {
    // приходить как строка поэтому необходимо парсить
    const bookId = parseInt(req.params.id, 10);

    const book = books.find(book => book.id === bookId);
    if(book) {
        return res.json(book);
    }
    return res.status(404).json({
        status: `Book with ${bookId} not found`
    })
})
// добавление книги
router.post('/', (req, res) => {
    console.log(req.body);
    const book = {
        title: req.body.title || 'Default title',
        author: req.body.author || 'Default author',
        id: idBook++
    };

    books.push(book)
    return res.json(book);
})
// изменение книги по id
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);

    books.forEach((book) => {
        if (book.id === bookId) {
            book.author = req.body.author;
            book.title = req.body.title;
        }
    });

    const newBook = books.find(book => book.id === bookId);
    return res.json(newBook)
})
// удаление книги
router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);

    books = books.filter(book => book.id != bookId)

    const existBook = books.find(book => book.id === bookId);

    if(!existBook) {
        return res.send(`Book with ${bookId} was deleted`).status(200)
    } else {
        return res.send('Something wrong').status(400)
    }
})


module.exports = router