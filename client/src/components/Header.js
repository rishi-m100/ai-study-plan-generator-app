import React from "react";
import "../style/header.css";


const Header = () => {
  return (
    <header>
      {/* <h1>{title}</h1> */}
      <nav>
        <img className="logo" src="assets/logo3.png" />
        <a href="#"><h1>Home</h1></a>
        <a href="#"><h1>Upload</h1></a>
        {/* <h1>Practice</h1> */}
        <a href="#"><h1>Study plan</h1></a>
      </nav>
{/* 
      <div className="image-container">
        <img id="header-img" src={"../assets/learning.jpg"} />
        <div className="overlay"></div>
      </div> */}
    </header>
  );
};

export default Header;
