import React, { useState } from "react";
import TestedVideos from "./Testedvideo";
import {
  FaCarCrash,
  FaShieldAlt,
  FaCogs,
  FaRobot,
  FaMagic,
  FaChartLine,
  FaMicrochip,
  FaLightbulb,
  FaRoad,
  FaFileAlt,
} from "react-icons/fa";
import ChatSupport from "./ChatSupport";
import "./Report";

const styles = {
  container: {
    fontFamily: "'Orbitron', sans-serif",
    color: "#ffffff",
    backgroundColor: "#0f2027",
    background: "radial-gradient(circle, #001021, #0f2027, #1b2e36)",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  mainScreen: {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 0 40px #00f3ff",
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#00f3ff",
  },
  subtitle: {
    fontSize: "22px",
    color: "#ffffff",
    opacity: 0.8,
    marginBottom: "30px",
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
  },
  buttonHover: {
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 25px #00f3ff",
    },
  },
  section: {
    padding: "20px 20px",
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
    marginBottom: "20px",
  },
  resourceContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "30px",
  },
  resourceIcon: {
    fontSize: "50px",
    color: "#00f3ff",
    marginBottom: "15px",
  },
  footer: {
    backgroundColor: "#0f2027",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    marginTop: "30px",
    borderTop: "2px solid #00f3ff",
  },
  link: {
    color: "#00f3ff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  toggleButton: {
    padding: "10px 20px",
    background: "#00f3ff",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    textTransform: "uppercase",
    transition: "all 0.5s ease-in-out", // Smooth transition for all properties
    boxShadow: "0 0 15px #00f3ff",
    marginBottom: "20px",
    alignSelf: "center",
  },
  toggleButtonHover: {
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 25px #00f3ff",
    },
  },

  // For resourceCard
  resourceCard: {
    background: "#0e2433",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0, 255, 255, 0.2)",
    transition: "all 0.5s ease-in-out", // Ensure smooth transition
    margin: "15px",
    flex: "1 1 calc(30% - 30px)",
  },
  resourceCardHover: {
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 20px #00f3ff",
    },
  },
};

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.container}>
      {/* Main Screen */}
      <section style={styles.mainScreen}>
        <video
          autoPlay
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={require("../assets/video.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <button
          style={{
            ...styles.button,
            ...styles.toggleButton,
            ...styles.toggleButtonHover,
          }}
          onClick={toggleSection}
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
        {isExpanded && (
          <div style={styles.resourceContainer}>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaCarCrash style={styles.resourceIcon} />
              <h3>Collision Detection</h3>
              <p>
                Real-time AI-powered collision warnings for enhanced safety.
              </p>
            </div>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaShieldAlt style={styles.resourceIcon} />
              <h3>Safety Assurance</h3>
              <p>Designed to meet global safety standards for vehicles.</p>
            </div>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaCogs style={styles.resourceIcon} />
              <h3>Customizable</h3>
              <p>Personalized settings tailored to your driving preferences.</p>
            </div>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaMagic style={styles.resourceIcon} />
              <h3>Generative AI Video Enhancement</h3>
              <p>
                Utilizes ESRGAN, a Generative AI model, to upscale and enhance
                low-resolution video for improved clarity and accurate analysis
                in challenging environments.
              </p>
            </div>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaRoad style={styles.resourceIcon} />
              <h3>Lane Marking Detection</h3>
              <p>
                Advanced detection of road lane markings to assist in
                lane-keeping and navigation.
              </p>
            </div>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaMicrochip style={styles.resourceIcon} />
              <h3>Edge AI Processing</h3>
              <p>
                Processes data directly on edge devices for faster results,
                reducing reliance on cloud and enhancing system reliability.
              </p>
            </div>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaChartLine style={styles.resourceIcon} />
              <h3>Performance Analytics</h3>
              <p>
                Gain insights into system performance and driving behavior
                through detailed analytics dashboards.
              </p>
            </div>
            <div
              style={{ ...styles.resourceCard, ...styles.resourceCardHover }}
            >
              <FaLightbulb style={styles.resourceIcon} />
              <h3>Low-Light Performance</h3>
              <p>
                Optimized detection algorithms and video enhancement ensure
                accuracy in poor lighting conditions.
              </p>
            </div>
          </div>
        )}
      </section>
      {/* 3D Animation Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Animation</h2>
        <video
          autoPlay
          muted
          loop
          style={{ width: "80%", height: "60%", objectFit: "cover" }}
        >
          <source src={require("../assets/animation.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Chat Support */}
      <ChatSupport />
      <TestedVideos />
      {/* Resources Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Resources</h2>
        <div style={styles.resourceContainer}>
          {/* Documentation Card */}
          <div style={{ ...styles.resourceCard, ...styles.resourceCardHover }}>
            <FaFileAlt style={styles.resourceIcon} />
            <h3>Documentation</h3>
            <p>Step-by-step guides to setup and configure the system.</p>
            <a href="/report" style={styles.link}>
              Learn More
            </a>
          </div>

          {/* AI Models Card */}
          <div style={{ ...styles.resourceCard, ...styles.resourceCardHover }}>
            <FaRobot style={styles.resourceIcon} />
            <h3>AI Models</h3>
            <p>Explore the pre-trained AI models used in this project.</p>
            <a href="/models" style={styles.link}>
              Explore Models
            </a>
          </div>

          {/* System Features Card */}
          <div style={{ ...styles.resourceCard, ...styles.resourceCardHover }}>
            <FaCogs style={styles.resourceIcon} />
            <h3>System Features</h3>
            <p>Learn more about the features and capabilities of the system.</p>
            <a href="/features" style={styles.link}>
              Discover Features
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Contact Us: support@fcw-system.com | +1-234-567-8901</p>
        <p>© 2024 Forward Collision Warning System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
