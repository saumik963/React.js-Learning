import React, { useState } from "react";

export default function NewTodo(props) {

    const [todo,setTodo]=useState("");

    const handleInput=(e)=>{
        setTodo( e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onTodo(todo)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo: </label>
        <input type="text" id="todo" name="todo" value={todo} onChange={handleInput} />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
