// Array that stores all books
const myLibrary = [];

// Constructor function that creates Books
function Book() {
  this.id = crypto.randomUUID(); // Generates a unique ID for each book
  this.title = title; // Sets the book's title
  this.author = author; // Sets the book's author
  this.pages = pages; // Sets the book's number of pages
  this.read = read; // Sets the book's read status (true/false)

  // Method that returns the book info as a string
  this.info = function () {
    // Variable for book status
    let status;

    // If statement to determine the read status of the book
    if (this.read) {
      status = "read";
    } else {
      status = "not read yet";
    }

    // Returns a string with all the book info
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
  };
}

// Function to create a new book and add it to the library array
function addBookToLibrary() {}
