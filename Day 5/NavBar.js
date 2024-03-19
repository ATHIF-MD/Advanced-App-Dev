import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">JOB4ALL</div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>Toggle Sidebar</button>
      <ul className={`navbar-links ${showSidebar ? 'show-sidebar' : ''}`}>
        <li><NavLink to="/register">Signup</NavLink></li>
        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/About">About us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/">LogOut</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
