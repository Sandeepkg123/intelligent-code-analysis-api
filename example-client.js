// Example client script to demonstrate API usage
// Run with: node example-client.js

const http = require('http');

const API_URL = 'http://localhost:3000';

// Helper function to make API calls
function callAPI(endpoint, data) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: endpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(data))
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(new Error('Failed to parse response'));
        }
      });
    });

    req.on('error', reject);
    req.write(JSON.stringify(data));
    req.end();
  });
}

// Example 1: Review JavaScript code
async function exampleReview() {
  console.log('\n=== Example 1: Code Review ===');
  
  const codeToReview = `
function calculateTotal(items) {
  var total = 0;
  for(var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
}
  `.trim();

  try {
    const result = await callAPI('/api/review', {
      code: codeToReview,
      language: 'javascript'
    });

    console.log('Review Result:');
    console.log(result.review);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example 2: Explain code
async function exampleExplain() {
  console.log('\n=== Example 2: Code Explanation ===');
  
  const codeToExplain = `
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2).filter(n => n > 5);
  `.trim();

  try {
    const result = await callAPI('/api/explain', {
      code: codeToExplain,
      language: 'javascript'
    });

    console.log('Explanation:');
    console.log(result.explanation);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example 3: Get improvement suggestions
async function exampleImprove() {
  console.log('\n=== Example 3: Code Improvement ===');
  
  const codeToImprove = `
function fetchData(callback) {
  setTimeout(function() {
    var data = {name: "John", age: 30};
    callback(data);
  }, 1000);
}
  `.trim();

  try {
    const result = await callAPI('/api/improve', {
      code: codeToImprove,
      language: 'javascript'
    });

    console.log('Improvements:');
    console.log(result.improvements);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Main execution
async function main() {
  console.log('Intelligent Code Analysis API - Example Client');
  console.log('==============================================');
  console.log('\nMake sure the API server is running on port 3000');
  console.log('Start it with: npm start\n');

  try {
    // Run examples sequentially
    await exampleReview();
    await exampleExplain();
    await exampleImprove();
    
    console.log('\n==============================================');
    console.log('Examples completed successfully!');
  } catch (error) {
    console.error('\nFailed to complete examples:', error.message);
    console.log('\nMake sure:');
    console.log('1. The server is running (npm start)');
    console.log('2. You have set a valid GEMINI_API_KEY in .env');
  }
}

// Run the examples
main();
