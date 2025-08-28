import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "Call Tony Stark",
    desc: "This is descrption 1",
  },
  {
    id: uuidv4(),

    title: "Call Peeter",
    desc: "This is descrption 2",
  },
  {
    id: uuidv4(),
    title: "Call Bruce Banner",
    desc: "This is descrption 3",
  },
  {
    id: uuidv4(),

    title: "Call Scarlet Wicth",
    desc: "This is descrption 4",
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        // console.log(uuidv4());
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
