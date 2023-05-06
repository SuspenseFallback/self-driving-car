import React, { useEffect } from "react";
import "../styles/home.css";
import original from "../assets/original.png";

const Home = () => {
  useEffect(() => {
    const cards = document.querySelector(".cards");
    let cardsCount = 0;
    let reverse = false;

    setInterval(() => {
      if (cardsCount != 3 && !reverse) {
        cardsCount += 1;
        cards.style.left = (-33 * cardsCount).toString() + "vw";
      } else {
        reverse = true;
      }

      if (reverse && cardsCount != 0) {
        cardsCount -= 1;
        cards.style.left = (-33 * cardsCount).toString() + "vw";
      } else {
        reverse = false;
      }
    }, 2000);
  }, []);

  return (
    <>
      <div className="page-wrapper page-1">
        <div className="side-background">
          <div className="card">
            <div className="row">
              <p className="name">Krithin Jay Pakshootra</p>
              <p className="rating">
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
              </p>
            </div>
            <p className="content">
              I loved the car. It has great self-driving and security. Charges
              really quick. Way better than Tesla. <span>#DotCars</span>{" "}
              <span>#BetterThanTesla</span>
            </p>
          </div>
          <div className="card">
            <div className="row">
              <p className="name">Tomoaki Matsuo</p>
              <p className="rating">
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
              </p>
            </div>
            <p className="content">
              I loved the car. It has great self-driving and security. Charges
              really quick. Way better than Tesla. <span>#DotCars</span>{" "}
              <span>#BetterThanTesla</span>
            </p>
          </div>
          <div className="card">
            <div className="row">
              <p className="name">Aydan Kumble</p>
              <p className="rating">
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
                <i className="pi pi-star-fill"></i>
              </p>
            </div>
            <p className="content">
              I loved the car. It has great self-driving and security. Charges
              really quick. Way better than Tesla. <span>#DotCars</span>{" "}
              <span>#BetterThanTesla</span>
            </p>
          </div>
        </div>
        <div className="text-wrapper">
          <h1 className="page-header">
            We're <span data-text="better than Tesla.">better than Tesla.</span>
          </h1>
          <p className="subheader">Take that Elon.</p>
          <button className="button">CHECK OUT OUR MODELS</button>
        </div>
      </div>
      <div className="page-wrapper page-2">
        <p className="header">Our Models</p>
        <div className="cards">
          <div className="card">
            <p className="title">The Master</p>
            <img src={original} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Skateboard</p>
            <img src={original} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Cartoonist</p>
            <img src={original} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Original</p>
            <img src={original} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Sport</p>
            <img src={original} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Unreal</p>
            <img src={original} alt="Car" className="img" />
          </div>
        </div>
      </div>
      <div className="page-wrapper page-3">
        <h1>Is self-driving safe?</h1>
        <p className="short-answer">
          Short Answer: <span className="bold">Yes.</span>
        </p>
        <p className="long-answer">
          Long Answer: There have been multiple studies conducted by multiple
          companies to determine the safety of self-driving cars. Not only have
          they been successful, extensive training for them means that they are
          better drivers than humans, and have multiple safety features, sensors
          and cameras that have a 360-degree view of the car.
        </p>
      </div>
    </>
  );
};

export default Home;
