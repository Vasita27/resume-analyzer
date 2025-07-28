from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz
import re
import nltk
from nltk.corpus import stopwords
from sentence_transformers import SentenceTransformer, util

nltk.download('stopwords')

app = Flask(__name__)
CORS(app)

# ✅ Load a BERT model for embeddings
model = SentenceTransformer('all-MiniLM-L6-v2')

def extract_text_from_pdf(file):
    text = ""
    with fitz.open(stream=file.read(), filetype="pdf") as doc:
        for page in doc:
            text += page.get_text()
    return text

def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    text = ' '.join([word for word in text.split() if word not in stopwords.words('english')])
    return text

@app.route('/upload', methods=['POST'])
def upload():
    try:
        job_desc = request.form.get('job_description')
        resume_file = request.files['resume']

        resume_text = extract_text_from_pdf(resume_file)
        job_desc_clean = clean_text(job_desc)
        resume_clean = clean_text(resume_text)

        # ✅ Get embeddings for both texts
        embeddings = model.encode([job_desc_clean, resume_clean], convert_to_tensor=True)

        # ✅ Calculate semantic cosine similarity
        similarity_score = util.pytorch_cos_sim(embeddings[0], embeddings[1]).item()

        return jsonify({"similarity": round(similarity_score*100, 2)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
