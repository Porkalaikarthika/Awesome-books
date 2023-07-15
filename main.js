document.addEventListener('DOMContentLoaded', function () 
{
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const addBtn = document.getElementById('addBtn');
  const listElement = document.getElementById('listElement');
  let books = []; 
 
  class book {
    constructor(tit,auth){
    this.tit=tit;
    this.auth=auth;
    }

    displayBook(index) {
      const bookElement = document.createElement('section');
      // const index = books.indexOf(this);
      bookElement.classList.add('flexSec');
      bookElement.innerHTML = `
     <h3>"${this.tit}" by ${this.auth} </h3>    
     <button id="rmvBtn">remove</button>    
     `; 
     console.log(index); 
      bookElement.classList.add(index % 2 === 0 ? 'brown' : 'white');
  
      listElement.appendChild(bookElement);
      const removeBtn = bookElement.querySelector('#rmvBtn');
      
      removeBtn.addEventListener('click', ()=> {
        this.removeBook(index,bookElement);
      });
      
    }

    removeBook(index,bookElement) {
      // const index = books.indexOf(this);
      books.splice(index, 1);
      console.log(books);
      bookElement.remove();
      this.save();  
    }

    save() {
      const bookjson = JSON.stringify(books);
      localStorage.setItem('bookStore', bookjson);
  
    }
    
  }

  if(localStorage.getItem('bookStore'))
  {
    books = JSON.parse(localStorage.getItem('bookStore'));
    for( let i=0; i<books.length;i++)
    {
      const storebook = new book(books[i].tit,books[i].auth);
      storebook.displayBook(i);      
    }    
  }

  addBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const newBook=new book(title.value,author.value);

    books.push(newBook);
    //   console.log(books);
    newBook.save();

    newBook.displayBook(books.length-1);

    title.value = ''; // Clear the input fields
    author.value = '';
  });  

});
