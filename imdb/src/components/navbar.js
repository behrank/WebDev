import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
  state = {
    İsOpen: false
  };
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-sm bg-light">
          <ul className = "navbar-nav">
          <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/genre">Genre</Link>
            </li>
            <li className="nav-item">
              <Link to="/serials">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default NavBar;
