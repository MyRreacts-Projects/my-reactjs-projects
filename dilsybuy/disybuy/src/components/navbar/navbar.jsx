import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        DIL<span className="logospan">SE</span>BUY
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* LINKS */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setOpen(false)}>All Products</Link>
        </li>
        <li>
          <Link to="/card-items" onClick={() => setOpen(false)}>Card Items</Link>
        </li>

        {/* SIGN UP BUTTON */}
        <li>
          <Link
            to="/sign-up"
            className="signup-btn"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;