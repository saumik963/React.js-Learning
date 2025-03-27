import React, { useState } from "react";
import Todos from "./Todos";
import style from "./home.module.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [totos, setTodos] = useState([]);
  console.log(totos);

  const handleAddTodo = (todo) => {
    setTodos((oldTodos) => {
      return [...oldTodos, { id: uuidv4(), todo }];
    });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div className={style.container}>
      <h1 className={style.heading}>TODO APP</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={totos} onDelete={handleDelete} />
    </div>
  );
}
export default Home;
