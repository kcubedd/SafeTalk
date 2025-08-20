import requests

# API endpoint
URL = "http://127.0.0.1:5000/predict"

# Example inputs
examples = [
    "You are my best friend",
    "You are stupid",
    "Stop being lazy",
    "I love your kindness",
    "Idiot!"
]

for text in examples:
    response = requests.post(URL, json={"text": text})
    if response.status_code == 200:
        result = response.json()
        print(f"Input: {text}")
        print(f"Predicted Class: {result['predicted_class']} ({result['label']})")
        print("-" * 40)
    else:
        print("Error:", response.text)
