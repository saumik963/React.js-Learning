import React, { useState } from "react";

import { useUserContext } from "./Hooks/useUsersContext";

const NewUser = () => {
  const { users, setUsers } = useUserContext()

  const [username, setUsername] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUsername("");
  };
  return (
    <div>
      <h2>User Registration</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
