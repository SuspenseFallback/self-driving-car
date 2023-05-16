import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="page-wrapper about-page-1">
      <h1 className="page-header">About</h1>
      <div className="content">
        <p className="text-1">
          DotCars is a company that helps provide the world with self-driving
          cars. We make good-looking, affordable cars equipped with the best
          self-driving technology in the market to ensure a seamless ride
          experience for everyone.
        </p>
        <p className="text-2">
          We believe in a good customer experience. Which is why we have created
          six different models, named 'The Master', 'The Skateboard', 'The
          Cartoonist', 'The Original', 'The Sport', and 'The Unreal'. Each is
          meant for different purposes and appeals to different people. We also
          wish to make these cars affordable for all.
        </p>
        <p className="text-3">
          Apart from 'The Original', all of our cars are electric because we
          wish to help promote a green environment by cutting carbon emissions
          and switching to electric vehicles instead. However, we include a
          petrol-powered car just if people want one.
        </p>
        <p className="for-it">
          For Mr. MacSweeney / any other person in the DCIS ICT department:{" "}
          <br />
          <br />
          This website is completely responsive :)! You can use it anywhere - on
          your phone, your tablet, or your desktop.
        </p>
        <p className="creators">
          Programmed by: Krithin Jay Pakshootra <br />
          Design: Tomoaki Matsuo <br />
          Content: Aydan Kumble
        </p>
        <p className="note">
          <span>Note: </span>This is an example website. DotCars is not an
          actual company. In no way does this website intend to copy, steal or
          modify another website. This is not for commercial use. Please contact
          us for any inquiries or complaints regarding this website.
        </p>
      </div>
    </div>
  );
};

export default About;
