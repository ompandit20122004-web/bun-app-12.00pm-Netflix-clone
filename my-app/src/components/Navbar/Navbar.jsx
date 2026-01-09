import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import caret_icon from "../../assets/caret_icon.svg";
import profile_img from "../../assets/profile_img.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">

      {/* LEFT SIDE */}
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-right">
      <img src={search_icon} alt="search" className="icon" onClick={()=>setshowSearch(!showSearch)} />

          {showSearch && (
  <input
    type="text"
    placeholder="Titles"
    className="search-input"
  />
)}

     
 
        <span className="children">Children</span>
        <img src={bell_icon} alt="bell" className="icon" />

        <div className="navbar-profile">
          <img src={profile_img} alt="profile" className="profile" />
          <img src={caret_icon} alt="caret" className="caret" />
          <div className="dropdown">
            <p onClick={logout}>Sign out of Netflix</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
