import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { ErrorPage } from "./Pages/Error";
import { Navbar } from "./Components/Navbar/Navbar";
import { Blogs } from "./Pages/Blogs";
import { Blog } from "./Pages/Blog";
import { User } from "./Pages/User";
import { useState } from "react";
import { Protected } from "./Pages/Protected";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter>
      <Navbar />

      <br />
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/" element={<User />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/blogs" element={<Protected isLoggedIn={isLoggedIn}>
          <Blogs />
        </Protected>} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
