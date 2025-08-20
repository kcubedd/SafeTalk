from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load saved ML model + vectorizer
model = joblib.load("../ml/toxicity_model.pkl")
vectorizer = joblib.load("../ml/vectorizer.pkl")

# Label mapping
labels = {0: "Safe", 1: "Mildly toxic", 2: "Highly toxic"}

@app.route("/")
def home():
    return "✅ SafeTalk ML Backend is running!"

# ML Prediction Route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        text = data.get("text", "")

        if not text:
            return jsonify({"error": "No input text provided"}), 400

        # Transform input text
        X_new = vectorizer.transform([text])
        prediction = model.predict(X_new)[0]
        label = labels[prediction]

        return jsonify({
            "input": text,
            "predicted_class": int(prediction),
            "label": label
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # 👇 important for mobile testing!
    app.run(debug=True, host="0.0.0.0", port=5000)
