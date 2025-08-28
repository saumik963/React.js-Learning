import React, { useState } from 'react'

export default function HooksUseState2() {
  const [count,setCount]=useState(0)

 const increaseCount=()=>{
    setCount(count+1)
  }
   const multipleIncreaseCount=()=>{
    setCount(count => count+1) // using previous state. Save previous data then update it
    setCount(count => count+1)
    setCount(count => count+1)
   }

   const parentClick=(event)=>{
    console.log("Parent Event: ",event)
   }
   const childClick=(event)=>{
    event.stopPropagation();  // prevent event bubbling or stop calling parent event when child event calls
    console.log("Child Event: ",event)
   }

  return (
    <div className='parent' onClick={parentClick}>
      <h1>Use of Hooks</h1>
       <h2>Count : {count}</h2>
       <button onClick={increaseCount}>Increase</button>
       <button onClick={multipleIncreaseCount}>Multiple Increase</button>
       <button onClick={childClick}>Event Bubbling</button>
    </div>
  )
}
