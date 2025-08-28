import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Signup() {
  // const [user,setUser]=useState({name:"",email:"",pass:""})

  // const {name,email,pass}=user

  // const handleNameChange=(e)=>{
  //     setUser({name:e.target.value,email:"",pass:""})
  // }
  // const handleEmailChange=(e)=>{
  //     setUser({email:e.target.value,name:"",pass:""})

  // }
  // const handlePassChange=(e)=>{
  //     setUser({name:"",email:"",pass:e.target.value})
  // }

  // const handleSubmit=(e)=>{
  //     e.preventDefault();
  //     const newUser={
  //         name,
  //         email,
  //         pass,
  //     };
  //     console.log(newUser)
  // }

  // create and handle form using formik

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup.string().min(2, "Atleast 2 character!").required(),
      email: yup.string().email().required(),
      password: yup.string().min(6, "Atleast 6 character!").required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" }); //reset the form after submittig
    },
  });

  // All errors

  const renderNameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );
  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password &&
    formik.errors.password && (
      <span style={{ color: "red" }}>{formik.errors.password}</span>
    );


 // Render the form
    const renderForm = <form onSubmit={formik.handleSubmit}>
    <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {renderNameError}
    </div>
    <div>
      <label htmlFor="email">E-mail: </label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {renderEmailError}
    </div>
    <div>
      <label htmlFor="pass">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {renderPasswordError}
    </div>
    <button type="submit">SignUp</button>
  </form>


  return (
    <div>
      <h1>User Signup</h1>
      {renderForm}
    </div>
  );
}
