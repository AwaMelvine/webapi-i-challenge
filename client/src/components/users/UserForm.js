import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  input,
  textarea,
  button {
    width: 100%;
    margin-bottom: 0.8rem;
    padding: 12px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    font-size: 1.2rem;
    font-weight: lighter;
  }

  button {
    background: #0aa774;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;

    &:hover {
      background: #067551;
    }
  }
`;

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
      const user = {
        name: this.state.name,
        bio: this.state.bio
      };
      this.props.addUser(user);
      this.setState({ name: "", bio: "" });
    }
  };
  render() {
    const { name, bio } = this.state;
    const { editing } = this.props;
    return (
      <StyledForm method="post" onSubmit={this.submit}>
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
      </StyledForm>
    );
  }
}

export default UserForm;
