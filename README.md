# Lakshya Chalana - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features an AI chatbot assistant powered by Google Gemini.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light mode toggle
- 🤖 AI Chatbot Assistant (Powered by Google Gemini)
- 📱 Mobile-first responsive design
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- ✨ Beautiful animations and transitions

## AI Chatbot Setup

To enable the AI chatbot functionality:

1. **Create environment file:**
   ```bash
   cp env.example .env.local
   ```

2. **Add your Gemini API key:**
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Get API key from Google AI Studio:**
   - Visit [Google AI Studio](https://aistudio.google.com/)
   - Create a new API key
   - Copy the key to your `.env.local` file

## Development

```bash
npm install
npm run dev
```

## Deployment

The `.env.local` file is automatically ignored by git, so your API key will remain secure when pushing to GitHub.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- Google Gemini AI API
