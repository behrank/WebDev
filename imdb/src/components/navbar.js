import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
  state = {
    İsOpen: false //büyük İ kullanma eğer sen koyduysan
  };
  render() {
    return (
        <nav className="navbar sticky-top navbar-expand-sm bg-light ">
            <a class="navbar-brand" href="#">
            <img src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
          </a>
          <ul className = "navbar-nav nav justify-content-end">
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
    );
  }
}
 
export default NavBar;
