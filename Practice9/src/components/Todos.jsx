import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Services/Actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h2>Todos App</h2>
      {isLoading && (
        <img src="https://media.tenor.com/PfFDd3eNE_gAAAAm/loading-load.webp" />
      )}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id}>
                <h4>{todo.id}</h4>
                <h4>{todo.title}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
