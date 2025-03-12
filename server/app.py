from flask import Flask, request, jsonify
from phi.agent import Agent
from phi.model.groq import Groq
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize the AI agent
agent = Agent(
    model=Groq(id="deepseek-r1-distill-llama-70b")
)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Chat API", "status": "online"})

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get('message')
    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    try:
        # Get the AI response
        response = agent.run(user_input)
        # Extract just the content from the response
        clean_response = response.content
        # Remove any <think> tags if present
        clean_response = clean_response.replace("<think>\n\n</think>\n\n", "")
        return jsonify({"response": clean_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)