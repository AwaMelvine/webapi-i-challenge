import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
