require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Intelligent Code Analysis API is running' });
});

// Code review endpoint
app.post('/api/review', async (req, res) => {
  try {
    const { code, language } = req.body;

    // Validate input
    if (!code) {
      return res.status(400).json({ error: 'Code is required' });
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create a prompt for code review
    const prompt = `You are an expert code reviewer. Please analyze the following ${language || 'code'} and provide:
1. Code quality assessment
2. Potential bugs or issues
3. Security concerns
4. Performance suggestions
5. Best practices recommendations

Code to review:
\`\`\`${language || ''}
${code}
\`\`\`

Provide your review in a structured format.`;

    // Generate the review
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const review = response.text();

    res.json({
      success: true,
      review,
      language: language || 'unknown',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error during code review:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to analyze code',
      message: error.message
    });
  }
});

// Code explanation endpoint
app.post('/api/explain', async (req, res) => {
  try {
    const { code, language } = req.body;

    // Validate input
    if (!code) {
      return res.status(400).json({ error: 'Code is required' });
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create a prompt for code explanation
    const prompt = `Please explain the following ${language || 'code'} in detail. Break down what each part does and how it works:

\`\`\`${language || ''}
${code}
\`\`\``;

    // Generate the explanation
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();

    res.json({
      success: true,
      explanation,
      language: language || 'unknown',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error during code explanation:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to explain code',
      message: error.message
    });
  }
});

// Code improvement endpoint
app.post('/api/improve', async (req, res) => {
  try {
    const { code, language } = req.body;

    // Validate input
    if (!code) {
      return res.status(400).json({ error: 'Code is required' });
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create a prompt for code improvement
    const prompt = `Please suggest improvements for the following ${language || 'code'}. Provide:
1. Refactored version of the code
2. Explanation of improvements made
3. Benefits of the changes

Original code:
\`\`\`${language || ''}
${code}
\`\`\``;

    // Generate improvements
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const improvements = response.text();

    res.json({
      success: true,
      improvements,
      language: language || 'unknown',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error during code improvement:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to improve code',
      message: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Intelligent Code Analysis API is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
