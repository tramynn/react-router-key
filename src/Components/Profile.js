import React, { Component } from "react";
import users from "../users";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.setState({ users: users });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Profile</h1>
        </header>
      </div>
    );
  }
}

export default Profile;
