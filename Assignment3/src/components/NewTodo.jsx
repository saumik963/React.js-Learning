import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import style from './newtodo.module.css'

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "", done:false });

  // for handling todo state changes
  const handleChange = (e) => {
    const {name,value}=e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  // submit the form and send newTodo in App.js
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: e.target.title.value,
      desc: e.target.desc.value,
      done:false,
    };

    props.OnAddTodo(newTodo)

    {<Todos todos={NewTodo} />}

    // for reset todo state
    setTodo({
      title: '',
      desc: ''
    });
  };

  return (
    <div className={style.formContainer}>
      <h1 className="title">Add to-do. Make Your Work Stand Out</h1>
      <div className={style.card}>
      <form action="" onSubmit={handleSubmit} className={style.glassForm}>
        <div className={style.fieldGroup}>
          <label htmlFor="title" >Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={todo.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.fieldGroup}>
          <label htmlFor="desc">Description: </label>
          <textarea
            name="desc"
            id="desc"
            value={todo.desc}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="field-group">
          <button className="btn" type="submit">ADD</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default NewTodo;