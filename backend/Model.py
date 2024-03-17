import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer  # Use TfidfVectorizer for better feature extraction
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import PyPDF2

# Sample dataset
data = {
    'text': ['Patient Name: John Doe, Age: 30, Sex: Male, Report Date: 2022-01-01, Lab No: 12345, Doctor: Dr. Smith, Signature: Yes',
             'Patient Name: Jane Doe, Age: 25, Sex: Female, Report Date: 2022-01-02, Lab No: 54321, Doctor: Dr. Johnson, Signature: No']
}
df = pd.DataFrame(data)

# Feature extraction using TF-IDF vectorizer
vectorizer = TfidfVectorizer()  # Create a vectorizer
features = vectorizer.fit_transform(df['text'])  # Extract features using TF-IDF

# Define target
df['valid'] = df['text'].apply(lambda x: 1 if 'Signature: Yes' in x else 0)

# Train-test split
X = features
y = df['valid']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest classifier
clf = RandomForestClassifier(random_state=42)
clf.fit(X_train, y_train)

# Evaluate the model
y_pred = clf.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')

# Extract text from uploaded PDF
pdf_file_path = 'pdf ki location '
text = ''
with open(pdf_file_path, 'rb') as file:
    pdf_reader = PyPDF2.PdfFileReader(file)
    for page_num in range(pdf_reader.getNumPages()):
        text += pdf_reader.getPage(page_num).extractText()

# Prepare text for prediction (using the vectorizer again)
new_features = vectorizer.transform([text])  # Transform extracted text

# Predict validity
prediction = clf.predict(new_features)[0]
print(f'The report is {"valid" if prediction == 1 else "invalid"}')