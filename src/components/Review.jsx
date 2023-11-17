import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Review() {
    return (
        <>
            <div className="container">
                <h2 style={{ textAlign: "center", margin: "0px", padding: "0.6em 0px", fontWeight: "bolder" }}>Our Customers</h2>
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div style={{ margin: "20px 0px" }}>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                </div>
                                {/*Text*/}
                                <div>
                                    <p>I stumbled upon this book store website recently, and it's a hidden treasure for book enthusiasts. The site's user-friendly design makes navigation a breeze, and the diverse book collection ensures there's something for everyone.</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            style={{
                                                width: "50px",
                                                borderRadius: "70px",
                                                border: "1px solid black",
                                                marginRight: "10px", // Adjust the margin as needed
                                            }}
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt=""
                                        />
                                        <p style={{ margin: 0 ,fontWeight:"bolder"}}>Mark Hanman</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div style={{ margin: "20px 0px" }}>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                </div>
                                {/*Text*/}
                                <div>
                                    <p>I recently discovered this book store website, and it's a delightful find for book enthusiasts. The site's intuitive design makes browsing effortless, and its extensive book collection guarantees a perfect read for every taste. it just wow</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            style={{
                                                width: "50px",
                                                borderRadius: "70px",
                                                border: "1px solid black",
                                                marginRight: "10px", // Adjust the margin as needed
                                            }}
                                            src="https://arch-india.org/sites/default/files/styles/profile_crop/public/pictures/2022-11/Picture1.png?h=688cc481&itok=jtkt08Oo"
                                            alt=""
                                        />
                                        <p style={{ margin: 0 ,fontWeight:"bolder"}}>Shruti Khanna</p>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div style={{ margin: "20px 0px" }}>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                </div>
                                {/*Text*/}
                                <div>
                                    <p>I came across this book store website not too long ago, and it's a real haven for book enthusiasts. Navigating through its thoughtfully designed interface is a breeze, and the diverse range of books caters to a variety of tastes, promising an ideal read for everyone.</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            style={{
                                                width: "50px",
                                                borderRadius: "70px",
                                                border: "1px solid black",
                                                marginRight: "10px", // Adjust the margin as needed
                                            }}
                                            src="https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg"
                                            alt=""
                                        />
                                        <p style={{ margin: 0 ,fontWeight:"bolder"}}>Henry Williams</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div style={{ margin: "20px 0px" }}>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                </div>
                                {/*Text*/}
                                <div>
                                    <p>Recently, I unearthed this fantastic book store website—a paradise for book enthusiasts. The site's design is so user-friendly, making the browsing experience a joy. With an extensive collection of books, it ensures there's a perfect read for every taste imaginable.</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            style={{
                                                width: "50px",
                                                borderRadius: "70px",
                                                border: "1px solid black",
                                                marginRight: "10px", // Adjust the margin as needed
                                            }}
                                            src="https://fonciermarket.com/asset/images/user/8.jpg"
                                            alt=""
                                        />
                                        <p style={{ margin: 0 ,fontWeight:"bolder"}}>Lara Karls</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <div style={{ margin: "20px 0px" }}>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                    <i class="fa-solid fa-star" style={{ color: "#FFD700" }}></i>
                                </div>
                                {/*Text*/}
                                <div>
                                    <p>Just discovered this amazing book store website, and it's a paradise for book enthusiasts. The site's user-friendly design makes exploration seamless, and the extensive book collection promises a perfect read for every preference.</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img
                                            style={{
                                                width: "50px",
                                                borderRadius: "70px",
                                                border: "1px solid black",
                                                marginRight: "10px", // Adjust the margin as needed
                                            }}
                                            src="https://www.joinaday.com/images/users/6.jpg"
                                            alt=""
                                        />
                                        <p style={{ margin: 0 ,fontWeight:"bolder"}}>Ronney Bush</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Review