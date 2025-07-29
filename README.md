# Resume Matcher – AI-Powered Job Description & Resume Analysis

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000.svg)](https://flask.palletsprojects.com/)

Transform your job application process with AI-powered resume analysis! This application helps candidates instantly **analyze how well their resume matches a job description** using advanced **Natural Language Processing (NLP)** techniques.

Demo Video : 

https://github.com/user-attachments/assets/870f48a9-d382-41c7-bbb9-f3c30f5bfaa3

## 🌟 Key Features

✅ **Smart PDF Processing** - Upload and analyze PDF resumes with advanced text extraction  
✅ **AI-Powered Analysis** - Uses Sentence-BERT embeddings for semantic similarity matching  
✅ **Real-Time Scoring** - Get instant compatibility scores (0-100%) with detailed feedback  
✅ **Modern UI/UX** - Sleek, responsive interface with glassmorphism design  
✅ **Drag & Drop Support** - Intuitive file upload with visual feedback  
✅ **Cross-Platform** - Works on desktop, tablet, and mobile devices  

## 🎯 How It Works

1. **Upload Resume** - Drop your PDF resume or click to browse
2. **Paste Job Description** - Copy and paste the target job posting
3. **AI Analysis** - Our Sentence-BERT model processes both documents
4. **Get Results** - Receive a detailed compatibility score with insights

## 🛠️ Tech Stack

### Frontend
- **React 18+** with Vite for lightning-fast development
- **Modern CSS** with glassmorphism and smooth animations
- **Responsive Design** optimized for all devices

### Backend
- **Flask** RESTful API with CORS support
- **SentenceTransformers** (`all-MiniLM-L6-v2`) for semantic analysis
- **PyMuPDF** for robust PDF text extraction
- **NumPy** for efficient similarity calculations

### AI/ML
- **Sentence-BERT** embeddings for contextual understanding
- **Cosine Similarity** for semantic matching
- **Optimized Processing** for real-time analysis

## 🌐 Deployment

### Backend Deployment (Render)
1. Push your code to GitHub
2. Create new Web Service on [Render](https://render.com)
3. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
4. Deploy and get your API URL

### Frontend Deployment (Vercel)
1. Push frontend to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Set framework preset to **Vite**
4. Deploy and get your app URL

## Website deployed at : 

## 🔮 Future Enhancements

- [ ] **Multi-format Support** - DOCX, TXT, and more file types
- [ ] **Keyword Analysis** - Identify missing keywords in resumes
- [ ] **Multi-language Support** - Process documents in various languages
- [ ] **Batch Processing** - Analyze multiple resumes at once
- [ ] **Historical Tracking** - Save and compare analysis results
- [ ] **Chrome Extension** - Analyze job postings directly from job sites
- [ ] **ATS Optimization** - Specific suggestions for Applicant Tracking Systems

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SentenceTransformers](https://www.sbert.net/) for powerful semantic embeddings
- [Hugging Face](https://huggingface.co/) for model hosting and tools
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) communities
- All contributors who help improve this project

---

<div align="center">

**⭐ Star this repository if it helped you land your dream job! ⭐**

Made with ❤️ by [Vasita](https://github.com/Vasita27)

</div>
