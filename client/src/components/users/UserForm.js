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
  submit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({ name: "", bio: "" });
  };
  render() {
    const { name, bio } = this.state;
    return (
      <form method="post" onSubmit={this.submit}>
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
