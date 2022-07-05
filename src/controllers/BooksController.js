let books = require('../mocks/books')

module.exports = {
  listBooks(req, res){
    const { order } = req.query

    const sortedBooks = books.sort((a, b)=> {
      if(order === 'desc') {
        return a.id < b.id ? 1 : -1
      }

      return a.id > b.id ? 1 : -1
    })
    res.send(200,sortedBooks)
  },

  getBookById(req, res){
    const { id } = req.params

    const book = books.find((book) => book.id === Number(id))

    if(!book) {
      return res.send(400, { error: 'Book not found' })
    } 
    res.send(200, book)    
  },

  createBook(req, res) {
    const { body } = req
    
    const lastBookId = books[books.length - 1].id
      const newBook = {
        id: lastBookId + 1,
        title: body.title,
        author: body.author,
        page: body.page,
        year: body.year,
        language: body.language,
        publishing_company: body.publishing_company
      }
      
      books.push(newBook)

      res.send(200, newBook)
  },

  updateBook(req, res){
    let { id } = req.params
    const { title, author, page, year, language, publishing_company } = req.body

    id = Number(id)

    const bookExists = books.find((book) => book.id === id)

    if(!bookExists) {
      return res.send(400, { error: 'Book not found' })      
    }

    books = books.map((book) => {
      if(book.id === id) {
        return {
          ...book,
          title, 
          author,
          page,
          year,
          language,
          publishing_company
        }
      }
      return book
    })

    res.send(200, { id, title, author, page, year, language, publishing_company })
  },

  deleteBook(req, res) {
    let { id } = req.params
    id = Number(id)

    books = books.filter((book) => book.id !== id)
    res.send(200, {deleted: true })
  }

}