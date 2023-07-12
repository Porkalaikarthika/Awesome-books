// document.addEventListener('DOMContentLoaded', function() {
//     const title = document.getElementById('title');
//     const author = document.getElementById('author');
//     const addBtn = document.getElementById('addBtn');
//     const titleShow = document.getElementById('titleShow');
//     const authorShow = document.getElementById('authorShow');
//     const listElement = document.getElementById('listElement');
//     const bookList = []; // Array to store books
  
//     addBtn.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent form submission
  
//       const newBook = {
//         title: title.value,
//         author: author.value
//       };
  
//       bookList.push(newBook);
  
//       displayBooks();
  
//       title.value = ''; // Clear the input fields
//       author.value = '';
//     });
  
//     function displayBooks() {
//         let i=bookList.length;
//       // Clear existing book list
//     //   titleShow.innerHTML = '';
//     //   authorShow.innerHTML = '';
  
//       // Display all books in the array
//       for (; i >=bookList.length; i++) {
//         const book = bookList[i];
//         const bookSection = document.createElement ('section');
//         listElement.appendChild(bookSection);
  
//         const titleElement = document.createElement('h3');
//         titleElement.textContent = book.title;
//         bookSection.appendChild(titleElement);
  
//         const authorElement = document.createElement('h3');
//         authorElement.textContent = book.author;
//         bookSection.appendChild(authorElement);
  
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Remove';
//         // removeBtn.addEventListener('click', function() {
//         //   bookList.splice(i, 1);
//         //   displayBooks();
//         // /});
//          bookSection.appendChild(removeBtn);
//       }
//     }
//   });

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const addBtn = document.getElementById('addBtn');
    const listElement = document.getElementById('listElement');
    const books = []; // Array to store books
  
    addBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const newBook = {
        title: title.value,
        author: author.value
      };
  
      books.push(newBook);
      console.log(books);
  
      displayBook(newBook);
  
      title.value = ''; // Clear the input fields
      author.value = '';
    });
  
    function displayBook(book) {
      const bookElement = document.createElement('section');
      bookElement.innerHTML = `<h3>${book.title}</h3> <h3>${book.author} </h3> <button id="rmvBtn">remove</button>`;
      listElement.appendChild(bookElement);
      const removeBtn = bookElement.querySelector('#rmvBtn');
      removeBtn.addEventListener('click', function() {
        removeBook(book);
      });
    }
    function removeBook(book) {
        delete book.title;
        delete book.author;
     }
  });
  