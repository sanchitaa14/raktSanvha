import React, { useState, useEffect } from "react";
import avatar from "../assets/hero.svg";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const slides = [
    {
      title: "Make a Difference Today!",
      quote:
        "Your donation can change someone's life. Help us provide a source of new life, hope, and happiness to those in need today.",
      button: "Donate Now",
    },
    {
      title: "Request for Support!",
      quote: "Your dreams deserve a chance. Apply for our donation program today",
      button: "Create a Request",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  const currentSlideContent = slides[currentSlide];

  return (
    <div className="hero-container">
      <div className="slider">
        <div className="hero-text-container">
          <h1 className="hero-title">{currentSlideContent.title}</h1>
          <p className="hero-quote">{currentSlideContent.quote}</p>
          <Link to="/donate" className="hero-button ">
            {currentSlideContent.button}
          </Link>
        </div>
        <div className="hero-text-container">
          <h1 className="hero-title">{currentSlideContent.title}</h1>
          <p className="hero-quote">{currentSlideContent.quote}</p>
          <Link to="/donation-request" className="hero-button ">
            {currentSlideContent.button}
          </Link>
        </div>
      </div>
      <img src={avatar} alt="Avatar" className="hero-avatar" />
    </div>
  );
};

export default Hero;