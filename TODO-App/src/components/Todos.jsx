// import React from "react";
// import Todo from "./Todo";
// import style from "./todos.module.css";

// export default function Todos(props) {
//   console.log(props);
//   return (
    
//     <section className={style.todos}>
//       {props.todos.map((todo) => (
//         <Todo
//           id={todo.id} // Ensure each Todo has a unique key
//           todo={todo.todo} // Pass the entire todo object
//           onDelete={props.onDelete} // Pass the onDelete function
//         />
//       ))}
//     </section>
//   );
// }


import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

export default function Todos(props) {
  return (
    <>
      {props.todos && props.todos.length > 0 ? ( // Check if there are todos
        <section className={style.todos}>
          {props.todos.map((todo) => (
            <Todo
              id={todo.id} // Ensure each Todo has a unique key
              todo={todo.todo} // Pass the entire todo object
              onDelete={props.onDelete} // Pass the onDelete function
            />
          ))}
        </section>
      ) : (
        <p>No todos available.</p> // Optional: Display a message when no todos exist
      )}
    </>
  );
}
