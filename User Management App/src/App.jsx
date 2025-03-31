import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UsersProvider from "./components/Context/UserContext";

function App() {
 
  return (
    <UsersProvider>
      <NewUser />
      <Users />
    </UsersProvider>
  );
}

export default App;




// 1. Create context
// 2. Provide the context
// 3. use the context