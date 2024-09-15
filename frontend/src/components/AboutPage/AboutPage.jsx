import React from "react";
import {Link} from 'react-router-dom'
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-inner-container">
        <div className="logo-placeholder">
          Fruit.Ai
        </div>
        <p className="about-description">
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
        </p>
        <Link to={'/home'} className="about-button">Back</Link>
      </div>
    </div>
  );
}

export default AboutPage;
