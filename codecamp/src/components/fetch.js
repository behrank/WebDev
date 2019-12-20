import React, { Component } from "react";

class UserFetch extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      });
  }
  render() {
    return <div></div>;
  }
}

export default UserFetch;
