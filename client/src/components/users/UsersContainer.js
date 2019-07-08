import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import UserForm from "./UserForm";

const serverUrl = "http://localhost:8080";

class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      currentUser: null
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

  getUserById = id => {
    axios
      .get(`${serverUrl}/api/users/${id}`)
      .then(res => {
        this.setState({
          ...this.state,
          currentUser: res.data.data,
          editing: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateUser = user => {
    const newUser = {
      name: user.name,
      bio: user.bio
    };
    const { id } = user;
    axios
      .put(`${serverUrl}/api/users/${id}`, newUser)
      .then(res => {
        this.getUsers();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => this.setState({ editing: false, currentUser: null }));
  };

  render() {
    const { users, currentUser, editing } = this.state;
    return (
      <React.Fragment>
        <UserForm
          addUser={this.addUser}
          updateUser={this.updateUser}
          currentUser={currentUser}
          users={users}
          editing={editing}
        />
        <UserList
          users={users}
          deleteUser={this.deleteUser}
          getUserById={this.getUserById}
        />
      </React.Fragment>
    );
  }
}

export default UsersContainer;
