import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score

# 1. Load dataset
df = pd.read_csv("safetalk_mixed_dataset.csv")

# Assume dataset has columns: "text", "toxicity_scale"
print("Sample data:\n", df.head())

# 2. Convert toxicity_scale (0-10) → 3 classes
def simplify_label(value):
    if value <= 3:
        return 0  # Safe
    elif value <= 6:
        return 1  # Mildly toxic
    else:
        return 2  # Highly toxic

df["class"] = df["toxicity_scale"].apply(simplify_label)

# 3. Split dataset
X = df["text"]
y = df["class"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. TF-IDF + Logistic Regression pipeline
vectorizer = TfidfVectorizer(max_features=5000, ngram_range=(1,2))
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

model = LogisticRegression(max_iter=1000)
model.fit(X_train_tfidf, y_train)

# 5. Evaluate
y_pred = model.predict(X_test_tfidf)
print("\nAccuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# 6. Save model + vectorizer
joblib.dump(model, "toxicity_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

print("\n✅ Model and vectorizer saved successfully!")
