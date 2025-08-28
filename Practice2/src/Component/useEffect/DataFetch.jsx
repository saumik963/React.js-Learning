import React, { useEffect, useState } from "react";

const loadingMessage = <p>Data is Loading...</p>;

export default function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("fetching data not successful!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => {
      return (
        <p style={{ padding: "1rem" }} key={todo.id}>
          {todo.title}
        </p>
      );
    });

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && loadingMessage} {/* loading message before data load from api call */}
      {error && <p>{error}</p>}  {/* showing error message */}
      {todosElement}
    </div>
  );
}
