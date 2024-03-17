from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import PyPDF2

app = Flask(__name__)

# Load and preprocess the data
data = {
    'text': ['Patient Name: John Doe, Age: 30, Sex: Male, Report Date: 2022-01-01, Lab No: 12345, Doctor: Dr. Smith, Signature: Yes',
             'Patient Name: Jane Doe, Age: 25, Sex: Female, Report Date: 2022-01-02, Lab No: 54321, Doctor: Dr. Johnson, Signature: No']
}
df = pd.DataFrame(data)
vectorizer = TfidfVectorizer()
features = vectorizer.fit_transform(df['text'])
df['valid'] = df['text'].apply(lambda x: 1 if 'Signature: Yes' in x else 0)
X = features
y = df['valid']
clf = RandomForestClassifier(random_state=42)
clf.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get PDF text from request
        pdf_file = request.files['file']
        pdf_text = ''
        with pdf_file as file:
            pdf_reader = PyPDF2.PdfFileReader(file)
            for page_num in range(pdf_reader.getNumPages()):
                pdf_text += pdf_reader.getPage(page_num).extractText()

        # Extract features from PDF text
        new_features = vectorizer.transform([pdf_text])
        
        # Predict
        prediction = clf.predict(new_features)[0]
        
        return jsonify({'prediction': 'valid' if prediction == 1 else 'invalid'})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
