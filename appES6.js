class Book {
   constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
   }
}

class UI {
   addBookToList(book) {
      const list = document.getElementById('book-list');

      //Create tr element
      const row = document.createElement('tr');
   
      //Insert cols
      row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="delete">X</a></td>
      `;
   
      list.appendChild(row);
   }

   showAlert(message, className) {
      //Create div
      const div = document.createElement('div');
      //Add classes
      div.className = `alert ${className}`;
      //Add text
      div.appendChild(document.createTextNode(message));

      //Get parent
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      //Insert Alert
      container.insertBefore(div, form);

      //Timeout after 3 seconds
      setTimeout(function(){
         document.querySelector('.alert').remove();
   }, 3000);
   }

   deleteBook(target) {
      if(target.className === 'delete'){
         target.parentElement.parentElement.remove();
      }
   }

   clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';   
   }
}

// Local Storage Class
class Store {
   static getBooks() {

   }

   static displayBooks() {

   }

   static addBook() {

   }

   static removeBook() {

   }

}

// Event Listener for Adding a Book
document.getElementById('book-form').addEventListener('submit', 
   function(e){
      // console.log('test');

      //Get Form Values
      const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

      //Instantiate a Book
      const book = new Book(title, author, isbn);

      //Instantitate UI
      const ui = new UI();

      //Validate
      if(title === '' || author === '' || isbn === '') {
         // alert('missing a field');

         //Error Alert
         ui.showAlert('Please fill in all fields', 'error');
      } else {
         //Add book to list
         ui.addBookToList(book);

         // Show success
         ui.showAlert('Book Added!', 'success');

         //clear fields
         ui.clearFields();
      }

      // console.log(book);
      
      e.preventDefault();
   }
);

// Event Delegation to Delete Books
document.getElementById('book-list').addEventListener('click', function(e){
   // console.log(delete);

   // Instantiate UI
   const ui = new UI();

   // Delete Book
   ui.deleteBook(e.target);

   // Show Alert once deleted
   ui.showAlert('Book removed successfully!', 'success');

   e.preventDefault();
});