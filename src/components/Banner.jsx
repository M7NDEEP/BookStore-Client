import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div style={{ backgroundColor: "#212529fc" }}>
      <div className="jumbotron px-2 py-3">
        {/* Title */}
        <h2 className="display-4" style={{ color: "white", fontFamily: "Lucida" ,fontSize:"4.5em" }}>
          Explore the{" "}
          <span style={{ WebkitTextStroke: "0.5px white", color: "transparent" }}>
            World of Books ...
          </span>
        </h2>
        
        {/* Lead Paragraphs */}
        <p className="lead" style={{ color: "white" }}>
          Discover, buy, and sell books at the best prices on our platform. Whether you're
          an avid reader or looking to declutter your bookshelf, we've got you covered.
        </p>
        <p style={{ color: "white" }}>
          Explore a diverse collection of genres, from classic literature to the latest
          bestsellers. Find hidden gems and connect with fellow book enthusiasts.
        </p>

        {/* CTA (Call to Action) Button */}
        <p className="lead">
          <Link
            className="btn btn-primary btn-lg"
            to="/shop"
            role="button"
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              fontSize: "15px",
              marginLeft: "",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "0.2s ease-in",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.04)";
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#212529";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            Start Exploring
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
