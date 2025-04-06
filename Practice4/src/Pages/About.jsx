import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {

    const navigate = useNavigate();
  return (
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ex, asperiores enim consequuntur sequi minus inventore culpa quos molestias? Error rerum quas quod consectetur blanditiis voluptatibus soluta nesciunt deserunt molestias?</p>

        <button onClick={()=>{
            navigate('/')
        }}>Go to Home</button>
    </div>
  )
}
