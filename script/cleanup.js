#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const dirsToDelete = ['.next', 'node_modules'];

console.log('\n🧹 Cleaning up...\n');
let count = 0;
dirsToDelete.forEach((dir) => {
  const dirPath = path.join(rootDir, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`Removing ${dirPath}`);
    fs.rmSync(dirPath, { recursive: true, force: true });
    count++;
  }
});

console.log(count > 0 ? '\n🧹 Done!\n' : '🧹 Done!\n');
