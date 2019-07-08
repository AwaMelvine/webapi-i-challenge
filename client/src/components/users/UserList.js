import React from "react";
import User from "./User";

const UserList = ({ users, deleteUser, getUserById }) => {
  return (
    <div>
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          getUserById={getUserById}
        />
      ))}
    </div>
  );
};

export default UserList;
