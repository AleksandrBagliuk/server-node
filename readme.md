-- current versions

node v14.17.5
npm v6.14.14
express v4.16.1

-- api for working

get all books
(GET) localhost:4000/books

get one book
(GET) localhost:4000/books/:${id_book}

add book
(POST) localhost:4000/books
body: {
    "title": some_title,
    "author": some_author
}

modify book
(PUT) localhost:4000/books/:${id_book}
body: {
    "title": some_title,
    "author": some_author
}

delete book
(DELETE) localhost:4000/books/:${id_book}

For starting, you must be in the root directory and run the file app.js using the --- node app.js



