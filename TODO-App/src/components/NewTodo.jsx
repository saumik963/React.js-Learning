import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import style from "./newtodo.module.css";
import * as Yup from "yup"


const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  desc: Yup.string().required('Description is required'),
});

export default function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const [errors, setErrors] = useState({});




  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form data using Yup
    try {
      await validationSchema.validate(todo, { abortEarly: false }); // abortEarly: false will return all errors
      
      // If validation is successful, proceed
      props.onAddTodo(todo);
      setTodo({ title: "", desc: "" }); // Reset form
      
    } catch (err) {
      // If validation fails, handle errors
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#1e1e2e",
        color: "#f8f8f2",
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
      className={style.formContainer}
    >
      <Typography variant="h5" className={style.title}>
        Add New Todo
      </Typography>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          name="title"
          value={todo.title}
          onChange={handleChange}
          InputProps={{ className: style.inputText }}
          InputLabelProps={{ className: style.labelText }}
          className={style.input}
        />
        {errors.title && <div className={style.errorMessageContainer}>{errors.title}</div>}
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          name="desc"
          value={todo.desc}
          onChange={handleChange}
          InputProps={{ className: style.inputText }}
          InputLabelProps={{ className: style.labelText }}
          className={style.input}
        />
        

        {errors.desc && errors.desc !== "" && (
  <div className={style.errorMessageContainer}>{errors.desc}</div>
)}

         
        <Button type="submit" variant="contained" className={style.button}>
          Add Todo
        </Button>
      </form>
    </Paper>
  );
}
