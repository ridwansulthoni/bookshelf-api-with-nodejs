const {
  addBook,
  showBook,
  getBook,
  editBook,
  deleteBook
} = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBook,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;