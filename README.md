# AI Code Reviewer

An intelligent code review application powered by Google Gemini AI.

## About

This project provides automated code review using Google's Gemini AI. Send your code and get detailed feedback, suggestions, and best practices recommendations.

## Features

- Code analysis using Google Gemini AI
- RESTful API built with Express.js
- Detailed code review with suggestions
- Error detection and security analysis

## Tech Stack

- **Backend**: Node.js, Express.js
- **AI**: Google Generative AI (Gemini)
- **Tools**: CORS, dotenv

## Project Structure

```
CODE-REVIEW/
├── BackEnd/
│   ├── src/
│   │   ├── app.js              # Main Express app
│   │   ├── routes/             # API routes
│   │   ├── controllers/        # Request handlers
│   │   └── service/            # AI service logic
│   ├── server.js               # Server entry point
│   └── package.json            # Dependencies
├── .env                        # Environment variables
└── README.md                   # This file
```

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-code-reviewer.git
   cd ai-code-reviewer
   ```

2. **Install dependencies**
   ```bash
   cd BackEnd
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   GOOGLE_GEMINI_KEY=your_api_key_here
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

Server runs on `http://localhost:3000`

## API Usage

### Get Code Review

```bash
POST /ai/get-review
Content-Type: application/json

{
  "code": "your_code_here"
}
```

### Example

```bash
curl -X POST http://localhost:3000/ai/get-review \
  -H "Content-Type: application/json" \
  -d '{"code": "function test() { console.log(\"hello\"); }"}'
```

## Roadmap

- [x] Backend API with Express.js
- [x] Google Gemini AI integration
- [x] Code review endpoint
- [ ] Frontend interface
- [ ] User authentication
- [ ] Code history tracking

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request