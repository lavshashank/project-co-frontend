import React from 'react';
import { FaRobot, FaCogs } from 'react-icons/fa';

const AIModels = () => {
  const styles = {
    container: {
      padding: '40px',
      background: 'linear-gradient(135deg, #0f2027, #2c5364)',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#00f3ff',
    },
    subtitle: {
      fontSize: '18px',
      color: '#b0c4de',
    },
    modelsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px',
    },
    card: {
      background: 'rgba(15, 32, 39, 0.85)',
      padding: '25px',
      borderRadius: '12px',
      width: '350px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    },
    cardHover: {
      ':hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
      },
    },
    icon: {
      fontSize: '50px',
      color: '#00f3ff',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#00f3ff',
      marginBottom: '10px',
    },
    cardDescription: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#dcdcdc',
      textAlign: 'justify',
    },
    bulletPoints: {
      textAlign: 'left',
      marginTop: '10px',
      paddingLeft: '20px',
    },
    bulletPointItem: {
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>AI Models</h1>
        <p style={styles.subtitle}>Discover the advanced AI technologies powering our system.</p>
      </header>
      <div style={styles.modelsContainer}>
        {/* YOLOv8 Card */}
        <div style={styles.card}>
          <FaRobot style={styles.icon} />
          <h3 style={styles.cardTitle}>YOLOv8</h3>
          <p style={styles.cardDescription}>
            YOLOv8 (You Only Look Once, version 8) is a cutting-edge object detection model, designed to detect vehicles,
            pedestrians, and road obstacles in real time. Its high efficiency ensures minimal latency, even in complex environments.
          </p>
          <ul style={styles.bulletPoints}>
            <li style={styles.bulletPointItem}>Highly accurate object detection.</li>
            <li style={styles.bulletPointItem}>Handles diverse lighting conditions and fast-moving objects.</li>
            <li style={styles.bulletPointItem}>Optimized for real-time performance.</li>
          </ul>
        </div>
        {/* ESRGAN Card */}
        <div style={styles.card}>
          <FaCogs style={styles.icon} />
          <h3 style={styles.cardTitle}>ESRGAN</h3>
          <p style={styles.cardDescription}>
            ESRGAN (Enhanced Super-Resolution Generative Adversarial Network) is a **Generative AI model** 
            used for enhancing video quality. By upscaling low-resolution frames, ESRGAN ensures clearer visuals 
            for precise detection and analysis.
          </p>
          <ul style={styles.bulletPoints}>
            <li style={styles.bulletPointItem}>Upscales low-quality frames to high resolution.</li>
            <li style={styles.bulletPointItem}>Reduces noise and restores fine details.</li>
            <li style={styles.bulletPointItem}>Improves detection accuracy in challenging scenarios like low light.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIModels;