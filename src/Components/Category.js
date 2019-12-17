import React, { Component } from "react";

class Category extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <h1>Category: {this.props.match.params.id}</h1>
        </header>
      </div>
    );
  }
}

export default Category;
