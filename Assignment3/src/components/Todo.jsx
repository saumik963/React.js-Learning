import React from 'react';
import style from "./todo.module.css"

const Todo = (props) => {
  const { id,title, desc, done } = props.todo.todo;


  const handleDlt = (id) => {
    props.onDelete(id);
    console.log(id)
  };
  const handleComplete = (id) => {
    props.onDone(id);
    console.log(id)
  };


  return (
    <article key={id} className={`${style.todo} ${done ? style.completedTodo : ''}`}>
      <h3 className="todo__title">{title}</h3>
      <p>{desc}</p>
      <div className={style.btns}>
      <button onClick={() => handleDlt(id)}>Delete</button>
      <button className={`${style.done} ${done ? style.completedBtn : ''}`} onClick={() => handleComplete(id)}>Done</button>
      </div>
    </article>
  );
};

export default Todo;