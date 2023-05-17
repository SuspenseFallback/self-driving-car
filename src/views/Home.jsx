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
      <div className="page-wrapper page-1" id="page-1">
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
      <div className="page-wrapper page-2" id="page-2">
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
      </div>
      <div className="page-wrapper page-3" id="page-3">
        <h1 className="header">Why self-driving?</h1>
        <table className="data-table">
          <tr>
            <th>More secure</th>
            <th>Better for the environment</th>
            <th>Ease of use</th>
          </tr>
          <tr>
            <td>
              <i className="pi pi-lock"></i>
            </td>
            <td>
              <i className="pi pi-map-marker"></i>
            </td>
            <td>
              <i className="pi pi-compass"></i>
            </td>
          </tr>
          <tr>
            <td>
              Self-driving cars are more secure than normal cars, as they have
              360 degree vision and sensors which can detect collisions before
              they happen and can prevent accidents.
            </td>
            <td>
              Self-driving cars are more efficient as they can figure out the
              best routes to go somewehere to reduce energy consumption. Most of
              our cars are also electric and do not use petrol, which makes them
              more sustainable.
            </td>
            <td>
              While normal cars require a driver, self-driving cars (duh) can
              drive for you. For example, they can drive children to school
              safely, without having to worry about accidents or security.
            </td>
          </tr>
        </table>
      </div>
      <div className="page-4 page-wrapper" id="page-4"></div>
      <div className="page-wrapper page-5" id="page-5">
        <h1 className="page-header">Contact us</h1>
      </div>
    </>
  );
};

export default Home;
