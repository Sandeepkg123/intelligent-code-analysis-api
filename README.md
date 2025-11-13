# Intelligent Code Analysis API

An intelligent code review API powered by Google Gemini AI that provides comprehensive code analysis, explanations, and improvement suggestions.

## Features

- 🔍 **Code Review**: Get detailed code quality assessments, bug detection, and security analysis
- 📖 **Code Explanation**: Understand what your code does with AI-powered explanations
- ✨ **Code Improvement**: Receive refactoring suggestions and best practices
- 🚀 **Express.js Backend**: Fast and reliable REST API
- 🤖 **Google Gemini AI**: Powered by advanced AI for intelligent analysis
- 🔒 **CORS Enabled**: Ready for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- Google Gemini API Key ([Get one here](https://makersuite.google.com/app/apikey))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Sandeepkg123/intelligent-code-analysis-api.git
cd intelligent-code-analysis-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from the example:
```bash
cp .env.example .env
```

4. Add your Google Gemini API key to the `.env` file:
```
GEMINI_API_KEY=your_actual_api_key_here
PORT=3000
```

## Usage

### Start the server

```bash
npm start
```

The API will be available at `http://localhost:3000`

### API Endpoints

#### Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "message": "Intelligent Code Analysis API is running"
}
```

#### Code Review
```http
POST /api/review
Content-Type: application/json

{
  "code": "function example() { console.log('hello'); }",
  "language": "javascript"
}
```

**Response:**
```json
{
  "success": true,
  "review": "Detailed code review...",
  "language": "javascript",
  "timestamp": "2025-11-13T18:00:00.000Z"
}
```

#### Code Explanation
```http
POST /api/explain
Content-Type: application/json

{
  "code": "function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }",
  "language": "javascript"
}
```

**Response:**
```json
{
  "success": true,
  "explanation": "Detailed explanation of the code...",
  "language": "javascript",
  "timestamp": "2025-11-13T18:00:00.000Z"
}
```

#### Code Improvement
```http
POST /api/improve
Content-Type: application/json

{
  "code": "var x = 1; var y = 2; var z = x + y;",
  "language": "javascript"
}
```

**Response:**
```json
{
  "success": true,
  "improvements": "Suggested improvements and refactored code...",
  "language": "javascript",
  "timestamp": "2025-11-13T18:00:00.000Z"
}
```

## Example Usage with cURL

### Review Code
```bash
curl -X POST http://localhost:3000/api/review \
  -H "Content-Type: application/json" \
  -d '{
    "code": "function add(a, b) { return a + b; }",
    "language": "javascript"
  }'
```

### Explain Code
```bash
curl -X POST http://localhost:3000/api/explain \
  -H "Content-Type: application/json" \
  -d '{
    "code": "const arr = [1, 2, 3].map(x => x * 2);",
    "language": "javascript"
  }'
```

### Improve Code
```bash
curl -X POST http://localhost:3000/api/improve \
  -H "Content-Type: application/json" \
  -d '{
    "code": "for(var i=0;i<10;i++){console.log(i);}",
    "language": "javascript"
  }'
```

## Frontend Integration (Planned)

A React frontend is planned for future development that will provide:
- Interactive code editor
- Real-time code analysis
- Visual feedback and suggestions
- Code snippet management
- User-friendly interface

## Error Handling

The API includes comprehensive error handling:

- `400 Bad Request`: Missing or invalid parameters
- `404 Not Found`: Endpoint does not exist
- `500 Internal Server Error`: Server or AI processing errors

Error response format:
```json
{
  "success": false,
  "error": "Error description",
  "message": "Detailed error message"
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |
| `PORT` | Server port (default: 3000) | No |

## Technology Stack

- **Backend**: Node.js, Express.js
- **AI**: Google Gemini AI (Generative AI)
- **Dependencies**: 
  - `express`: Web framework
  - `@google/generative-ai`: Google Gemini AI SDK
  - `dotenv`: Environment variable management
  - `cors`: Cross-Origin Resource Sharing

## Development

```bash
npm run dev
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.