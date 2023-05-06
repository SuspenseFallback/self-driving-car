import React, { useEffect, useState } from "react";
import "../styles/nav.css";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const wrapper = document.querySelector(".outlet-wrapper");

    wrapper.addEventListener("scroll", () => {
      console.log(wrapper.scrollTop);
      if (wrapper.scrollTop > 100) {
        document.querySelector(".nav").classList.add("opaque");
      } else {
        document.querySelector(".nav").classList.remove("opaque");
      }
    });
  }, []);

  return (
    <>
      <div className="nav">
        <p className="logo">DotCars</p>
        <i
          className="pi pi-bars menu-icon"
          onClick={() => setShowSidebar(!showSidebar)}
        ></i>
      </div>
      <div className={"sidebar " + (showSidebar ? "show" : "hidden")}>
        <span className="close" onClick={() => setShowSidebar(!showSidebar)}>
          &#10005;
        </span>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">FAQ</li>
          <li className="nav-item">Reviews</li>
          <li className="nav-item">Our Mission</li>
          <li className="nav-item">Models</li>
          <li className="nav-item">The Skateboard</li>
          <li className="nav-item">The Cartoonist</li>
          <li className="nav-item">The Master</li>
          <li className="nav-item">The Original</li>
          <li className="nav-item">The Sport</li>
          <li className="nav-item">The Unreal</li>
        </ul>
      </div>
      <div className={"outlet-wrapper " + (showSidebar ? "overlay" : "")}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
