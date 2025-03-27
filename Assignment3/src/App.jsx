import { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  // Initializing the state from localStorage with error handling
  const [todos, setTodos] = useState(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  });

  // Saving todos to localStorage whenever it changes
  useEffect(() => {
    try {
      // Whenever the `todos` state changes, update localStorage
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
    }
  }, [todos]);  // This effect runs every time `todos` changes

  const handleAddTodo = (todo) => {
    // Adding a new todo to the list
    setTodos((oldTodos) => {
      return [...oldTodos, { id: uuidv4(), todo }];
    });
  };


  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.todo.id !== id);
      return filteredTodos;
    });
  };

  const handleComplete=(id)=>{
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.todo.id === id) {
          return { ...todo, todo: { ...todo.todo, done: !todo.todo.done } }; // toggle the complete button
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  return (
    <>
    <div className='mainSection'>
      <NewTodo OnAddTodo={handleAddTodo} />
      <Todos todos={todos} onDelete={handleDelete} onDone={handleComplete}/>
    </div>
      <Footer />
    </>
  );
}

export default App;
