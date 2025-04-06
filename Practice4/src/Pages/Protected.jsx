import React from 'react'
import { Navigate } from 'react-router-dom'

export const Protected = ({isLoggedIn,children}) => {
  if (!isLoggedIn) {
    // return <Navigate to="/" replace />
    return (
        <>
        <h1>LogIn to visit the Blogs Page</h1>
        </>
    )
  }
  return children;
}
