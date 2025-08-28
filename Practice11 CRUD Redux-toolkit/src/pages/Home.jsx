import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"; // Import the home page styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Next Favorite Read</h1>
          <p>Explore a vast collection of books from new and established authors. Read, rate, and share your thoughts with our community.</p>
          <div className="hero-buttons">
            <Link to="/show-books" className="btn primary-btn">Explore Books</Link>
            <Link to="/add-book" className="btn secondary-btn">Publish Your Book</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Our Platform</h2>
        <p>
          We are dedicated to connecting readers with authors. Our platform provides a seamless experience for finding new books and a powerful tool for writers to publish and promote their work.
          Whether you are a voracious reader or a budding writer, our community is the perfect place to grow.
        </p>
      </section>

      {/* Featured Section (example, can be made dynamic) */}
      <section className="featured-section">
        <h2>Featured Books</h2>
        <div className="featured-grid">
          <div className="book-card">
            <img src="https://via.placeholder.com/150" alt="Book Cover 1" />
            <h3>The Midnight Library</h3>
            <p>By Matt Haig</p>
          </div>
          <div className="book-card">
            <img src="https://via.placeholder.com/150" alt="Book Cover 2" />
            <h3>Project Hail Mary</h3>
            <p>By Andy Weir</p>
          </div>
          <div className="book-card">
            <img src="https://via.placeholder.com/150" alt="Book Cover 3" />
            <h3>Dune</h3>
            <p>By Frank Herbert</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Publish Your Book?</h2>
        <p>Join our community of authors and get your story into the hands of readers worldwide.</p>
        <Link to="/add-book" className="btn primary-btn large-btn">Start Publishing</Link>
      </section>
    </div>
  );
};

export default Home;