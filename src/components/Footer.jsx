import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <p className="logo">DotCars</p>
        <p className="email">
          <i className="pi pi-envelope"></i>
          support@dotcars.what
        </p>
        <p className="pho">
          <i className="pi pi-phone"></i>
          +1 92347 92346
        </p>
      </div>
      <ul className="list1 list">
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Reviews</li>
        <li className="list-item">FAQ</li>
        <li className="list-item">Our Mission</li>
        <li className="list-item">Models</li>
      </ul>
      <ul className="list2 list">
        <li className="list-item">The Master</li>
        <li className="list-item">The Skateboard</li>
        <li className="list-item">The Cartoonist</li>
        <li className="list-item">The Original</li>
        <li className="list-item">The Sport</li>
        <li className="list-item">The Unreal</li>
      </ul>
    </div>
  );
};

export default Footer;
