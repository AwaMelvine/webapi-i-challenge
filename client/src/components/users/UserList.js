import React from "react";
import User from "./User";

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
};

export default UserList;
