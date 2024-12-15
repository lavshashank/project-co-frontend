import { useEffect } from "react";
import { FaHome, FaCarCrash } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate(); // Initialize navigate function

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".nav");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav">
      <h1 className="title">FCW System</h1>
      <div className="links-container">
        <button
          className="link-button"
          onClick={() => navigate("/")} // Navigate to Home
        >
          <FaHome className="icon" /> Home
        </button>

        <button
          className="link-button"
          onClick={() => navigate("/test-collision")} // Navigate to Test Collision
        >
          <FaCarCrash className="icon" /> Test Collision
        </button>
      </div>
    </nav>
  );
}

export default Header;
