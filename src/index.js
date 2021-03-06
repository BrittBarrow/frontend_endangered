import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faGift,
  faPencilAlt,
  faBookmark,
  faStar
} from "@fortawesome/free-solid-svg-icons";

//fas prefis is default
library.add(faGift, faPencilAlt, faBookmark, faStar);

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//BrowserRouter = everything wrapped in browser router has access to routes

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
