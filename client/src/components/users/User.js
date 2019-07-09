import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
  border: 1px solid #e0e0e0;
  margin-top: 1rem;
  padding: 0.5rem;
  position: relative;
  -webkit-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);

  h3 {
    margin: 0px;
    padding: 0px;
  }

  span {
    cursor: pointer;
  }
  span:hover {
    text-decoration: underline;
  }
`;

const Delete = styled.span`
  color: red;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

const Edit = styled.span`
  color: green;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;

const User = ({ user, deleteUser, getUserById }) => {
  return (
    <StyledUser>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <Delete onClick={() => deleteUser(user.id)}>delete</Delete>
      &nbsp;
      <Edit onClick={() => getUserById(user.id)}>edit</Edit>
    </StyledUser>
  );
};

export default User;
