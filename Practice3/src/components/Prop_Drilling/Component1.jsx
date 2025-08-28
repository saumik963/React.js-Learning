import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UserContext'

export default function Component1() {
    const [user,setUser] = useState({id:101,name:"John Rambo"})
    const [text,setText] = useState("Hello universe this is iron man.")
  return (
    <UserContext.Provider value={{user,text}}>
        <Component2 />
    </UserContext.Provider>
  )
}


// Component1 -> Component2 -> Component3 -> Component4