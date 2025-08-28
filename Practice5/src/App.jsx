import { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Users } from "./Components/UserData/Users";
import Message from "./Components/Message";


function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [toggle,setToggle] =useState(false)
  const [loading, setLoading] = useState(true); // <== Add loading state


  


  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setUsers(res.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching users:", error);
    } 
  };
  console.log("app rendering")

  const  onHandleIncrement=useCallback(()=>{
    setCount(count+1)
  },[count])

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hello</h1>

      {/* {loading ? (
        <h1>Loading data...</h1>
      ) : (
        <Users users={users}/>
      )} */}

      <div>
        {toggle ? "ON":"OFF"}
        <button onClick={()=>{
          setToggle(!toggle)
        }}>Toggle</button>
      </div>

      <h1>Count: {count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button>

      <Message count={count} onHandleIncrement={onHandleIncrement} />
    </>
  );
}

export default App;
