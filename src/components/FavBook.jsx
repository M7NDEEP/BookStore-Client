import React, { useEffect, useState } from 'react';
import Bookcards from './Bookcards';

const FavBook = () => {
  // State to store the fetched books
  const [books, setBooks] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {/* Display either the Bookcards or a loading message */}
      {books.length > 0 ? (
        <Bookcards books={books.slice(0, 10)} headline="Top Books of the Week"  />
      ) : (
        <p className='container' style={{color:'red',textAlign:'center',fontSize:'1.2em',marginTop:'10px'}}>Loading...</p>
      )}
    </div>
  );
};

export default FavBook;
