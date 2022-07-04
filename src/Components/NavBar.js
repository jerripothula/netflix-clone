import React, { useState, useEffect } from "react";
import "../CSS/Nav.css";

function NavBar() {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="./Images/Logonetflix.png"
        className="nav_logoNetflix"
        alt="Netflix logo"
      />

      <div className="nav_menu">
        <h1 className="nav-menus"> Home </h1>
        <h1 className="nav-menus"> TV Shows </h1>
        <h1 className="nav-menus"> Movies </h1>
        <h1 className="nav-menus"> New & popular </h1>
        <h1 className="nav-menus"> My List </h1>
      </div>

      <img
        src="./Images/Netflix-avatar.png"
        className="nav_logoavatar"
        alt="Netflix logo"
      />
    </div>
  );
}

export default NavBar;
