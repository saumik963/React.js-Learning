import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Contact = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ex, asperiores enim conseqitiis voluptatibus soluta nesciunt deserunt molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab placeat nam assumenda enim sunt velit, molestias illo et tempora veritatis obcaecati pariatu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia neque natus sequi fugit sint culpa beatae, hic reprehenderit modi!r beatae in temporibus iusto quibusdam.itiis voluptatibus soluta nesciunt deserunt molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab placeat nam assumenda enim sunt velit, molestias illo et tempora veritatis obcaecati pariatu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia neque natus sequi fugit sint culpa beatae, hic reprehenderit modi!r beatae in temporibus iusto quibusdam.qui minus inventore culpa quos molestias? Error rerum quas quod consectetur blanditiis voluptatibus soluta nesciunt deserunt molestias?</p>
        <button onClick={()=>{
            navigate('/about')
        }}>Go to About</button>
    </div>
  )
}
