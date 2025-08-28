import React from 'react'
import Child from './Child'
export default function Parent() {

    const data= "I am from parent"
    const handleChildData=(childData)=>{
        console.log("Parent Component: ",childData)
    }

  return (
    <div>
        <Child data={data} onChildData={handleChildData} />
    </div>
  )
}
