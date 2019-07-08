import React from "react";

const User = ({ user, deleteUser }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <span onClick={() => deleteUser(user.id)}>delete</span>
    </div>
  );
};

export default User;
