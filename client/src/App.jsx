import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.response);
      setInput(''); // Clear input after successful response
    } catch (error) {
      console.error('Error:', error);
      setResponse('Failed to get a response from the AI.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>AI Chat Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {response && (
        <div className="response">
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="markdown-h1" {...props} />,
              h2: ({node, ...props}) => <h2 className="markdown-h2" {...props} />,
              h3: ({node, ...props}) => <h3 className="markdown-h3" {...props} />,
              p: ({node, ...props}) => <p className="markdown-p" {...props} />,
              ul: ({node, ...props}) => <ul className="markdown-ul" {...props} />,
              li: ({node, ...props}) => <li className="markdown-li" {...props} />,
              code: ({node, inline, ...props}) => 
                inline ? (
                  <code className="markdown-code" {...props} />
                ) : (
                  <code {...props} />
                ),
              pre: ({node, ...props}) => <pre className="markdown-pre" {...props} />,
              table: ({node, ...props}) => <table className="markdown-table" {...props} />,
              th: ({node, ...props}) => <th className="markdown-th" {...props} />,
              td: ({node, ...props}) => <td className="markdown-td" {...props} />
            }}
          >
            {response}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;