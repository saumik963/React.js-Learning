import React, { useState } from 'react'
import User from './User'

export default function Users() {
  const [user, setUser] = useState({
    id: 10110,
    name: "Anisul"
  });
  
  return (
    <div>
        {/* Passing undefined allows defaultProps to apply */}
        <User user={user} />
    </div>
  )
}
