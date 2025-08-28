import React from 'react';
import { Link } from 'react-router-dom';
import "./about-us.css"; // Import the style file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-header">
        <h1>Our Story</h1>
        <p>Connecting authors and readers one book at a time.</p>
      </div>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At MyBrand, we believe in the power of stories. Our mission is to
            create a vibrant, supportive community for both authors and readers.
            We are dedicated to providing an accessible platform where new and
            established writers can share their work, and where passionate
            readers can discover their next great escape. We strive to empower
            creativity and foster a love for literature.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Community</h3>
            <p>
              We foster a collaborative environment where readers can connect with
              authors and share their insights, creating a lively exchange of ideas.
            </p>
          </div>
          <div className="value-card">
            <h3>Accessibility</h3>
            <p>
              We are committed to making a wide variety of books available to everyone,
              breaking down barriers to reading and publishing.
            </p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              We are dedicated to maintaining a high standard of content, ensuring that
              every book you discover on our platform is a worthwhile read.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join Our Community Today</h2>
        <p>
          Whether you're looking for your next book or ready to share your own,
          we have a place for you.
        </p>
        <Link to="/add-book" className="btn primary-btn large-btn">Start Publishing</Link>
      </section>
    </div>
  );
};

export default AboutUs;