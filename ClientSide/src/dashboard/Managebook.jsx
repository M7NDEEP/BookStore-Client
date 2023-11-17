import React, { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Managebook = () => {
  // const [allbooks, setAllBooks] = useState([]);
  const { user, uid } = useContext(AuthContext);
  const [userBooks, setUserBooks] = useState([]); // State to store user-specific books

  
  useEffect(() => {
    // Fetch books only for the logged-in user
    if (uid) {
      fetch(`http://localhost:5000/user-books/${uid}`)
        .then((res) => res.json())
        .then((data) => setUserBooks(data));
    }
  }, [uid]);

  const deleteBook = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:5000/delete-book/${bookId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      alert('Book Removed Successfully');
      // Update the userBooks state after deleting the book
      setUserBooks(userBooks.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
      setMessage('Failed to delete the book');
    }
  };

  return (
    <div className='container'>
      <h2 style={{ textAlign: "center", margin: "0px 20px", padding: "0.6em 0px", fontWeight: "bolder" }}>
        Manage Your Books
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userBooks.map((book, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{book.book_name}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.price}</td>
                    <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                      <Link to="/shop">
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#212529', border: "none" }}>
                          <i className="far fa-eye" onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.2)";
                          }}
                            onMouseOut={(e) => {
                              e.target.style.transform = "scale(1)";
                            }}></i>
                        </button>
                      </Link>

                      <Link to={`/admin/dashboard/edit-book/${book._id}`}>
                        <button type="button" className="btn btn-success" style={{ backgroundColor: '#212529', border: "none" }}>
                          <i onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.2)";
                          }}
                            onMouseOut={(e) => {
                              e.target.style.transform = "scale(1)";
                            }} className="fas fa-edit"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteBook(book._id)}
                        type="button"
                        className="btn btn-danger"
                        style={{ backgroundColor: '#212529', border: "none" }}
                      >
                        <i onMouseOver={(e) => {
                          e.target.style.transform = "scale(1.2)";
                        }}
                          onMouseOut={(e) => {
                            e.target.style.transform = "scale(1)";
                          }} className="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Managebook;
