import React, { Component } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
        </header>
        <main>
          <ul>
            <Link to="/category/1">
              <li>Category: 1</li>
            </Link>
            <Link to="/category/2">
              <li>Category: 2</li>
            </Link>
          </ul>
        </main>
      </div>
    );
  }
}

export default Home;
