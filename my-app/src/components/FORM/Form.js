import React, { useState } from 'react'
import style from './form.module.css'

export default function Form() {

    // const [name,setName] = useState("")
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")


    //useState using Object

    const [user,setUser]=useState({name:"",email:"",password:""})
    const {name,email,password}=user

    // const handleNameChange=(e)=>{
    //     // setName(e.target.value)
    //     setUser({name:e.target.value,email,password})
    // }
    // const handleEmailChange=(e)=>{
    //     // setEmail(e.target.value)
    //     setUser({name,email:e.target.value,password})

    // }
    // const handlepassChange=(e)=>{
    //     // setPassword(e.target.value)
    //     setUser({name,email,password:e.target.value})

    // }
    const handleSubmit=(e)=>{
        console.log("form Submited")
        console.log(user)
        e.preventDefault()
    }

    // insted of using multiple handeler to handel those fields event here use one handeler to  handle those changes
    const handleChange=(e)=>{
         const fieldName= e.target.name

        //  if (fieldName==="name") {
        // setUser({name:e.target.value,email,password})
        //  }
        //  if (fieldName==="email") {
        // setUser({name,email:e.target.value,password})

        //  }
        //  if (fieldName==="password") {
        //     setUser({name,email,password:e.target.value})
        //  }

        // do this using sprade operator in one line

        setUser({...user,fieldName:e.target.value})
    }
  return (
    <div>
        <h1>Registration Form</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className={style.formGroup}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id='name' value={name} onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor='Email'>Email:</label>
            <input type='email' name='email' id='email' value={email} onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
            <label htmlFor='Password'>Password:</label>
            <input type='password' name='password' id='password' value={password}
            onChange={handleChange} required></input>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}
