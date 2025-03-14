import json
import os
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
import faiss
from google import genai

# Load Gemini API key securely
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("❌ Error: GEMINI_API_KEY is not set. Please set it as an environment variable.")

# Initialize Gemini API client
client = genai.Client(api_key=GEMINI_API_KEY)

# Load parking data from JSON file
PARKING_DATA_FILE = "/Users/hemanth/RAG-parking-managment/components/data/Parking_Data.json"

try:
    with open(PARKING_DATA_FILE, "r") as f:
        parking_data = json.load(f)
except FileNotFoundError:
    print("❌ Error: Parking data file not found. Ensure the JSON file is correctly placed.")
    parking_data = {}
except json.JSONDecodeError:
    print("❌ Error: Failed to decode JSON. Ensure the file format is correct.")
    parking_data = {}

# Function to flatten JSON data
def flatten_json(data, parent_key='', sep='_'):
    items = []
    for key, value in data.items():
        new_key = f"{parent_key}{sep}{key}" if parent_key else key
        if isinstance(value, dict):
            items.extend(flatten_json(value, new_key, sep=sep).items())
        elif isinstance(value, list):
            for i, v in enumerate(value):
                if isinstance(v, dict):
                    items.extend(flatten_json(v, f"{new_key}{sep}{i}", sep=sep).items())
                else:
                    items.append((f"{new_key}{sep}{i}", str(v)))
        else:
            items.append((new_key, str(value)))
    return dict(items)

flattened_data = flatten_json(parking_data)
text_chunks = [f"{key}: {value}" for key, value in flattened_data.items()]

# Initialize Sentence Transformer for embeddings
model = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = model.encode(text_chunks, convert_to_numpy=True)

# Create FAISS index for efficient retrieval
dimension = embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(embeddings)

# Function to retrieve relevant chunks
def retrieve_relevant_chunks(query, k=5):
    try:
        query_embedding = model.encode([query], convert_to_numpy=True)
        distances, indices = index.search(query_embedding, k)
        relevant_chunks = [text_chunks[idx] for idx in indices[0]]
        return relevant_chunks
    except Exception as e:
        return [f"❌ Error retrieving relevant information: {str(e)}"]

# Function to generate response using Gemini API
def generate_response(query, relevant_chunks):
    context = "\n".join(relevant_chunks)
    prompt = f"""
    You are a chatbot for university parking services. Use the following context to answer the user's query. If the context doesn't fully answer the query, provide a helpful response based on general knowledge.

    🔹 **Context**:
    {context}

    🔍 **User Query**:
    {query}

    📝 **Response**:
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash", contents=prompt
        )
        return response.text.strip()
    except Exception as e:
        return f"❌ Error generating response: {str(e)}"

# Function to handle direct FAQs
def handle_direct_queries(query):
    query = query.lower()

    if "parking fee" in query or "cost" in query:
        return (
            "🚗 **CSUSB Parking Rates:**\n"
            "- **Non-Represented MPP:** $193.50\n"
            "- **Excluded Classes:** $193.50\n"
            "- **Unit 4 (APC):** $78.00\n"
            "- **Unit 2, 5, 7, 9 (CSUEU):** $78.00\n"
            "- **Unit 8 (SUPA):** $78.00\n\n"
            "💡 Need help? Visit the **[CSUSB Parking Website](https://www.csusb.edu/parking)**."
        )

    elif "how to pay" in query or "payment methods" in query:
        return (
            "💳 **How to Pay for Parking:**\n"
            "- **ParkMobile App:** Use **Zone# 7001 (SB Campus)** or **Zone# 7100 (PDC Campus)**.\n"
            "- **Parking Dispensers:** Available 24/7 across campus.\n"
            "- **Online Portal:** Visit **[CSUSB Parking Portal](https://www.csusb.edu/parking)**.\n\n"
            "💡 For more info, check the official website."
        )

    elif "visitor parking" in query:
        return (
            "🚗 **Visitor Parking Information:**\n"
            "- **Daily Permit Rate:** $10.00\n"
            "- **Purchase Options:**\n"
            "   - **Online:** [CSUSB Parking Portal](https://www.csusb.edu/parking)\n"
            "   - **Mobile App:** ParkMobile (**Zone# 7001 for SB Campus, 7100 for PDC Campus**)\n"
            "   - **Parking Dispensers:** Available 24/7.\n\n"
            "📞 **Contact:** CSUSB Parking Services at **909-537-5912**."
        )

    return None  # If query doesn't match direct FAQs

# Chatbot function
def chatbot(query):
    direct_response = handle_direct_queries(query)
    if direct_response:
        return direct_response

    relevant_chunks = retrieve_relevant_chunks(query)
    return generate_response(query, relevant_chunks)

# Flask Web App
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    query = data.get("query", "")
    if not query:
        return jsonify({"error": "⚠️ No query provided. Please enter a question."}), 400
    response = chatbot(query)
    return jsonify({"response": response})

if __name__ == "__main__":
    print("🚀 Running CSUSB Parking Chatbot... Visit http://127.0.0.1:3002/chat")
    app.run(debug=True, host="0.0.0.0", port=3002)
