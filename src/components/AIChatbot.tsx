import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "🤖 Hi! I'm LakshyaBot, your AI assistant. Ask me anything about Lakshya Chalana's portfolio, skills, projects, or experience!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
        const MODEL = "gemini-2.0-flash-exp";

  // Check if API key is loaded
  useEffect(() => {
    if (!API_KEY) {
      console.warn('API Key not configured');
    }
  }, [API_KEY]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const userText = inputText.trim();
    if (!userText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Portfolio content (local instead of fetching)
      const portfolioContent = `
        Lakshya Chalana - Tech Intern at LinuxWorld Informatics Pvt Ltd
        
        Skills:
        Frontend: React, TypeScript, JavaScript, HTML/CSS, Tailwind CSS, Vite, Next.js
        Backend: Node.js, Express.js, Python, REST APIs, Microservices
        Databases: MongoDB, PostgreSQL
        DevOps: Docker, Kubernetes, AWS, Jenkins, CI/CD, Git
        Other: Linux, Shell Scripting, Agile/Scrum
        
        Projects:
        E-commerce Platform: MERN stack, user auth, product catalog, payment integration, admin dashboard
        Blog Platform: Next.js, MongoDB, SEO, user auth, rich text editor, comments
        Portfolio Website: React, TypeScript, Tailwind CSS, responsive design, dark mode, animations
        Task Management App: React, Node.js, real-time updates, drag-drop, progress tracking
        Weather Dashboard: React, OpenWeather API, location-based forecasts, interactive charts
        
        Certifications: AWS Cloud Practitioner, Docker Associate, Kubernetes Admin, Jenkins Engineer, Linux Foundation
        
        Education: Bachelor's in Computer Science
        
        Experience: Tech Intern at LinuxWorld Informatics Pvt Ltd - full-stack development, DevOps, cloud technologies
      `;

      const apiMessages = [
        {
          role: "system",
          content: `You are LakshyaBot, a helpful AI assistant for Lakshya Chalana's portfolio. Use the following portfolio content to answer questions. Be friendly, professional, and concise. If asked about something not in the portfolio, politely redirect to relevant information or suggest contacting Lakshya directly.\n\nPortfolio Content:\n${portfolioContent}`
        },
        { role: "user", content: userText }
      ];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                contents: [{
                  parts: [{
                    text: `You are LakshyaBot, a concise AI assistant for Lakshya Chalana's portfolio.

RESPONSE RULES:
- Keep answers brief and to the point
- Only provide what was specifically asked for
- ALWAYS structure answers in clear points/bullets
- Use bullet points (• or -) for all lists
- No markdown formatting
- Be professional but concise
- If asked about projects, mention only key features and tech stack
- If asked about skills, categorize them clearly but briefly
- Structure information in organized points

Portfolio Content:
${portfolioContent}

User Question: ${userText}

Provide a concise, structured answer with clear bullet points.`
                  }]
                }]
              })
        }
      );

      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that. Please try again!";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      // Log error for debugging (without exposing sensitive info)
      let errorText = "Sorry, I'm having trouble connecting right now. Please try again later or contact Lakshya directly!";
      
      if (!API_KEY) {
        errorText = "AI service is not configured. Please contact the administrator.";
      } else if (error instanceof Error) {
        errorText = "Sorry, I'm having trouble connecting right now. Please try again later.";
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: errorText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LakshyaBot</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">AI Portfolio Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === 'bot' && (
                    <Bot className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <User className="w-4 h-4 text-teal-100 mt-1 flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-teal-500" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-3">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Lakshya's skills, projects, or experience..."
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot; 