import React, { useState, useEffect } from 'react';

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books/")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <h2 className="text-center font-weight-bolder my-4">Buy Books from Here</h2>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div className="card h-100">
                <div className="position-absolute end-0">
                  <span className="badge rounded-pill bg-danger">{book.source}</span>
                </div>
                <img
                  src={book.image_link}
                  style={{ padding: "8px" }}
                  className="card-img-top"
                  alt="Book Cover"
                />
                <div className="card-body">
                  <h5 className="card-title">{book.book_name}</h5>
                  <p className="card-text">{book.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      By {book.author || "Unknown"} on {book.published_year}
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Price : {book.price} $ </strong>
                    </small>
                  </p>
                  <a rel="noreferrer" href={book.newsUrl} style={{
                    backgroundColor: "#212529",
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
                    }}

                    target="_blank" className="btn btn-sm btn-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Shop;
