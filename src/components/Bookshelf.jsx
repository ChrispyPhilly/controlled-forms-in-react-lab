import { useState } from 'react';

const Bookshelf = () => {
  // State to store the list of books 
  const [books, setBooks] = useState([
    { title: 'Artemis Fowl', author: 'Eoin Colfer' },
    { title: 'Harry Potter', author: 'C.S. Lewis' },
  ]);

  // State to store the new book input fields
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Event handler 
  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setNewBook((prevBook) => ({
      ...prevBook, 
      [name]: value, 
    }));
  };

  // Event handler 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (newBook.title && newBook.author) {
      setBooks((prevBooks) => [...prevBooks, newBook]); 
            setNewBook({ title: '', author: '' });
    }
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
       
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title" 
              name="title" 
              value={newBook.title} 
              onChange={handleInputChange} 
              placeholder="Enter book title"
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author" 
              name="author" 
              value={newBook.author} 
              onChange={handleInputChange} 
              placeholder="Enter author name"
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        <h3>Books on the Shelf</h3>
        {books.length > 0 ? (
          <div className="bookCardsContainer">
            {books.map((book, index) => (
              <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No books added yet!</p>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;