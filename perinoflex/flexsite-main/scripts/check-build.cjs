const fs = require('fs');
const path = require('path');
const required = [
  'client/dist/index.html',
  'client/dist/assets'
];
for (const item of required) {
  const full = path.join(process.cwd(), item);
  if (!fs.existsSync(full)) {
    console.error(`Missing build artifact: ${item}`);
    process.exit(1);
  }
}
console.log('Build artifacts verified.');
