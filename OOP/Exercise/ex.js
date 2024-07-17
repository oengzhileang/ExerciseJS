class Library {
  constructor(name){
      this.name = name;
      this.books = [];
  }

  //2 Basic operations
  addBook(book){
      this.books.push(book)
  }
  // removeBook(title,isBn){
  //     return this.books.filter(book => book.title !== title || book.isBn !== isBn)
  // }
  removeByTitle(title){
      this.books = this.books.filter(book => book.title !== title) //jab yor book title na dea min smer title ber smer ot yor
  }

  // searchBook(search){
  //     return this.books.filter(book => {
  //         if(search !== book){
  //             console.log("Book not found");
  //         }
  //         else{
  //             book.title.toLowerCase().includes(search.toLowerCase()) ||
  //             book.author.toLowerCase().includes(search.toLowerCase()) ||
  //             book.genre.toLowerCase().includes(search.toLowerCase())
  //         }
  //     }
  //     )
  // }
  searchBook(search) {
      const results = this.books.filter(book => 
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()) ||
          book.genre.toLowerCase().includes(search.toLowerCase())
      );
  
      if (results.length === 0) {
          console.log("Book not found");
      }
  
      return results;
  }    
  displayAllAvailableBook(){
      const availableBook =  this.books.filter(book => book.available)
      if(availableBook.length ===0){
          console.log(availableBook);
      }else{
          console.log(availableBook);
      }
  }

  //Borrowing and returning
  borrowBook(title){
      const book = this.books.find(book => book.title === title && book.available)
      if(book){
          book.available = false;
          return `You have successfully borrowed ${title}`
      }
      else{
          return `the book ${title} is unavailable`
      }
  }
  returnBook(title){
      const book = this.books.find(book => book.title === title && !book.available)
      if(book){
          book.available = true;
          return `You have returned ${title}`
      }
  }
}
class Book{
  constructor(title,author,genre,available = true){
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.available = available;
  }
}
const mylibrary  = new Library("The boys")
// console.log(mylibrary.name);  //Show library name
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Fiction');
const book2 = new Book('1984', 'George Orwell', 'Dystopian');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Classics');
const book4 = new Book('Moby Dick', 'Herman Melville', 'Adventure');
const book5 = new Book('War and Peace', 'Leo Tolstoy', 'Historical');
const book6 = new Book('Pride and Prejudice', 'Jane Austen', 'Romance');
mylibrary.addBook(book1); //add book to library
mylibrary.addBook(book2)
mylibrary.addBook(book3)
mylibrary.addBook(book4);
mylibrary.addBook(book5);
mylibrary.addBook(book6);


console.log(mylibrary.borrowBook("1984"));
console.log(mylibrary.borrowBook("1984"));
console.log(mylibrary.returnBook("1984"));
console.log(mylibrary.borrowBook("1984"));
// show all book
console.log(mylibrary.books);             


class User {
  constructor(name) {
    this.name = name;
    this.borrowed_books = [];
  }

  // Method to view borrowed books
  viewBorrowedBooks() {
    return this.borrowed_books;
  }

  // Method to borrow a book (should be overridden in subclasses)
  borrowBook(library, title) {
    const book = library.borrowBook(title)
    if(book){
      this.borrowed_books.push(book)
      return book
    }else{
      console.log("Book is not available");
    }
  }
}