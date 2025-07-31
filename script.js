// Get elements from HTML
const library = document.querySelector("#table-content");
const newBookBtn = document.querySelector("#new-book-btn");

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

// Function to create rows for each book added to the library
function displayBooks(books) {
  // Clear the page display everytime books are added to prevent duplication
  library.innerHTML = "";
  // Loop through all books in the library
  for (let increment = 0; increment < books.length; increment++) {
    // Put currently selected book into a variable
    let currentBook = books[increment];

    // Create the table row container
    const row = document.createElement("tr");
    row.setAttribute("data-id", currentBook.id); // Add id attriute to row for removing book with remove button
    row.classList.add("row"); // Add CSS class for styling

    // Create elements for each piece of book info
    const titleElem = document.createElement("td");
    titleElem.textContent = currentBook.title;

    const authorElem = document.createElement("td");
    authorElem.textContent = currentBook.author;

    const pagesElem = document.createElement("td");
    pagesElem.textContent = currentBook.pages;

    const statusElem = document.createElement("td");
    statusElem.textContent = currentBook.read ? "Read" : "Not read";

    const settingsElem = document.createElement("td");

    // Add a remove and a status toggle button to the settings column
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.classList.add("remove-button");
    const toggleStatusBtn = document.createElement("button");
    toggleStatusBtn.textContent = "Mark Read";
    toggleStatusBtn.classList.add("toggle-button");

    settingsElem.appendChild(removeBtn);
    settingsElem.appendChild(toggleStatusBtn);

    // Append all elements to the row
    row.appendChild(titleElem);
    row.appendChild(authorElem);
    row.appendChild(pagesElem);
    row.appendChild(statusElem);
    row.appendChild(settingsElem);

    // Add the row to the table
    library.appendChild(row);

    removeBtn.addEventListener("click", function () {
      // Get the row id of the book
      const bookId = row.getAttribute("data-id");

      // Get index of book to remove
      const index = myLibrary.findIndex((book) => book.id === bookId);

      // If index exists remove it
      if (index !== 1) {
        myLibrary.splice(index, 1);
      }

      // Display updated array on page
      displayBooks(myLibrary);
    });
  }
}

newBookBtn.addEventListener("click", function (event) {
  // Prevent form from reloading page
  event.preventDefault();

  // Get user input from the form inputs
  const titleValue = document.querySelector("#form-title").value;
  const authorValue = document.querySelector("#form-author").value;
  const pagesValue = document.querySelector("#form-pages").value;
  const statusValue = document.querySelector("#form-status").value;

  // Convert status value into a boolean (true/false) so the correct status is applied through the displayBooks function
  const isRead = statusValue === "Read";

  // Reset the form when after adding new book
  const form = document.querySelector("#new-book-form");
  form.reset();

  // Pass the user inputs through the AddBookToLibrary function into the array and display book on page
  addBookToLibrary(titleValue, authorValue, pagesValue, isRead);
  displayBooks(myLibrary);
});

// Example entries:
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);

// Log library array to console
console.log(myLibrary);
displayBooks(myLibrary);
