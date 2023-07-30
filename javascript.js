const table = document.getElementById("libraryTable");
const libraryTable = document.getElementById("libraryBody");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

let myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

btn.addEventListener("click", displayForm, false);

function displayForm(event) {
  console.log("Clicked");

  form.className == "hide"
    ? (form.className = "show")
    : (form.className = "hide");
}

const addBookToLibrary = (title, author, pages) => {
  let tempBook = new Book(title, author, pages);
  myLibrary.push(tempBook);
};

submit.addEventListener("click", submitHandler, false);

function submitHandler(event) {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  addBookToLibrary(bookTitle, bookAuthor, bookPages);
  displayLibrary();
  form.reset();
  event.preventDefault();
}

addBookToLibrary("Lord", "Me Lole", "300");
addBookToLibrary("Test", "Test", "Test");

const displayLibrary = () => {
  while (libraryTable.firstChild) {
    libraryTable.removeChild(libraryTable.firstChild);
  }

  if (myLibrary.length > 0) {
    myLibrary.forEach((e) => {
      let row = libraryTable.insertRow(-1);

      let cell1 = row.insertCell(0);
      let newText = document.createTextNode(e.title);
      cell1.appendChild(newText);

      let cell2 = row.insertCell(1);
      newText = document.createTextNode(e.author);
      cell2.appendChild(newText);

      let cell3 = row.insertCell(2);
      newText = document.createTextNode(e.pages);
      cell3.appendChild(newText);
    });
  }
};

displayLibrary();
