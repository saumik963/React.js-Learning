import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';


const dummyTodos=["todo1","todo2"]

function Home() {

    const [todos,setTodos]=useState(dummyTodos)

    const handleNewTodo=(newTodo)=>{
        setTodos([...todos,newTodo])
        console.log("%cNew Todo Added: %s", "color:red; font-size:3rem;", newTodo);  // styling browser console text
    }

  return (
    <div><p>I AM Home</p>
    <NewTodo onTodo={handleNewTodo} />
    <Todos  todos={todos}  />
    </div>
  )
}

export default Home;