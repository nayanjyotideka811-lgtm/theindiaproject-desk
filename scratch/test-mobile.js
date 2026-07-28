import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

console.log("Launching Edge headless in Mobile Viewport mode (375x667 iPhone SE)...");
const child = spawn(edgePath, [
  '--headless',
  '--disable-gpu',
  '--window-size=375,667',
  '--dump-dom',
  'https://theindiaproject.world/'
]);

let out = '';
child.stdout.on('data', data => out += data.toString());
child.stderr.on('data', data => console.error(data.toString()));

child.on('close', code => {
  console.log(`Rendered Mobile DOM Length: ${out.length}`);
  if (out.includes('THEINDIAPROJECT.WORLD') || out.includes('theindiaproject.world')) {
    console.log("   ✓ Mobile DOM rendering verified successfully!");
  } else {
    console.log("   ⚠️ Check mobile DOM output.");
  }
});
