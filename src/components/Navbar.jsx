import React, { useState } from 'react';
import { FaPhoneAlt, FaUserCircle, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { FaHome, FaSearch, FaGift, FaChartLine, FaStar, FaImages } from 'react-icons/fa';
import '../assets/CSS/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <div className="nav-buttons">
                <button><FaPhoneAlt /> Talk to Expert</button>
                <button><FaUserCircle /> User</button>
                <button><FaBell /></button>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}><FaBars /></button>

            <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu}><FaTimes /></button>
                <div className='Navbar_menu'>
                    <ul>
                        <li><FaHome /> Home</li>
                        <li><FaSearch /> Explore</li>
                        <li><FaGift /> Featured</li>
                        <li><FaChartLine /> Trending</li>
                        <li><FaStar /> New Arrivals</li>
                        <li><FaImages /> Exhibitions</li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
