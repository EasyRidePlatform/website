import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            
<nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">EasyRide</label>
      <ul>
        <li><a href="#top">Home</a></li>
        <li><a href="#tracking">Tracking</a></li>
        <li><a href="#smartsos">Smart SOS</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <button className="nav_button"><a href="https://chat.whatsapp.com/FGdJXs2frNeGq1eR0rwmdH">Join Community</a></button>
      </ul>
    </nav>
    <div className="fake">h</div>
        </>
    );
};

export default Navbar;
