import { createContext, useState } from "react";
export const UserContext = createContext({});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, username: "Anisul Islam" },
    { id: 2, username: "Alex" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsersProvider;




// children in the UsersProvider is any content or component that is nested inside <UsersProvider>.