const UserController = require('./controllers/UsersController')
const BookController = require('./controllers/BooksController')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UserController.updateUser
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.deleteUser
  },
  {
    endpoint: '/books',
    method: 'GET',
    handler: BookController.listBooks
  },
  {
    endpoint: '/books/:id',
    method: 'GET',
    handler: BookController.getBookById
  },
  {
    endpoint: '/books',
    method: 'POST',
    handler: BookController.createBook
  },
  {
    endpoint: '/books/:id',
    method: 'PUT',
    handler: BookController.updateBook
  },
  {
    endpoint: '/books/:id',
    method: 'DELETE',
    handler: BookController.deleteBook
  },
]