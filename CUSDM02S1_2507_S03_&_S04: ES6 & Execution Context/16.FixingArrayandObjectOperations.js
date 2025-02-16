const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    
    if (!book?.title || !book?.author || !book?.year) {
      console.log("Book information is incomplete.");
      return;
    }
    this.books.push(book);
    console.log(`"${book.title}" has been added to the library.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title) || "Book not found.";
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1);
      console.log(`"${removedBook[0].title}" has been removed.`);
    } else {
      console.log("Book not found.");
    }
  }
};


library.addBook({ author: "George Orwell", year: 1949 }); 
console.log(library.books.length); 
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log(library.books.length); 
library.removeBook("The Hobbit"); 
console.log(library.books.length); 
