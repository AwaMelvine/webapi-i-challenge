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
      .then(res => {
        this.setState({ users: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <UserList users={this.state.users}>;
  }
}

export default UsersContainer;
