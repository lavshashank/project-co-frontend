import React, { useState } from "react";
import Sample1 from "../assets/Sample1.png";
import Sample2 from "../assets/Sample2.png";
import Sample3 from "../assets/Sample3.png";
import Sample4 from "../assets/Sample4.png";
import Sample5 from "../assets/Sample5.png";
import Sample6 from "../assets/Sample6.png";

const sampleVideos = [
  {
    id: "sample3",
    url: "https://drive.google.com/uc?id=14ZF6LA6eVUKEnia6z1N7NKKpIJmmym3L",
    thumbnail: Sample3,
  },
  {
    id: "sample1",
    url: "https://drive.google.com/uc?id=1NBRz5jlepiwgog5GguF3YJkhTiXHRr7I",
    thumbnail: Sample1,
  },
  {
    id: "sample4",
    url: "https://drive.google.com/uc?id=1SRYzmRT3nrqhJ5MStu4B6cFz8dxndlHZ",
    thumbnail: Sample4,
  },
  {
    id: "sample5",
    url: "https://drive.google.com/uc?id=1SO5WGHnKUnMTxVFUI-RvwL9WX4LS_a5o",
    thumbnail: Sample5,
  },
  {
    id: "sample6",
    url: "https://drive.google.com/uc?id=1_tQ12QgYNCaxSAQiL9QC34He2iRQ15fg",
    thumbnail: Sample6,
  },
  {
    id: "sample2",
    url: "https://drive.google.com/uc?id=1NBRz5jlepiwgog5GguF3YJkhTiXHRr7I",
    thumbnail: Sample2,
  },
];

function TestCollision() {
  const [videoFile, setVideoFile] = useState(null);
  const [streamUrl, setStreamUrl] = useState("");
  const [collisionWarning, setCollisionWarning] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
    setStreamUrl("");
    setError("");
    setCollisionWarning(null);
  };

  const handleUpload = async () => {
    if (!videoFile) {
      setError("Please upload a video file.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setStreamUrl(`http://localhost:5000/video_feed/${data.file_path}`);

        const eventSource = new EventSource(
          `http://localhost:5000/events/${data.file_path}`
        );

        eventSource.onmessage = (event) => {
          const [collision] = event.data.split("|");
          setCollisionWarning(collision);
        };

        eventSource.onerror = () => {
          setError("Error connecting to the event stream.");
          eventSource.close();
        };

        return () => eventSource.close();
      } else {
        const errorData = await response.json();
        setError(errorData.error || "An error occurred.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div style={theme.container}>
      <h1 style={theme.headingPrimary}>
        Test Our GENAI-Integrated Forward Collision Warning System
      </h1>
      <h2 style={theme.headingSecondary}>Upload videos and analyze collision risks in real-time!</h2>
      <div style={theme.inputContainer}>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={theme.fileInput}
        />
        <button onClick={handleUpload} style={theme.button}>
          Upload & Analyze
        </button>
      </div>
      {error && <p style={theme.error}>{error}</p>}
      {streamUrl && (
        <div>
          <div>
            <p>
              <strong>Collision Warning:</strong> {collisionWarning || "None"}
            </p>
          </div>
          <div style={theme.videoContainer}>
            <h3>Processed Video:</h3>
            <img
              src={streamUrl}
              alt="Processed video stream"
              style={theme.image}
            />
          </div>
        </div>
      )}
      <div style={theme.sampleSection}>
        <h3 style={theme.sampleHeading}>Sample Videos</h3>
        <p>Follow these steps to test:</p>
        <p>Download one of the videos below by clicking the download button.</p>
        <p>Click the Upload button to upload the video to analyze.</p>
        <div style={theme.videoScrollContainer}>
          {sampleVideos.map((video, index) => (
            <div key={index} style={theme.videoCard}>
              <img
                src={video.thumbnail}
                alt={`Thumbnail for ${video.id}`}
                style={theme.videoPreview}
              />
              <a
                href={`${video.url}&export=download`}
                download
                style={theme.downloadButton}
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const theme = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: "#ffffff",
    background: "linear-gradient(135deg, #0f2027, #2c5364)",
    padding: "80px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
  },
  headingPrimary: {
    fontSize: "36px",
    color: "#00f3ff",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  headingSecondary: {
    fontSize: "20px",
    color: "#ffffff",
    marginBottom: "30px",
    fontStyle: "italic",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  fileInput: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.7)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#ffffff",
    fontSize: "14px",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease-in-out",
  },
  button: {
    padding: "12px 25px",
    borderRadius: "6px",
    backgroundColor: "#00f3ff",
    color: "rgba(0, 0, 0, 0.6)",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
  },
  error: {
    color: "#dc3545",
    marginTop: "10px",
    fontWeight: "bold",
  },
  videoContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  sampleSection: {
    marginTop: "40px",
    textAlign: "Center",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
  },
  sampleHeading: {
    fontSize: "3rem",
    color: "#00f3ff",
    fontWeight: "bold",
  },
  videoScrollContainer: {
    display: "flex",
    overflowX: "auto",
    gap: "15px",
    padding: "10px 0",
  },
  videoCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "220px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  videoPreview: {
    width: "200px",
    height: "120px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  downloadButton: {
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(40, 167, 69, 0.3)",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
  },
};

export default TestCollision;