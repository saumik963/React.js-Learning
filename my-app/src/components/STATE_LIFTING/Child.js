import React from 'react'

export default function Child(props) {
    const data="I am from child"
    props.onChildData(data)
  return (
    <div>
        <p>Child Component: {props.data}</p>
    </div>
  )
}
