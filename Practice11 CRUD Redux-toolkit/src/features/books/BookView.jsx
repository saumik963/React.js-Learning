// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteBook } from './BooksSlice'
// import { Link } from 'react-router-dom'
// import "./book-view.css"

// const BookView = () => {
//   const books = useSelector((state)=>state.booksReducer.books)
//   console.log(books)
//   const dispatch = useDispatch()

//   const handleDeleteBook =(id)=>{
//     dispatch(deleteBook(id))
//   }
//   return (
//     <div className="book-view-container">
//       <h1>List of books</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Options</th>
//           </tr>

//         </thead>

//         <tbody>
//           {books && books.map((book)=>{
//             const {id,title,author}=book;
//             return <tr key={id}>
//               <td>{id}</td>
//               <td>{title}</td>
//               <td>{author}</td>
//               <td className="options-buttons">
//                 <Link to="/edit-book" state={{id,title,author}}>
//                 <button className="edit-btn">Edit</button>
//                 </Link>
//                 <button className="delete-btn" onClick={()=>handleDeleteBook(id)}>Delete</button>
//               </td>
//             </tr>
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default BookView



// ================


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, showBooks } from "./BooksSlice";
import { Link } from "react-router-dom";
import "./book-view.css";

const BookView = () => {
  const { books, loading, error } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  // Fetch books when component mounts
  useEffect(() => {
    dispatch(showBooks());
  }, [dispatch]);

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-view-container">
      <h1>List of Books</h1>

      {loading && <p>Loading books...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {books && books.length > 0 ? (
            books.map(({ id, title, author }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td className="options-buttons">
                  <Link to="/edit-book" state={{ id, title, author }}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteBook(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No books found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookView;
