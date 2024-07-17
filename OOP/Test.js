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


// console.log(mylibrary.borrowBook("1984"));
// console.log(mylibrary.borrowBook("1984"));
// console.log(mylibrary.returnBook("1984"));
// console.log(mylibrary.borrowBook("1984"));
//show all book
// console.log(mylibrary.books);             


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
      throw new Error("This method should be implemented in a subclass");
    }
  
    // Method to return a book
    returnBook(library, title) {
      const bookIndex = this.borrowed_books.findIndex(book => book.title === title);
      if (bookIndex >= 0) {
        this.borrowed_books.splice(bookIndex, 1);
        return library.returnBook(title);
      } else {
        return `The book "${title}" is not in your borrowed list.`;
      }
    }
  }
  
  class Student extends User {
    constructor(name) {
      super(name);
      this.borrowLimit = 5;
    }
  
    // Override borrowBook method to implement borrowing limit
    borrowBook(library, title) {
      if (this.borrowed_books.length >= this.borrowLimit) {
        return `You have reached the borrowing limit of ${this.borrowLimit} books.`;
      }
      const result = library.borrowBook(title);
      if (result.startsWith("You have successfully borrowed")) {
        this.borrowed_books.push(library.books.find(book => book.title === title));
      }
      return result;
    }
  }
  
  class Admin extends User {
    // Admin has no borrowing limit
    borrowBook(library, title) {
      const result = library.borrowBook(title);
      if (result.startsWith("You have successfully borrowed")) {
        this.borrowed_books.push(library.books.find(book => book.title === title));
      }
      return result;
    }
  }
  

// Creating instances of Users
const student = new Student('Alice');
const admin = new Admin('Admin');

// Student borrowing books
console.log("=========================================Student borrow====================================================");
console.log(student.borrowBook(mylibrary, '1984')); // You have successfully borrowed "1984".
console.log(student.borrowBook(mylibrary, 'To Kill a Mockingbird')); // You have successfully borrowed "To Kill a Mockingbird".
console.log(student.borrowBook(mylibrary, 'The Great Gatsby')); // You have successfully borrowed "The Great Gatsby".
console.log(student.borrowBook(mylibrary, 'Moby Dick')); // You have successfully borrowed "Moby Dick".
console.log(student.borrowBook(mylibrary, 'War and Peace')); // You have successfully borrowed "War and Peace".
console.log(student.borrowBook(mylibrary, 'Pride and Prejudice')); // You have reached the borrowing limit of 5 books.

// Admin borrowing books
console.log("=========================================Admin borrow====================================================");
console.log(admin.borrowBook(mylibrary, 'Pride and Prejudice')); // You have successfully borrowed "Pride and Prejudice".
console.log(admin.borrowBook(mylibrary, '1984')); // The book "1984" is either not available or does not exist in the mylibrary.

// View borrowed books
console.log("=========================================Borrowed book by student====================================================");
console.log(student.viewBorrowedBooks()); // List of books borrowed by the student

console.log("=========================================Borrowed book by Admiin====================================================");
console.log(admin.viewBorrowedBooks()); // List of books borrowed by the admin

// Returning books
console.log("=========================================return book 1984====================================================");
console.log(student.returnBook(mylibrary, '1984')); // You have successfully returned "1984".

console.log("=========================================Update after student return book====================================================");
console.log(student.viewBorrowedBooks()); // Updated list of books borrowed by the student
