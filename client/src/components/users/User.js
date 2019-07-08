import React from "react";

const User = ({ user, deleteUser, getUserById }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <span onClick={() => deleteUser(user.id)}>delete</span>
      &nbsp;
      <span onClick={() => getUserById(user.id)}>edit</span>
    </div>
  );
};

export default User;
