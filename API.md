# API Documentation

## Overview

The Intelligent Code Analysis API provides AI-powered code analysis using Google Gemini AI. It offers three main capabilities:

1. **Code Review**: Comprehensive analysis of code quality, bugs, security, and performance
2. **Code Explanation**: Detailed explanations of what code does and how it works
3. **Code Improvement**: Suggestions for refactoring and best practices

## Base URL

```
http://localhost:3000
```

## Authentication

Currently, the API does not require client authentication. The Google Gemini API key is configured server-side via environment variables.

## Endpoints

### 1. Health Check

Check if the API is running.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok",
  "message": "Intelligent Code Analysis API is running"
}
```

**Status Codes:**
- `200 OK`: API is running normally

---

### 2. Code Review

Analyze code for quality, bugs, security concerns, and performance issues.

**Endpoint:** `POST /api/review`

**Request Body:**
```json
{
  "code": "string (required)",
  "language": "string (optional)"
}
```

**Parameters:**
- `code`: The source code to analyze
- `language`: Programming language (e.g., "javascript", "python", "java")

**Response:**
```json
{
  "success": true,
  "review": "Detailed code review analysis...",
  "language": "javascript",
  "timestamp": "2025-11-13T18:00:00.000Z"
}
```

**Status Codes:**
- `200 OK`: Review completed successfully
- `400 Bad Request`: Missing or invalid code parameter
- `500 Internal Server Error`: AI processing error

**Example Request:**
```bash
curl -X POST http://localhost:3000/api/review \
  -H "Content-Type: application/json" \
  -d '{
    "code": "function add(a, b) { return a + b; }",
    "language": "javascript"
  }'
```

---

### 3. Code Explanation

Get a detailed explanation of what the code does.

**Endpoint:** `POST /api/explain`

**Request Body:**
```json
{
  "code": "string (required)",
  "language": "string (optional)"
}
```

**Parameters:**
- `code`: The source code to explain
- `language`: Programming language

**Response:**
```json
{
  "success": true,
  "explanation": "Detailed explanation...",
  "language": "javascript",
  "timestamp": "2025-11-13T18:00:00.000Z"
}
```

**Status Codes:**
- `200 OK`: Explanation completed successfully
- `400 Bad Request`: Missing or invalid code parameter
- `500 Internal Server Error`: AI processing error

**Example Request:**
```bash
curl -X POST http://localhost:3000/api/explain \
  -H "Content-Type: application/json" \
  -d '{
    "code": "const result = arr.reduce((acc, val) => acc + val, 0);",
    "language": "javascript"
  }'
```

---

### 4. Code Improvement

Get suggestions for improving the code.

**Endpoint:** `POST /api/improve`

**Request Body:**
```json
{
  "code": "string (required)",
  "language": "string (optional)"
}
```

**Parameters:**
- `code`: The source code to improve
- `language`: Programming language

**Response:**
```json
{
  "success": true,
  "improvements": "Suggestions and refactored code...",
  "language": "javascript",
  "timestamp": "2025-11-13T18:00:00.000Z"
}
```

**Status Codes:**
- `200 OK`: Improvements generated successfully
- `400 Bad Request`: Missing or invalid code parameter
- `500 Internal Server Error`: AI processing error

**Example Request:**
```bash
curl -X POST http://localhost:3000/api/improve \
  -H "Content-Type: application/json" \
  -d '{
    "code": "for(var i=0;i<items.length;i++){console.log(items[i]);}",
    "language": "javascript"
  }'
```

---

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "success": false,
  "error": "Error description",
  "message": "Detailed error message"
}
```

### Common Error Codes

- **400 Bad Request**: Invalid or missing required parameters
- **404 Not Found**: Endpoint does not exist
- **500 Internal Server Error**: Server error or AI processing failure

---

## Rate Limiting

Currently, there are no rate limits implemented. Future versions may include rate limiting based on API usage.

---

## Supported Languages

The API can analyze code in any programming language. Common languages include:

- JavaScript / TypeScript
- Python
- Java
- C / C++
- C#
- Go
- Ruby
- PHP
- Swift
- Kotlin
- Rust
- And many more...

---

## Best Practices

1. **Specify Language**: Always include the `language` parameter for better analysis
2. **Code Size**: Keep code snippets reasonably sized (under 5000 lines) for optimal performance
3. **Error Handling**: Always check the `success` field in responses
4. **Context**: For better reviews, include complete functions or classes rather than fragments

---

## Examples

See `example-client.js` for complete working examples of how to use the API.

---

## Support

For issues or questions, please open an issue on GitHub.
