import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">Teams</a>
                <a href="/">News</a>
                <a href="/">Statements</a>
                <a href="/">Contact</a>
            </nav>

            <a href="/" className="logo">Formula E</a>

            <button className="btn-login">Login</button>
        </header>
    )
}

export default Navbar