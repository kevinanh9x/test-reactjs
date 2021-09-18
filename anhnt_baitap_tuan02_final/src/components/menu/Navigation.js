import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        {/* <h3 className="logo">Logo</h3> */}
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <ul className="nav-link">
          <li className="nav-child">
            <Link to="/" className="nav-child__pour"></Link>
          </li>
          <li className="nav-child">
            <Link to="/html" className="nav-child__pour">
              HTML
            </Link>
          </li>
          <li className="nav-child">
            <Link to="/css" className="nav-child__pour">
              CSS
            </Link>
          </li>
          <li className="nav-child">
            <Link to="/javascript" className="nav-child__pour">
              JavaScript
            </Link>
          </li>
          <li className="nav-child">
            <Link to="/react" className="nav-child__pour">
              React
            </Link>
          </li>
          <li className="nav-child">
            <Link to="/nodejs" className="nav-child__pour">
              NodeJs
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
