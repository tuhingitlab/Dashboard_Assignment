import React from "react";
import "../NavBar/Nav.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="header">Hello Shahrukh</h1>
      <div className="search-container">
        <input type="text" placeholder="🔍Search..." />
        {/* <button type="submit">Search</button> */}
      </div>
    </div>
  );
};

export default Navbar;
