import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
from dotenv import load_dotenv
from huggingface_hub import login

# Load environment variables from the .env file
load_dotenv()

app = FastAPI()

# Allow requests from specified origins
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this based on your needs during development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*", "Content-Type"],
)

class ScoringItem(BaseModel):
    message: str

# Fetch Hugging Face token from the environment
hf_token = os.getenv("HF_TOKEN")

# Login to Hugging Face using the token
login(hf_token)

# Load the model and tokenizer using the token
model_name = "Jjateen/llama-2-7b-mental-chat"
tokenizer = AutoTokenizer.from_pretrained(model_name, use_auth_token=True)
model = AutoModelForCausalLM.from_pretrained(model_name, use_auth_token=True)

@app.post("/chat")
async def predict(item: ScoringItem):
    try:
        # Tokenize the input message
        inputs = tokenizer(item.message, return_tensors="pt")
        
        # Generate a response using the model
        outputs = model.generate(**inputs)
        
        # Decode the generated tokens into a human-readable response
        response = tokenizer.decode(outputs[0], skip_special_tokens=True)
        
        return JSONResponse(content={"response": response}, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

@app.get('/')
async def read_root():
    return "Welcome to Mental Wellness ChatBot!"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
