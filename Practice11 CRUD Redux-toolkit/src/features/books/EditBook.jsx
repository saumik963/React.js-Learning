import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation();
    const dispatch= useDispatch()
    const nagivate = useNavigate()
    const [id,setId]= useState(location.state.id)
    const [title,setTitle]= useState(location.state.title)
    const [author,setAuthor]= useState(location.state.author)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateBook({id,title,author}))
        nagivate("/show-books",{replace:true})
    }
  return (
    <div className='form-container'>
        <h1>Edit Book</h1>

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
        <button type="submit">Update Book</button>
      </form>
    </div>
  )
}

export default EditBook