import React, { Component } from "react";
import axios from "axios";

const serverUrl = "http://localhost:8080";

class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get(`${serverUrl}/api/users`)
      .then(data => {})
      .catch(error => {});
  }
  render() {
    return <div />;
  }
}

export default UsersContainer;
