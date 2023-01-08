import React from "react";
import "./Home.css";
import MyImage from "../images/dashboard1.webp";
function Home() {
  return (
    <>
      <div className="home">
        <div className="title">
          <div className="left-box">
            <h1>monitor your websites</h1>
            <h1>24/7 with us</h1>
            <h3>check if website is running automatically</h3>

            <a className="btn" href="/dashboard">
              Let's start
            </a>
          </div>
          <img src={MyImage} className="home__image" alt="dashhboard" />
        </div>
      </div>
    </>
  );
}

export default Home;
