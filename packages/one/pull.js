#!/usr/bin/env node
const { hello } = require('high-dep');
const path = require('path');
const fs = require('fs');

const distData = fs.readFileSync(path.resolve(__filename, '..', 'node_modules', 'high-dep', 'dist.js')).toString();


console.log('chicken ', hello())
console.log('dist is ', distData);

const callDir = process.cwd();
fs.writeFileSync(path.resolve(callDir, 'high-dep-dist.js'), distData);
