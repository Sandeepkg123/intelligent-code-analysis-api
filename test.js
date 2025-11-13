const http = require('http');

// Test configuration
const BASE_URL = 'http://localhost:3001';

// Helper function to make HTTP requests
function makeRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: JSON.parse(body)
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data: body
          });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// Run tests
async function runTests() {
  console.log('Starting API tests...\n');

  try {
    // Test 1: Health check
    console.log('Test 1: Health Check');
    const healthResponse = await makeRequest('/health');
    console.log(`Status: ${healthResponse.status}`);
    console.log(`Response:`, healthResponse.data);
    console.log(`✓ Health check ${healthResponse.status === 200 ? 'PASSED' : 'FAILED'}\n`);

    // Test 2: Code review with missing code
    console.log('Test 2: Code Review - Missing Code (Should fail)');
    const reviewError = await makeRequest('/api/review', 'POST', {});
    console.log(`Status: ${reviewError.status}`);
    console.log(`Response:`, reviewError.data);
    console.log(`✓ Validation ${reviewError.status === 400 ? 'PASSED' : 'FAILED'}\n`);

    // Test 3: Code explanation with missing code
    console.log('Test 3: Code Explanation - Missing Code (Should fail)');
    const explainError = await makeRequest('/api/explain', 'POST', {});
    console.log(`Status: ${explainError.status}`);
    console.log(`Response:`, explainError.data);
    console.log(`✓ Validation ${explainError.status === 400 ? 'PASSED' : 'FAILED'}\n`);

    // Test 4: Code improvement with missing code
    console.log('Test 4: Code Improvement - Missing Code (Should fail)');
    const improveError = await makeRequest('/api/improve', 'POST', {});
    console.log(`Status: ${improveError.status}`);
    console.log(`Response:`, improveError.data);
    console.log(`✓ Validation ${improveError.status === 400 ? 'PASSED' : 'FAILED'}\n`);

    // Test 5: 404 handler
    console.log('Test 5: Non-existent Endpoint');
    const notFound = await makeRequest('/api/nonexistent');
    console.log(`Status: ${notFound.status}`);
    console.log(`Response:`, notFound.data);
    console.log(`✓ 404 Handler ${notFound.status === 404 ? 'PASSED' : 'FAILED'}\n`);

    console.log('All basic tests completed!');
    console.log('\nNote: Actual AI functionality requires a valid GEMINI_API_KEY');

  } catch (error) {
    console.error('Test error:', error);
  }
}

// Wait a moment for server to be ready, then run tests
setTimeout(runTests, 1000);
