# AI Chat Assistant
![image](https://github.com/user-attachments/assets/a59f691b-cb27-4625-bab1-b46fffada798)

A simple, interactive chat application powered by the Groq LLM API. This application features a React frontend and a Flask backend, allowing users to engage in conversations with an AI assistant.

## Features

- Real-time chat interface
- Markdown support for responses
- Loading state indicators
- Error handling
- CORS enabled for development
- Support for code highlighting and GitHub-flavored markdown

## Tech Stack

### Frontend
- React
- React Markdown
- Rehype Raw
- Remark GFM

### Backend
- Python
- Flask
- Phi Framework
- Groq API

## Prerequisites

Before running this application, make sure you have:

- Node.js and npm installed
- Python 3.x installed
- Groq API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahzem/new-ai-chat.git
cd new-ai-chat
```

2. Setup Frontend:
```bash
cd client
npm install
```

3. Setup Backend:
```bash
cd server
pip install -r requirements.txt
```

4. Configure Environment Variables:
Create a `.env` file in the server directory with:
```
GROQ_API_KEY=your_groq_api_key_here
```

## Running the Application

1. Start the Backend Server:
```bash
cd server
python app.py
```

2. Start the Frontend Development Server:
```bash
cd client
npm run dev
```

The application should now be running at `http://localhost:5173` with the backend API at `http://localhost:5000`.

## Usage

1. Enter your question or prompt in the input field
2. Click "Ask" or press Enter
3. Wait for the AI's response
4. The response will be displayed with proper markdown formatting

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
