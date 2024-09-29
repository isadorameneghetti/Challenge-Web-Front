import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">

            <nav className="navbar">
                <a href="/home">Home</a>
                <a href="/">Teams</a>
                <a href="/">News</a>
                <a href="/streaming">Streaming</a>
                <a href="/">Statements</a>
                <a href="/contact">Contact</a>
            </nav>

            <a href="/" className="logo">Formula E</a>

            <button className="btn-login">Login</button>
        </header>
    )
}

export default Navbar