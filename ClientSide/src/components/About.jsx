import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/about.css"

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                {/* Section Title */}
                <div className="sec-title">
                  <span className="title">About BookStore</span>
                  <h2>We are passionate tech enthusiasts who have been actively engaged in the creative and technological realms since 2015.</h2>
                </div>
                {/* Text Content */}
                <div className="text">
                  Welcome to BookStore - where the magic of books meets the innovation of technology! My name is Mandeep Yadav, and I've been passionately immersed in the world of literature and technology for the past three years.
                </div>
                <div className="text">
                  At BookStore, we curate a diverse collection of books that cater to every reader's taste and preference. Our journey began in 2015, and since then, we've been dedicated to providing a unique and immersive experience for book enthusiasts.

                  As a team of creative tech enthusiasts, we go beyond the ordinary. Our goal is to offer not just a bookstore but a haven for readers seeking an efficient and enjoyable way to explore the world of literature. Whether you're a seasoned bookworm or just starting your reading journey, we have something special for you.
                </div>
                {/* Button */}
                <div className="btn-box">
                  <Link to="https://www.linkedin.com/in/mandeep-yadav-58227925b" target='_blank' className="theme-btn btn-style-one">Contact Us</Link>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  {/* Image Link */}
                  <Link to="#" className="lightbox-image" data-fancybox="images">
                    <img title="Rahul Kumar Yadav" src="https://i.pinimg.com/736x/29/88/0b/29880bb7272d5bb6c03c361e9e81b410.jpg" alt="" />
                  </Link>
                </figure>
              </div>
            </div>
          </div>

          {/* Future Goal Section */}
          <div className="sec-title">
            <br /><br /><br /><br />
            <span className="title">Our Future Goal</span>
            <h2>We aspire to pioneer innovation and technology within the context of our application.</h2>
          </div>
          <div className="text">
            Our focus extends to refining UI/UX and ensuring robust functionality, ensuring that each plugin is structured optimally and possesses a visually stunning appeal that seamlessly integrates with your web app and website.
          </div>
          <div className="text">
            Utilizing a compact toolkit, we meticulously tailor each feature to align with your specific needs, guaranteeing both optimal performance and aesthetic excellence. Our commitment extends to providing a diverse range of technical content, covering aspects of both design and functionality. We produce content in various programming languages and remain steadfast in our commitment to offering it free of charge for your seamless utilization—a fundamental aspect of our mission.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
