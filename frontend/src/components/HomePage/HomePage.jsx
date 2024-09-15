import React from "react";
import { Link } from "react-router-dom";
import { SiGoogletranslate } from "react-icons/si";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="inner-container">
        <h2 className="title">Fruit.Ai</h2>
        <span className="subtitle">"Be Healthy!"</span>
        <div className="button-container">
          <Link to="/hellochat" className="button button-chat">Chat.</Link>
          <div className="button blur" id="green-button"></div>
          <div className="button blur" id="yellow-button"></div>
          <Link to="/translator" className="button button-translator">
            <SiGoogletranslate size={40} />
          </Link>
          <Link to="/faq" className="button button-faqs">FAQs</Link>
          <Link to="/about" className="button button-about">About</Link>
        </div>
        <div className="indicator-container">
          <div className="indicator"></div>
          <div className="indicator-border"></div>
          <div className="indicator-border"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
