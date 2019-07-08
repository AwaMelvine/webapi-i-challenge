import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserForm from "./UserForm";

const serverUrl = "http://localhost:8080";

class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get(`${serverUrl}/api/users`)
      .then(res => {
        this.setState({ users: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addUser = user => {
    axios
      .post(`${serverUrl}/api/users`, user)
      .then(res => {
        this.getUsers();
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteUser = id => {
    axios
      .delete(`${serverUrl}/api/users/${id}`)
      .then(res => {
        this.getUsers();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <UserForm addUser={this.addUser} />
        <UserList users={this.state.users} deleteUser={this.deleteUser} />
      </React.Fragment>
    );
  }
}

export default UsersContainer;
