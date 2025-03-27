import React from 'react';
import Todo from './Todo';
import style from './todos.module.css'

const Todos = (props) => {
  const { todos } = props;
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
     
        <Todo key={todo.id} todo={todo} onDelete={props.onDelete} onDone={props.onDone}/>
      ))}
    </section>
  );
};

export default Todos;