// Minimal agent scaffold for workspace 676767676
// Usage:
//   node agent.js

const readline = require('readline');

function respond(input) {
  return `Agent received: ${input}`;
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  console.log('Agent started. Type something and press enter (Ctrl+C to exit).');

  for await (const line of rl) {
    console.log(respond(line.trim()));
  }
}

main().catch(err => {
  console.error('Agent error:', err);
  process.exit(1);
});
