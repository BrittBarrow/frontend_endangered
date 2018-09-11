import React from "react";
import "../css/navBar.css";
// import { NavLink, Link } from "react-router-dom";

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
//
// class NavBar          extends React.Component {
//   render() {
//     let { handleFilter } = this.props;
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-" onClick={handleFilter}>
//                 Africa
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-" onClick={handleFilter}>
//                 Asia
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-" onClick={handleFilter}>
//                 Australia
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-" onClick={handleFilter}>
//                 Central America
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-" onClick={handleFilter}>
//                 South America
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
//
export default NavBar;
