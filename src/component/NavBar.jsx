import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <b><NavLink className="navbar-brand text-danger" to="/">KIETMCA</NavLink></b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="#" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/" style={({ isActive }) => (isActive ? { color: "yellow", fontWeight: "bold" } : 
          { color: "red" })}>HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Card"style={({ isActive }) => (isActive ? { color: "yellow", fontWeight: "bold" } : 
          { color: "red" })}>CARD</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Counter"style={({ isActive }) => (isActive ? { color: "yellow", fontWeight: "bold" } : 
          { color: "red" })}>COUNTER</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/lang"style={({ isActive }) => (isActive ? { color: "yellow", fontWeight: "bold" } : 
          { color: "red" })}>LANGUAGES</NavLink>
          </li> 
          <li className="nav-item">
          <NavLink className="nav-link" to="/Student"style={({ isActive }) => (isActive ? { color: "yellow", fontWeight: "bold" } : 
          { color: "red" })}>Student</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/Product"style={({ isActive }) => (isActive ? { color: "yellow", fontWeight: "bold" } : 
          { color: "red" })}>Product</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/About"style={({ isActive }) => (isActive ? { color: "yellow", fontWeight: "bold" } : 
          { color: "red" })}>ABOUT US</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;