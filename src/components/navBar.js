import React from "react";
import "../css/navBar.css";

class NavBar extends React.Component {
  render() {
    let { handleFilter } = this.props;

    return (
      <nav class="navbar navbar-light">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" onClick={handleFilter}>
              Africa
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleFilter}>
              Asia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleFilter}>
              Australia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " onClick={handleFilter}>
              Central America
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " onClick={handleFilter}>
              South America
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
