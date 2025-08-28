import React from 'react'
import { useState, useEffect } from 'react'

export default function UseEffectExmple() {
    const [count, setCount] = useState(0)
    const [isLoading, setIsloading] = useState(false)
    // const handleClick=()=>{
    //     setCount((count)=>count+1);
    // }

    useEffect(()=>{
      console.log("useEffect")
    },[count])

    return (
    <div>
      {console.log("rendering")}
        <h1>Count : {count}</h1>
        <button onClick={()=>{setCount((count)=>count+1)}}>+</button>
        <button onClick={()=>{setIsloading(!isLoading)}}>isLoading</button>
    </div>
  )
}
