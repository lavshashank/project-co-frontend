import React from 'react';
import { FaCarCrash, FaRoute, FaVideo } from 'react-icons/fa';

const SystemFeatures = () => {
  const styles = {
    container: {
      padding: '40px',
      background: 'linear-gradient(135deg, #0f2027, #2c5364)',
      minHeight: '100vh',
      color: '#ffffff',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '36px',
      color: '#00f3ff',
    },
    featuresContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      background: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      width: '300px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardHover: {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
    },
    icon: {
      fontSize: '40px',
      color: '#00f3ff',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>System Features</h1>
        <p>Explore the key functionalities of our advanced detection system.</p>
      </header>
      <div style={styles.featuresContainer}>
        {/* Collision Detection Feature */}
        <div style={{ ...styles.card, ...styles.cardHover }}>
          <FaCarCrash style={styles.icon} />
          <h3>Collision Detection</h3>
          <p>Real-time detection of potential collisions to ensure road safety.</p>
        </div>
        {/* Lane Marking Feature */}
        <div style={{ ...styles.card, ...styles.cardHover }}>
          <FaRoute style={styles.icon} />
          <h3>Lane Marking</h3>
          <p>Precise identification and visualization of lane boundaries.</p>
        </div>
        {/* Video Analysis Feature */}
        <div style={{ ...styles.card, ...styles.cardHover }}>
          <FaVideo style={styles.icon} />
          <h3>Video Analysis</h3>
          <p>Analyze and process videos for vehicle behavior and safety patterns.</p>
        </div>
      </div>
    </div>
  );
};

export default SystemFeatures;