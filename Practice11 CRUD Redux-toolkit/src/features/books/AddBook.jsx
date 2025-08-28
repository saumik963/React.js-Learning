import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";
import "./form-style.css";


const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch= useDispatch()
  const nagivate = useNavigate()

  const numberOfBooks= useSelector((state)=>state.booksReducer.books.length)


  const handleSubmit = (e) => {
    e.preventDefault();
    const book ={id: numberOfBooks+1, title,author};
    dispatch(addBook(book))
    nagivate("/show-books",{replace:true})
  }

  return (
    <div className="form-container">
      <h1>Add Book</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="title">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
