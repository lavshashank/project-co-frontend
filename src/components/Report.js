import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import '../styles/Report.css';  // Assuming styles are defined for page layout and design

function Report() {
  return (
    <div className="report-page">
      <header className="report-header">
        <h1 className="report-title">Forward Collision Warning System Using Generative AI</h1>
        <div className="navigation-links">
          <a href="https://drive.google.com/file/d/1B0w5RAmHJ4LeqrYcSNPvhCoJJytnQ1Zy/view?usp=sharing" className="nav-link" target="_blank" rel="noopener noreferrer">
            <FaFilePdf className="icon" /> Documents
          </a>
        </div>
      </header>

      <section id="introduction" className="report-section card-section">
        <h2>Introduction</h2>
        <p>The Forward Collision Warning (FCW) system is a vital component...</p>
      </section>

      <section id="tools" className="report-section card-section">
        <h2>Tools and Technologies Used</h2>
        <div className="card-list">
          <div className="card">
            <h3>Flask</h3>
            <p>Backend framework for creating APIs and handling video uploads.</p>
          </div>
          <div className="card">
            <h3>OpenCV</h3>
            <p>Image and video processing library.</p>
          </div>
          <div className="card">
            <h3>YOLOv8</h3>
            <p>Object detection model for identifying vehicles and obstacles.</p>
          </div>
          <div className="card">
            <h3>ESRGAN</h3>
            <p>Generative AI model used for super-resolution, enhancing video frames.</p>
          </div>
          <div className="card">
            <h3>NumPy & PyTorch</h3>
            <p>Core libraries for numerical computations and model operations.</p>
          </div>
          <div className="card">
            <h3>PIL</h3>
            <p>Python Imaging Library for image processing.</p>
          </div>
        </div>
      </section>

      <section id="esrgan-enhancements" className="report-section card-section">
        <h2>How ESRGAN Enhances the System</h2>
        <ul>
          <li>Clarity Improvement</li>
          <li>Detection Accuracy Boost</li>
          <li>Faster Processing Workflow</li>
          <li>Visual Feedback for Drivers</li>
        </ul>
      </section>

      <section id="workflow" className="report-section card-section">
        <h2>System Workflow</h2>
        <div className="card-list">
          <div className="card">
            <h3>Video Upload</h3>
            <p>Users upload videos via Flask API.</p>
          </div>
          <div className="card">
            <h3>Frame Processing</h3>
            <p>Frames are extracted using OpenCV.</p>
          </div>
          <div className="card">
            <h3>Object Detection</h3>
            <p>YOLOv8 detects vehicles and obstacles.</p>
          </div>
          <div className="card">
            <h3>Lane Detection</h3>
            <p>Using Hough Line Transform for lane boundaries.</p>
          </div>
          <div className="card">
            <h3>Real-Time Streaming</h3>
            <p>Processed frames are streamed back to users with warnings.</p>
          </div>
          <div className="card">
            <h3>Real-Time Alerts</h3>
            <p>Collision warnings are sent via SSE.</p>
          </div>
        </div>
      </section>

      <section id="advantages" className="report-section card-section">
        <h2>Advantages of Using Generative AI in FCW</h2>
        <ul>
          <li>Improved Performance</li>
          <li>Faster Decision-Making</li>
          <li>Robust Functionality in Challenging Scenarios</li>
          <li>User-Friendly Experience</li>
        </ul>
      </section>

      <section id="conclusion" className="report-section card-section">
        <h2>Conclusion</h2>
        <p>This project showcases the integration of Generative AI into real-world safety applications...</p>
      </section>

    </div>
  );
}

export default Report;