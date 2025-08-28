import { useEffect, useState } from "react";
import "./App.css";
import Signup from "./Component/FORMIK_FORM/Signup";
import Toggle from "./Component/TOGGLE/Toggle";
import FAQS from "./Component/FAQ/faq_toggle";
import UseEffectExmple from "./Component/useEffect/useEffectExmple";
import DataFetch from "./Component/useEffect/DataFetch";
import DataFetching from "./Component/customHook/DataFetching";

function App() {
  const error = true;
  const [name,setName] = useState("")
  const [validInput,setValidInput] = useState(true)

  useEffect(()=>{
    if (name.length < 3) {
      setValidInput(false)
    }else{
      setValidInput(true)
    }
  },[name])

  const handleChange=(e)=>{
    setName(e.target.value)
  }
  return (
    <div className="app">
      {/* <Signup /> */}
      {/* <Toggle /> */}
      {/* <FAQS /> */}
      {/* <UseEffectExmple /> */}
      {/* <DataFetch /> */}
      {/* <DataFetching /> */}
     <input className={`${validInput ? "valid" : "invalid"}`} type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default App;
