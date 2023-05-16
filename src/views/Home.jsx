import React, { useEffect } from "react";
import "../styles/home.css";
import master from "../assets/master.png";
import skateboard from "../assets/skateboard.png";
import sport from "../assets/sport.png";

const Home = () => {
  const models = () => {
    const wrapper = document.querySelector(".outlet-wrapper");

    wrapper.scrollTo(0, window.innerHeight);
  };

  useEffect(() => {
    const cards = document.querySelector(".cards");
    let cardsCount = 0;
    let reverse = false;

    let cardsCountMax = 3;
    let moveAmount = -33;

    window.addEventListener("resize", () => {
      cards.style.left = 0;

      if (window.innerWidth <= 999) {
        cardsCountMax = 4;
        moveAmount = -50;
      } else if (window.innerWidth <= 714) {
        cardsCountMax = 5;
        moveAmount = -100;
      } else {
        cardsCountMax = 3;
        moveAmount = -33;
      }
    });

    setInterval(() => {
      if (window.innerWidth <= 999) {
        cardsCountMax = 4;
        moveAmount = -50;
      }

      if (window.innerWidth <= 714) {
        cardsCountMax = 5;
        moveAmount = -100;
      }

      if (cardsCount != cardsCountMax && !reverse) {
        cardsCount += 1;
        cards.style.left = (moveAmount * cardsCount).toString() + "vw";
      } else {
        reverse = true;
      }

      if (reverse && cardsCount != 0) {
        cardsCount -= 1;
        cards.style.left = (moveAmount * cardsCount).toString() + "vw";
      } else {
        reverse = false;
      }
    }, 2000);
  }, []);

  return (
    <>
      <div className="page-wrapper page-1">
        {/* <div className="side-background">
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
        </div> */}
        <div className="text-wrapper">
          <h1 className="page-header">
            We're <span data-text="better than Tesla.">better than Tesla.</span>
          </h1>
          <p className="subheader">Take that Elon.</p>
          <button className="button" onClick={models}>
            CHECK OUT OUR MODELS
          </button>
        </div>
      </div>
      <div className="page-wrapper page-2">
        <p className="header">Our Models</p>
        <div className="cards">
          <div className="card">
            <p className="title">The Master</p>
            <img src={master} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Skateboard</p>
            <img src={skateboard} alt="Car" className="img" id="skateboard" />
          </div>
          <div className="card">
            <p className="title">The Cartoonist</p>
            <img src={master} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Original</p>
            <img src={master} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Sport</p>
            <img src={sport} alt="Car" className="img" />
          </div>
          <div className="card">
            <p className="title">The Unreal</p>
            <img src={master} alt="Car" className="img" />
          </div>
        </div>
        <div className="controls">
          <i className="pi pi-angle-left"></i>
          <i className="pi pi-angle-right"></i>
        </div>
        <div className="page-wrapper page-3">
          <h1 className="header">Why self-driving?</h1>
          <ul>
            <li>More Secure</li>
            <li>Better for the environment</li>
            <li>Causes less accidents</li>
          </ul>
          <div className="content">
            <p className="secure">
              <p className="title">More secure</p>

              <p className="description">
                Our cars have 360 degree vision and sensors to ensure that they
                have 0 accidental collisions with anything.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
