import { useEffect } from 'react';
import { FaHome, FaCarCrash } from 'react-icons/fa'; // Using FaCar as a logo icon
import '../styles/Header.css';

function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.nav');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav">
      <h1 className="title">FCW System</h1>
      <div className="links-container">
        <a href="/" className="link">
          <FaHome className="icon" /> Home
        </a>
        <a href="/test-collision" className="link">
          <FaCarCrash className="icon" /> Test Collision
        </a>
      </div>
    </nav>
  );
}

export default Header;