import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; // Import your styles
import {Logo} from '../image/LOGO_UVFitnessHouse.jpg'; 

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="container">
      {/* Header Section */}
      <header id="header">
        <div className="logo">
          <img className="logo-img" id="header-img" src={Logo} alt="URKJ - Fitness House Logo" />
        </div>
        <nav id="nav-bar">
          <ul>
            <li><Link className="nav-link" to="#about">About Us</Link></li>
            <li><Link className="nav-link" to="#classes">Classes</Link></li>
            <li><Link className="nav-link" to="#trainers">Trainers</Link></li>
            <li><Link className="nav-link" to="#contact">Contact</Link></li>
          </ul>
        </nav>
        <button id="theme-toggle" className="btn" onClick={toggleTheme}>
          Dark Mode
        </button>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <div className="grid">
          <div className="column-60">
            <h1>Transform Your Body, Mind, and Spirit</h1>
            <p id="description">Join URKJ - Fitness Hoiuse and embark on a journey to a healthier and stronger you.</p>
            <button className="btn" onClick={() => window.location.href = '#contact'}>
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="div-about">
          <h2>About URKJ - Fitness Hoiuse</h2>
          <p>URKJ - Fitness Hoiuse offers a comprehensive fitness experience with state-of-the-art equipment, expert trainers, and a wide range of classes.</p>
          <p>Whether you're looking to lose weight, build muscle, or simply maintain a healthy lifestyle, our gym has something for everyone.</p>
        </div>
      </section>

      <div className="line"></div>

      {/* Classes Section */}
      <section id="classes">
        <h2>Our Classes</h2>
        <div className="contant">
          <div className="card">
            <div className="icon">
              <img src="images/yogaClass.jpeg" alt="Yoga Class" />
            </div>
            <div className="desc">
              <h3>Yoga</h3>
              <p>Enhance your flexibility and mindfulness with our yoga classes.</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src="images/Weightlifting.avif" alt="Weightlifting Class" />
            </div>
            <div className="desc">
              <h3>Weightlifting</h3>
              <p>Build strength and muscle with our expert-led weightlifting classes.</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src="images/Cardio.jpg" alt="Cardio Class" />
            </div>
            <div className="desc">
              <h3>Cardio</h3>
              <p>Boost your heart health and stamina with high-energy cardio workouts.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="line"></div>

      {/* Trainers Section */}
      <section id="trainers">
        <h2>Meet Our Trainers</h2>
        <div className="contant">
          <div className="card">
            <div className="icon">
              <img src="images/Jhon Maliya.jpg" alt="Trainer 1" />
            </div>
            <div className="desc">
              <h3>Jhon Maliya</h3>
              <p>Specialist in Strength Training</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src="images/Krupa Rupani.jpg" alt="Trainer 2" />
            </div>
            <div className="desc">
              <h3>Krupa Rupani</h3>
              <p>Yoga and Mindfulness Coach</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <img src="" alt="Trainer 3" />
            </div>
            <div className="desc">
              <h3>Disha Vishu</h3>
              <p>Cardio and HIIT Expert</p>
            </div>
          </div>
        </div>
      </section>

      <div className="line"></div>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Us</h2>
        <form id="form" action="">
          <div className="form-group">
            <label id="name-label" htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label id="email-label" htmlFor="email">Email</label>
            <input name="email" className="form-control" id="email" type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <p>Message</p>
            <textarea id="message" className="input-textarea" name="message" placeholder="Enter your message here..." required></textarea>
          </div>
          <input id="submit" type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <div id="footer-info">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact</a></li>
            <div id="copyright">© 2024 URKJ - Fitness Hoiuse</div>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
