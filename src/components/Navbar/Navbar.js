import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieList</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
