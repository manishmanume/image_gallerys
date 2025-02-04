import React from 'react';
import { FaHome, FaSearch, FaGift, FaChartLine, FaStar, FaImages } from 'react-icons/fa';
import '../assets/CSS/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><FaHome /> Home</li>
        <li><FaSearch /> Explore</li>
        <li><FaGift /> Featured</li>
        <li><FaChartLine /> Trending</li>
        <li><FaStar /> New Arrivals</li>
        <li><FaImages /> Exhibitions</li>
      </ul>
    </div>
  );
};

export default Sidebar;
