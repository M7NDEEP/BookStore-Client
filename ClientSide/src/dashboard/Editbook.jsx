import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const genres = ["Action and Adventure", "Mystery", "Science Fiction", "Fantasy", "Romance", "Horror", "Thriller", "Historical Fiction", "Biography", "Non-fiction", "Self-help", "Cookbook", "Travel", "Science", "Poetry", "Drama", "Comedy", "Satire", "Tragedy", "Fable", "Fairy Tale", "Mythology", "Graphic Novel", "Children's", "Young Adult", "Classic", "Contemporary", "Others"];

const Editbook = () => {
  const { id } = useParams();
  const { book_name, author, image_link, description, published_year, genre, price } = useLoaderData();

  const handleupdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const book_name = form.bookName.value;
    const author = form.authorName.value;
    const image_link = form.imageLink.value;
    const description = form.bookDescription.value;
    const published_year = form.publishedYear.value;
    const genre = form.genre.value;
    const price = form.price.value;

    const updatebookObj = { book_name, author, image_link, description, published_year, genre, price };

    // Updating book data
    fetch(`http://localhost:5000/update-book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatebookObj),
    }).then(res => res.json()).then(data => {
      alert("Book Updated Successfully")
    })
  }

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", margin: "0px 20px", padding: "0.6em 0px", fontWeight: "bolder" }}>
        Edit Your Books
      </h2>
      <div className='container' style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img style={{ padding: "8px" }} className="card-img-top" src={image_link} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{book_name}</h5>
            <p className="card-text">{author}</p>
            <Link to="/shop" style={{
              backgroundColor: "#212529",
              fontWeight: 'bolder',
              color: "white",
              border: "1px solid #212529",
              fontSize: "15px",
              marginLeft: "",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "0.2s ease-in",
            }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.04)";
                e.target.style.backgroundColor = "white"; // Change to light background
                e.target.style.color = "#212529"; // Change to dark text color
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.backgroundColor = "#212529";
                e.target.style.color = "white";
              }} className="btn btn-primary">Shop</Link>
          </div>
        </div>
        <div>
          <form style={{}} onSubmit={handleupdate}>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">Book Name :</label>
              <input type="text" className="form-control" id="bookName" defaultValue={book_name} />
            </div>
            <div className="mb-3">
              <label htmlFor="bookDescription" className="form-label">Book Description :</label>
              <input type="text" className="form-control" id="bookDescription" defaultValue={description} />
            </div>
            <div className="mb-3">
              <label htmlFor="authorName" className="form-label">Author Name :</label>
              <input type="text" className="form-control" id="authorName" defaultValue={author} />
            </div>
            <div className="mb-3">
              <label htmlFor="imageLink" className="form-label">Image Link :</label>
              <input type="text" className="form-control" id="imageLink" defaultValue={image_link} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="mb-3" style={{ flex: "1", marginRight: "10px" }}>
                <label htmlFor="price" className="form-label">Price ( $ ) :</label>
                <input type="number" className="form-control" id="price" defaultValue={price} />
              </div>
              <div className="mb-3" style={{ flex: "1", marginRight: "10px" }}>
                <label htmlFor="publishedYear" className="form-label">Published Year :</label>
                <input type="number" className="form-control" id="publishedYear" defaultValue={published_year} />
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
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editbook;
