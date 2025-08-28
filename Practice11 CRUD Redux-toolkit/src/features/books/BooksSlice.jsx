// import { createSlice } from "@reduxjs/toolkit";

// const initialBooks = {
//   books: [
//     { id: 1, title: "Project Nabula", author: "Anisul Islam" },
//     { id: 2, title: "Fifty Colors", author: "Anisul Islam" },
//   ],
// };

// export const booksSlice = createSlice({
//   name: "books",
//   initialState: initialBooks,
//   reducers: {
//     showBooks: (state) => state,
//     addBook: (state, action) => {
//       state.books.push(action.payload);
//     },
//     updateBook: (state, action) => {
//       const { id, title, author } = action.payload;
//       const book = state.books.find((book) => book.id === id);
//       if (book) {
//         book.title = title;
//         book.author = author;
//       }
//     },
//     deleteBook: (state, action) => {
//       const id = action.payload;
//       state.books = state.books.filter((book) => book.id !== id);
//     },
//   },
// });

// export const { showBooks, addBook, deleteBook, updateBook } =
//   booksSlice.actions;

// export default booksSlice.reducer;



// ================


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts"; 
// using posts as fake "books"

/* ---------- Async Thunks (API calls) ---------- */

// Fetch all books
export const showBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10).map((post) => ({
    id: post.id,
    title: post.title,
    author: "Unknown Author",
  }));
});

// Add a new book
export const addBook = createAsyncThunk("books/addBook", async (newBook) => {
  const response = await axios.post(API_URL, newBook);
  return response.data;
});

// Update a book
export const updateBook = createAsyncThunk("books/updateBook", async (book) => {
  const response = await axios.put(`${API_URL}/${book.id}`, book);
  return response.data;
});

// Delete a book
export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

/* ---------- Slice ---------- */
export const BooksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* Fetch */
      .addCase(showBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(showBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(showBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* Add */
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })

      /* Update */
      .addCase(updateBook.fulfilled, (state, action) => {
        const { id, title, author } = action.payload;
        const book = state.books.find((b) => b.id === id);
        if (book) {
          book.title = title;
          book.author = author;
        }
      })

      /* Delete */
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((b) => b.id !== action.payload);
      });
  },
});

export default BooksSlice.reducer;
