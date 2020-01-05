import React, { Component } from "react";
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
            <Link to="/category/React">
              <li>Category: React</li>
            </Link>
            <Link to="/category/Node">
              <li>Category: Node</li>
            </Link>
          </ul>
        </main>
      </div>
    );
  }
}

export default Home;
