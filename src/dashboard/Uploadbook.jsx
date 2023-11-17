import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';


const genres = ["Action and Adventure", "Mystery", "Science Fiction", "Fantasy", "Romance", "Horror", "Thriller", "Historical Fiction", "Biography", "Non-fiction", "Self-help", "Cookbook", "Travel", "Science", "Poetry", "Drama", "Comedy", "Satire", "Tragedy", "Fable", "Fairy Tale", "Mythology", "Graphic Novel", "Children's", "Young Adult", "Classic", "Contemporary", "Others"];

function Uploadbook() {
  const { user } = useContext(AuthContext);

  // Form Submission :-
  const handlebooksubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const book_name = form.bookName.value;
    const author = form.authorName.value;
    const image_link = form.imageLink.value;
    const description = form.bookDescription.value;
    const published_year = form.publishedYear.value;
    const genre = form.genre.value;
    const price = form.price.value;

    const bookObj = {
      book_name, author, image_link, description, published_year, genre, price,
      userId: user.uid, // Add the user's ID to the book object
    };
    console.log(bookObj);
    form.reset();

    // Sending data to the database:
    try {
      const response = await fetch('http://localhost:5000/uploadbook/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookObj),
      });

      const data = await response.json();
      console.log(data);
      alert('Book Uploaded Successfully');
    } catch (error) {
      console.error('Error uploading book:', error);
      // Handle error (e.g., show an error message to the user)
    }

    form.reset();
  };

  return (
    <>
      <div className='container'>
        <h2 style={{ textAlign: "center", margin: "0px 20px", padding: "0.6em 0px", fontWeight: "bolder" }}>
          Upload a Book
        </h2>
        <form onSubmit={handlebooksubmit}>
          <div className="mb-3">
            <label htmlFor="bookName" className="form-label">Book Name :</label>
            <input type="text" className="form-control" id="bookName" placeholder="Enter the book name" />
          </div>
          <div className="mb-3">
            <label htmlFor="bookDescription" className="form-label">Book Description :</label>
            <input type="text" className="form-control" id="bookDescription" placeholder="Enter the book description" />
          </div>
          <div className="mb-3">
            <label htmlFor="authorName" className="form-label">Author Name :</label>
            <input type="text" className="form-control" id="authorName" placeholder="Enter the author name" />
          </div>
          <div className="mb-3">
            <label htmlFor="imageLink" className="form-label">Image Link :</label>
            <input type="text" className="form-control" id="imageLink" placeholder="Enter the image link" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="mb-3" style={{ flex: "1", marginRight: "10px" }}>
              <label htmlFor="price" className="form-label">Price ( $ ) :</label>
              <input type="number" className="form-control" id="price" placeholder="Enter the price" />
            </div>
            <div className="mb-3" style={{ flex: "1", marginRight: "10px" }}>
              <label htmlFor="publishedYear" className="form-label">Published Year :</label>
              <input type="number" className="form-control" id="publishedYear" placeholder="Enter the published year" />
            </div>
            <div className="mb-3" style={{ flex: "1" }}>
              <label htmlFor="genre" className="form-label">Genre :</label>
              <select className="form-control" id="genre" >
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#212529",
              border: "1px solid white",
              fontSize: "15px",
              marginLeft: "",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "0.2s ease-in",
              fontWeight: "bolder",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.04)";
              e.target.style.backgroundColor = "white";
              e.target.style.border = "2px solid #212529";
              e.target.style.color = "#212529";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "#212529";
              e.target.style.color = "white";
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Uploadbook;
