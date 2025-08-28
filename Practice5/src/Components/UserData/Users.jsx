import React from 'react'

export const Users = ({users}) => {
  return (
    <div>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <article>
                <h3>Username: {user.name} | Email: {user.email}</h3>
              </article>
            </li>
          ))}
        </ul>
    </div>
  )
}
