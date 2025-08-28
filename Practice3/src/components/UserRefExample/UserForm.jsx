import React, { useRef } from "react";

// REF is uncontrolled component - Here we don't directly access DOM to controll.

export default function FUserForm() {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current;
    passwordRef.current.style.color = "red";
    userNameRef.current.className="Form"
    console.log(userName, "  ", password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="userName">UserName : </label>
        <input type="text" id="userName" ref={userNameRef} />
      </div>
      <div className="form-field">
        <label htmlFor="password">password : </label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
