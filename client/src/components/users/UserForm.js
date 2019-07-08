import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: ""
    };
  }
  change = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    const { name, bio } = this.state;
    return (
      <form>
        <h2>Create User</h2>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.change}
            placeholder="Name"
          />
        </div>
        <div>
          <textarea
            name="bio"
            value={bio}
            onChange={this.change}
            placeholder="Bio"
          />
        </div>
        <div>
          <button type="submit">Create User</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
