// Get elements from HTML
const library = document.querySelector("#library-container");

// Array that stores all books
const myLibrary = [];

// Constructor function that creates Books
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID(); // Generates a unique ID for each book
  this.title = title; // Sets the book's title
  this.author = author; // Sets the book's author
  this.pages = pages; // Sets the book's number of pages
  this.read = read; // Sets the book's read status (true/false)
}

// Function to create a new book and add it to the library array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read); // Create a new book object
  myLibrary.push(newBook); // Add the new book to the library array
}

// Function to create cards for each book added to the library
function displayBooks(books) {
  // Loop through all books in the library
  for (let increment = 0; increment < books.length; increment++) {
    // Put currently selected book into a variable
    let currentBook = books[increment];

    // Create the card container
    const card = document.createElement("div");
    card.classList.add("book-card"); // Add CSS class for styling

    // Create elements for each piece of book info
    const titleElem = document.createElement("h3");
    titleElem.textContent = currentBook.title;

    const authorElem = document.createElement("p");
    authorElem.textContent = `${currentBook.author}`;

    const pagesElem = document.createElement("p");
    pagesElem.textContent = `${currentBook.pages} pages`;

    const statusElem = document.createElement("p");
    statusElem.textContent = currentBook.read
      ? "Status: read"
      : "Status: not read yet";

    // Append all elements to the card
    card.appendChild(titleElem);
    card.appendChild(authorElem);
    card.appendChild(pagesElem);
    card.appendChild(statusElem);

    // Add the card to the page
    library.appendChild(card);
  }
}

// Example entries:
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);

// Log library array to console
console.log(myLibrary);
displayBooks(myLibrary);
