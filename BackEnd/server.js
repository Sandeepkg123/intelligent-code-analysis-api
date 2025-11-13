require('dotenv').config();
const apps = require('./src/app');

apps.listen(3000, () => {
  console.log('Server is running on port 3000');
});
