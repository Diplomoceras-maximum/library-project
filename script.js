const myLibrary = [];

function Book() {
  // the constructor
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let status;
    if (this.read) {
      status = "read";
    } else {
      status = "not read yet";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
  };
}

function addBookToLibrary() {
  // take params, create a book then store in in the array
}
