from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Access the Hugging Face API key
huggingface_api_key = os.getenv("HUGGINGFACE_API_KEY")

# Check if the Hugging Face API key is missing
if not huggingface_api_key:
    raise HTTPException(status_code=500, detail="Hugging Face API key is missing from environment variables.")

# Create a FastAPI instance
app = FastAPI()

# Load the model and tokenizer (this could be done once when the app starts)
tokenizer = AutoTokenizer.from_pretrained("facebook/rag-token-nq", use_auth_token=huggingface_api_key)
model = AutoModelForSeq2SeqLM.from_pretrained("facebook/rag-token-nq", use_auth_token=huggingface_api_key)

# Define the request body structure
class MessageRequest(BaseModel):
    messages: list

@app.post("/api/chat")
async def chat(request: MessageRequest):
    try:
        # Validate that messages are present
        if not request.messages or not isinstance(request.messages, list):
            raise HTTPException(status_code=400, detail="Invalid request format: messages array is required.")
        
        if len(request.messages) == 0:
            raise HTTPException(status_code=400, detail="Messages array cannot be empty.")

        # Get the user message
        user_message = request.messages[-1]["content"]

        # Ensure the last message is from the user
        if request.messages[-1]["role"] != "user":
            raise HTTPException(status_code=400, detail="The last message must be from the user.")

        # Tokenize the input message
        inputs = tokenizer(user_message, return_tensors="pt")

        # Generate a response using the model
        outputs = model.generate(inputs["input_ids"], max_length=50)
        response_text = tokenizer.decode(outputs[0], skip_special_tokens=True)

        # Return the response
        return {
            "reply": response_text,
            "source": "RAG model"
        }

    except Exception as error:
        raise HTTPException(status_code=500, detail=f"Failed to process request. Error: {str(error)}")

# Start the FastAPI app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
