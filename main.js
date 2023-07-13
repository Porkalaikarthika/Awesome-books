document.addEventListener('DOMContentLoaded', function () 
{
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const addBtn = document.getElementById('addBtn');
  const listElement = document.getElementById('listElement');
  let books = []; // Array to store books
  // const bookObj = JSON.parse(bookStore); 
  // localStorage.clear();
  if (localStorage.getItem('bookStore')) {
    books = JSON.parse(localStorage.getItem('bookStore'));
    console.log(books);
    for (i = 0; i < books.length; i++) {
      displayBook(books[i]);
    }
  }


  addBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    const newBook = {
      title: title.value,
      author: author.value
    };


    books.push(newBook);
    //   console.log(books);
    save();

    displayBook(newBook);

    title.value = ''; // Clear the input fields
    author.value = '';
  });

  function displayBook(book) {
    const bookElement = document.createElement('section');
    const index = books.indexOf(book);
    bookElement.classList.add('flexSec');
    bookElement.innerHTML = `
   <h3>"${book.title}" by ${book.author} </h3>    
   <button id="rmvBtn">remove</button>    
   `;


    bookElement.classList.add(index % 2 === 0 ? 'brown' : 'white');

    listElement.appendChild(bookElement);
    const removeBtn = bookElement.querySelector('#rmvBtn');
    removeBtn.addEventListener('click', function () {
      removeBook(book, bookElement);
    });
  }

  function removeBook(book, bookElement) {
    const index = books.indexOf(book);
    books.splice(index, 1);
    console.log(books);
    bookElement.remove();
    save();

  }



  function save() {
    const bookjson = JSON.stringify(books);
    localStorage.setItem('bookStore', bookjson);

  }

});
