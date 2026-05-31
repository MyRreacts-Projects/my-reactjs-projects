import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
        </li>
        <li>
          <NavLink to="/card-items" onClick={() => setOpen(false)}>Card Items</NavLink>
        </li>

        {/* SIGN UP BUTTON */}
        <li>
          <NavLink
            to="/sign-up"
            className="signup-btn"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


// import { NavLink } from "react-router-dom";

// <NavLink to="/">Home</NavLink>
// <NavLink to="/products">Products</NavLink>
// <NavLink to="/testimonial">Testimonial</NavLink>
// <NavLink to="/cards">Cards</NavLink>
// <NavLink to="/signup">Signup</NavLink>