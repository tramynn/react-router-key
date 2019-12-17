import React, { Component } from "react";
import { Link } from "react-router-dom";

class GuestLanding extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Devstagram</h1>
          <ul>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/home"
            >
              <li>Home</li>
            </Link>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/profile"
            >
              <li>My Profile</li>
            </Link>
          </ul>
        </nav>
        <header>
          <h1>Guest Landing</h1>
        </header>
      </div>
    );
  }
}

export default GuestLanding;
