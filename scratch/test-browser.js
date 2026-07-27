import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const logFile = path.join(process.cwd(), 'edge-console.log');

try {
  console.log('Launching Edge headless against https://theindiaproject.world ...');
  const out = execSync(`"${edgePath}" --headless --disable-gpu --enable-logging --v=1 --dump-dom https://theindiaproject.world/?v=fresh${Date.now()}`, {
    encoding: 'utf8',
    timeout: 15000
  });
  console.log('Rendered DOM Length:', out.length);
  console.log('--- Rendered DOM Output ---');
  console.log(out.slice(0, 1000));
} catch (err) {
  console.error('Execution Error:', err.message);
  if (err.stdout) console.log('STDOUT:', err.stdout);
  if (err.stderr) console.log('STDERR:', err.stderr);
}
