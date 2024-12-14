import React from "react";
import { useNavigate } from "react-router-dom";

// Import video and image assets
import TestedVideo1 from "../assets/tested-video.mp4";
import TestedPhoto1 from "../assets/tested-photo1.png";

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    margin: "20px auto",
    width: "90%",
    color: "#ffffff",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
  },
  sectionTitle: {
    fontSize: "36px",
    color: "#00f3ff",
    marginBottom: "30px",
  },
  resourceContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "30px",
  },
  resourceCard: {
    background: "#0e2433",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0, 255, 255, 0.2)",
    transition: "all 0.5s ease-in-out",
    margin: "15px",
    flex: "1 1 calc(30% - 30px)",
  },
  media: {
    width: "100%",
    height: "auto",
    borderRadius: "15px",
    marginBottom: "10px",
  },
  button: {
    padding: "15px 30px",
    background: "linear-gradient(to right, #00f3ff, #0066ff)",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "18px",
    textTransform: "uppercase",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0 0 15px #00f3ff",
    marginTop: "20px",
  },
};

const TestedVideos = () => {
  const navigate = useNavigate(); // For navigation

  const handleTestModel = () => {
    navigate("/test-collision"); // Redirect to TestCollision.js
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Tested Videos</h2>

      {/* Container for Videos and Photos */}
      <div style={styles.resourceContainer}>
        {/* Video Card */}
        <div style={styles.resourceCard}>
          <video autoPlay muted loop style={styles.media}>
            <source src={TestedVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Test Model Video</h3>
        </div>

        {/* Image Card */}
        <div style={styles.resourceCard}>
          <img src={TestedPhoto1} alt="Test Photo 1" style={styles.media} />
          <h3>Test Model Photo</h3>
        </div>
      </div>

      {/* Button to Test the Model */}
      <button style={styles.button} onClick={handleTestModel}>
        Test the Model Yourself
      </button>
    </section>
  );
};

export default TestedVideos;