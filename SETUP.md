# 🔧 Setup Guide - Resume Matcher

This comprehensive guide will walk you through setting up the Resume Matcher application locally and deploying it to production.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Python 3.8 or higher** ([Download](https://www.python.org/downloads/))
- **Node.js 16 or higher** ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/downloads))
- **Code Editor** (VS Code, PyCharm, etc.)

### Optional Tools
- **Postman** for API testing
- **Docker** for containerized deployment

## 🚀 Local Development Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/resume-matcher.git

# Navigate to the project directory
cd resume-matcher

# Verify the project structure
ls -la
```

### Step 2: Backend Setup (Flask API)

#### 2.1 Navigate to Backend Directory
```bash
cd backend
```

#### 2.2 Create Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate

# Verify activation (should show (venv) in prompt)
which python  # macOS/Linux
where python   # Windows
```

#### 2.3 Install Dependencies
```bash
# Upgrade pip
python -m pip install --upgrade pip

# Install required packages
pip install -r requirements.txt

# Verify installations
pip list
```

#### 2.5 Run the Backend Server
```bash
# Start the Flask development server
python app.py

# Alternative methods:
# flask run
# python -m flask run
```

✅ **Backend should now be running at:** `http://127.0.0.1:5000`

#### 2.6 Test Backend API
```bash
# Test the health endpoint
curl http://127.0.0.1:5000/health

# Expected response:
# {"status": "healthy", "message": "Resume Matcher API is running"}
```

### Step 3: Frontend Setup (React + Vite)

#### 3.1 Open New Terminal and Navigate to Frontend
```bash
# Open new terminal window/tab
cd resume-matcher/frontend
```

#### 3.2 Install Dependencies
```bash
# Install npm packages
npm install

# Alternative: Use Yarn
# yarn install

# Verify installation
npm list --depth=0
```

#### 3.4 Start Development Server
```bash
# Start Vite development server
npm run dev

# Alternative commands:
# npm start
# yarn dev
```

✅ **Frontend should now be running at:** `http://localhost:5173`

### Step 4: Verify Full Application

1. **Open your browser** and navigate to `http://localhost:5173`
2. **Test the upload functionality:**
   - Paste a sample job description
   - Upload a PDF resume
   - Click "Analyze Match"
   - Verify you receive a similarity score


## 🔧 Troubleshooting

### Common Backend Issues

#### Python Version Conflicts
```bash
# Check Python version
python --version

# Use specific Python version
python3.9 -m venv venv
```

## 🎉 Success!

If you've followed this guide, you should now have:
- ✅ Local development environment running
- ✅ Backend API serving at `http://127.0.0.1:5000`
- ✅ Frontend app running at `http://localhost:5173`
- ✅ Full application functionality tested
- ✅ (Optional) Production deployment configured

**Next Steps:**
1. Customize the UI to match your brand
2. Add additional features from the roadmap
3. Set up monitoring and analytics
4. Consider implementing user authentication

Happy coding! 🚀
