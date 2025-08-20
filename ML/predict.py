import sys
import joblib

# Load saved model and vectorizer
model = joblib.load("toxicity_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

# Map prediction to labels
labels = {0: "Safe", 1: "Mildly toxic", 2: "Highly toxic"}

# Take input sentence from command line
if len(sys.argv) < 2:
    print("Usage: python predict.py \"your sentence here\"")
    sys.exit()

text = sys.argv[1]
X_new = vectorizer.transform([text])
prediction = model.predict(X_new)[0]

print(f"Input: {text}")
print(f"Predicted Class: {labels[prediction]}")
