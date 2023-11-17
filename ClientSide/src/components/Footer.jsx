import React from 'react';
import { Link } from 'react-router-dom';
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <body>
        <footer className="footer">
          <div className="container row">
            {/* Company Column */}
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><Link to="/about">about us</Link></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><Link to="/signup">Become a Seller</Link></li>
              </ul>
            </div>

            {/* Get Help Column */}
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><Link to="/shop">shop</Link></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>

            {/* Online Shop Column */}
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">download</a></li>
                <li><a href="#">changelog</a></li>
                <li><a href="#">github</a></li>
                <li><a href="#">all version</a></li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/mandeep-yadav-58227925b" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Footer;
