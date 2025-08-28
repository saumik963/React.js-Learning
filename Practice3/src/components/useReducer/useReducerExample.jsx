import React, { useReducer, useState } from "react";

const booksData = [
  { id: 1, name: "Pather Panchali" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];

const Model = ({ modelText }) => {
  return <p>{modelText}</p>;
}

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModelOpen: true,
      modelText: "Book Added",
    };
  }

  if (action.type === "REMOVE") {
    const filterBooks = [...state.books].filter(
      (book) => book.id !== action.payload
    );

    return {
      ...state,
      books: filterBooks,
      isModelOpen: true,
      modelText: "Book Removed",
    };
  }
  return state;
};

export default function UseReducer() {
  // Regular method
  // const [books,setBooks] =useState(booksData)
  // const [isModelOpen,setIsModelOpen] =useState("")
  // const [modelText,setModelText] =useState("")

  // Using useReducer
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModelOpen: false,
    modelText: "",
  });
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
    // setBooks((prevState)=>{
    //   const newBook= {id: new Date().getTime().toString(),name:bookName}
    //   return [...prevState, newBook]
    // })
    // setIsModelOpen(true)
    // setModelText("Book is Added.")
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h3>Books List</h3>

      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>
          
      {bookState.isModelOpen && <Model modelText={bookState.modelText} />}

      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
}
