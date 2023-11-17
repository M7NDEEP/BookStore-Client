import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Bookcards({ headline, books }) {
  return (
    <>
      <div className="container">
        {/* Headline */}
        <h2 style={{ textAlign: "center", margin: "0px", padding: "0.6em 0px", fontWeight: "bolder" }}>{headline}</h2>

        {/* Swiper Component */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              {/* Individual Book Card */}
              <Link style={{ textDecoration: "none" }} to="/">
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                  {/* Book Image */}
                  <img
                    style={{ height: "250px", width: "auto", border: "1px solid #212529", borderRadius: "5px", padding: '5px' }}
                    src={book.image_link}
                    alt={book.book_name}
                  />

                  {/* Link to Shop */}
                  <Link to="/shop">
                    <div>
                      <button style={{ border: "1px solid #212529", borderRadius: "3px", backgroundColor: "#212529", position: "absolute", top: "3px", right: "3px" }}>
                        <i className="fa-solid fa-cart-shopping" style={{ color: "#ffffff" }}></i>
                      </button>
                    </div>
                  </Link>

                  {/* Book Details */}
                  <p style={{ textDecoration: "underline white", fontFamily: "Lucida", fontSize: "1.1em", color: "black", textAlign: "center", marginTop: "5px", marginBottom: "40px" }}>
                    <strong>{book.book_name}</strong>
                    <p>{book.price}$</p>
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Bookcards;
