import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="logo">ApnaShop</div>
      {/* <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      /> */}
      <ul>
        <li><Link to="/"><button><h3>Home</h3></button></Link></li>
        <li><Link to="/cart"><button><h3>Cart</h3></button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
