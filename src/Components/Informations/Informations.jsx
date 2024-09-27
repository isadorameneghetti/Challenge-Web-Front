import React from "react";
import './Informations.css';
import logo from '../../assets/Logo/logo.png';


const Informations = () => {
    return (
        <div className="up_navbar">
            <nav className="subjects">
                <a href="/" className="store">Store</a>
                <a href="" className="about">About</a>
                <a href="" className="calendar">Calendar</a>
            </nav>

            <a href="/"><img src={logo} className="up_logo" /></a>
        </div>
    )
}

export default Informations