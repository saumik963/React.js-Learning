import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { ToastContainer, toast } from 'react-toastify';

export default function DataFetching() {
  const {data,isLoading,error} = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p>Data is Loading...</p>;
  const errorMessage = <p>{error}</p>;

  const todosElement =
  data &&
  data.map((todo) => {
      return (
        <p style={{ padding: "1rem" }} key={todo.id}>
          {todo.title}
        </p>
      );
    });

  return (
    <div>
      <h1>Custome Hooks</h1>
      <button onClick={()=>{toast("Hello universe!")}}>Show popups</button>
      <ToastContainer />
      {isLoading && loadingMessage}{" "}
      {/* loading message before data load from api call */}
      {error && errorMessage} {/* showing error message */}
      {todosElement}
    </div>
  );
}
