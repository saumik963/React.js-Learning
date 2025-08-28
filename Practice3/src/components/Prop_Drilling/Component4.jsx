import React,{useContext} from 'react'
import { UserContext } from './UserContext'
import style from "./style.module.css"

export default function Component4() {
    const {user,text} = useContext(UserContext)
  return (
    <div><p>User id: {user.id}</p>
    <p>User name: {user.name}</p>
    <h1 className={style.head}>{text}</h1>
    <h1 className={style.hd}>{text}</h1>
    </div>
  )
}
