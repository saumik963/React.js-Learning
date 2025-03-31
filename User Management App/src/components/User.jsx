import React from 'react'

import { useUserContext } from './Hooks/useUsersContext';

const User = ({user}) => {
  const {users,setUsers} = useUserContext()
  const {id,username} = user;

  const handleDelete = (id)=>{
    const filteredUsers = users.filter((user)=>user.id!==id);
    setUsers(filteredUsers)
  }

    return (
    <article className="user">
        <h2>{id}</h2>
        <p>{username}</p>
        <button onClick={()=>{
            handleDelete(id)
        }}>Delete</button>
    </article>
  )
}

export default User