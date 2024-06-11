import React from "react";
import { Link } from 'react-scroll';

function Header(){
    return <div>
        <header>
        <img src="/Logo.png" height={"150px"}/>
        <h1>DR. JYOTI HOMEOPATHY</h1>
        <Link to="aboutus" smooth={true} duration={50} className="firstA header-link">About us</Link>
                <Link to="reviews" smooth={true} duration={50} className="header-link">Reviews</Link>
                <Link to="appointment" smooth={true} duration={50} className="header-link">Book an Appointment</Link>
                <Link to="contactus" smooth={true} duration={50} className="header-link">Contact Us</Link>
        </header>
        <div>
        
        </div>
        
    </div>
}


export default Header;