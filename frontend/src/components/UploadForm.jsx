import { useState } from "react";
import axios from "axios";
import "./UploadForm.css"

function UploadForm() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [similarity, setSimilarity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // 📂 File upload
  const handleFileChange = (e) => setResume(e.target.files[0]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResume(e.dataTransfer.files[0]);
    }
  };

  // 🚀 Submit to Flask API
  const handleSubmit = async () => {
    if (!jobDescription || !resume) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("resume", resume);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSimilarity(response.data.similarity);
      setShowPopup(true);
    } catch (error) {
      console.error("❌ Upload error:", error);
      alert("Error uploading resume. Check Flask backend.");
    } finally {
      setLoading(false);
    }
  };

  // 🎯 Emojis + Messages
  const getScoreEmoji = (score) => (score >= 80 ? "🎉" : score >= 60 ? "👍" : "💪");
  const getScoreMessage = (score) =>
    score >= 80 ? "Excellent Match!" : score >= 60 ? "Good Match" : "Needs Improvement";

  return (
    <div style={styles.page} className="upload-form">
      <h1 style={styles.mainTitle}>⚡ Resume Matcher</h1>
      <p style={styles.subtitle}>See how well your resume matches the job description</p>

      {/* 📜 Form Section */}
      <div style={styles.formSection}>
        <label style={styles.label}>Job Description</label>
        <textarea
          placeholder="Paste the job description here..."
          rows="5"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          style={styles.textarea}
        />

        <label style={styles.label}>Upload Resume</label>
        <div
          style={{
            ...styles.dropZone,
            ...(dragActive ? styles.dropZoneActive : {}),
            ...(resume ? styles.dropZoneSuccess : {}),
          }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById("resumeUpload").click()}
        >
          <input
            type="file"
            accept=".pdf"
            id="resumeUpload"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <div>
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>
              {resume ? "✅" : "📂"}
            </div>
            <p style={{ fontSize: "16px", margin: 0 }}>
              {resume ? resume.name : "Click or drag & drop your resume here"}
            </p>
            <small style={{ color: "#eee" }}>PDF files only</small>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!jobDescription || !resume || loading}
          style={{
            ...styles.button,
            ...((!jobDescription || !resume || loading) && styles.buttonDisabled),
          }}
        >
          {loading ? "⏳ Analyzing..." : "✨ Analyze Match"}
        </button>
      </div>

      {/* 🎉 POPUP RESULT */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>
              ✖
            </button>
            <h2 style={styles.resultScore}>
              {similarity}% {getScoreEmoji(similarity)}
            </h2>
            <p style={styles.resultText}>{getScoreMessage(similarity)}</p>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${similarity}%`,
                  backgroundColor:
                    similarity >= 80 ? "#10b981" : similarity >= 60 ? "#f59e0b" : "#ef4444",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    height: "110vh",
    width: "100vw",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    boxSizing: "border-box",
  },
  mainTitle: { fontSize: "42px", margin: "0 0 10px 0" },
  subtitle: { fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "30px" },
  formSection: {
    width: "90%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: { fontWeight: "bold", fontSize: "16px" },
  textarea: {
    width: "100%",
    padding: "12px",
    background: "rgba(207, 201, 232, 1)",
    borderRadius: "8px",
    border: "none",
    fontSize: "14px",
    color: "#333",
    boxSizing: "border-box",
  },
  dropZone: {
    border: "2px dashed #ddd",
    borderRadius: "10px",
    padding: "40px 20px",
    textAlign: "center",
    cursor: "pointer",
    background: "rgba(255,255,255,0.15)",
    transition: "0.3s",
  },
  dropZoneActive: { borderColor: "#fff", background: "rgba(255,255,255,0.3)" },
  dropZoneSuccess: { borderColor: "#10b981", background: "rgba(16,185,129,0.3)" },
  button: {
    background: "#4da3ff",
    padding: "14px",
    borderRadius: "8px",
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
  },
  buttonDisabled: { background: "#6b7280", cursor: "not-allowed" },

  /* POPUP */
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "fadeIn 0.3s ease forwards",
  },
  popup: {
    background: "#fff",
    color: "#333",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transform: "scale(0.7)",
    animation: "popIn 0.4s ease forwards",
    position: "relative",

  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    color: "#333",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  resultScore: { fontSize: "36px", margin: "10px 0" },
  resultText: { fontSize: "18px", marginBottom: "15px" },
  progressBar: {
    width: "100%",
    height: "10px",
    background: "#eee",
    borderRadius: "5px",
    overflow: "hidden",
  },
  progressFill: { height: "100%", transition: "width 1s ease-in-out" },
  

};

/* 🔥 Add pop animation */
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes popIn {
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
  @media (max-width: 900px) {
  .page {
    min-height: auto !important;
    padding-bottom: 0 !important;
    
  }
  body, html {
    height: auto !important;
    overflow-x: hidden;
    background-color: #dfe3ea !important;
  }
}
`;
document.head.appendChild(styleSheet);

export default UploadForm;
