const fs = require('fs');
const readingTime = require('reading-time');

const args = process.argv.slice(2);
var filename = args[0];

if (filename === undefined || filename === "") {
  console.error(`Usage:
  Read from file:     node reading-time.js [filename]
  Read from stdin:    cat [filename] | node reading-time.js --`);
  process.exit(1);
}

try {
  if (filename === "--") {
    filename = 0; // fd for stdin
  }
  const data = fs.readFileSync(filename, 'utf8');
  const stats = readingTime(data);
  console.log(stats);
} catch (err) {
  console.error(err)
}
