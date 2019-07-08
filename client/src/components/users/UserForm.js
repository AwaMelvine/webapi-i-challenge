import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentUser ? props.currentUser.id : "",
      name: props.currentUser ? props.currentUser.name : "",
      bio: props.currentUser ? props.currentUser.bio : ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser } = nextProps;
    if (currentUser) {
      debugger;
      this.setState({
        id: currentUser.id,
        name: currentUser.name,
        bio: currentUser.bio
      });
    }
  }

  change = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  submit = e => {
    e.preventDefault();
    if (this.props.editing) {
      this.props.updateUser(this.state);
      this.setState({ name: "", bio: "", id: "" });
    } else {
      this.props.addUser(this.state);
      this.setState({ name: "", bio: "" });
    }
  };
  render() {
    const { name, bio } = this.state;
    const { editing } = this.props;
    return (
      <form method="post" onSubmit={this.submit}>
        {editing ? <h2>Update User</h2> : <h2>Create User</h2>}
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
          {editing ? (
            <button type="submit">Update User</button>
          ) : (
            <button type="submit">Create User</button>
          )}
        </div>
      </form>
    );
  }
}

export default UserForm;
