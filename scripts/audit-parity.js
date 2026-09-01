#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n⚖️ Erebus Design System - Framework Parity Audit');
console.log('================================================\n');

const reactDir = path.join(__dirname, '../packages/react/src');
const angularDir = path.join(__dirname, '../packages/angular/src');

function getDirectories(srcPath) {
  if (!fs.existsSync(srcPath)) return [];
  return fs.readdirSync(srcPath).filter(file => {
    // skip files like index.ts
    return fs.statSync(path.join(srcPath, file)).isDirectory();
  });
}

const reactComponents = getDirectories(reactDir);
const angularComponents = getDirectories(angularDir);

const allComponents = new Set([...reactComponents, ...angularComponents]);

let hasDiscrepancies = false;

if (allComponents.size === 0) {
  console.log('ℹ️ No components found in either framework yet.');
} else {
  allComponents.forEach(component => {
    const inReact = reactComponents.includes(component);
    const inAngular = angularComponents.includes(component);

    if (inReact && inAngular) {
      console.log(`✅ ${component} - Present in React and Angular`);
    } else if (inReact) {
      console.log(`❌ ${component} - Missing in Angular`);
      hasDiscrepancies = true;
    } else {
      console.log(`❌ ${component} - Missing in React`);
      hasDiscrepancies = true;
    }
  });
}

console.log('');
if (hasDiscrepancies) {
  console.warn('⚠️ Parity audit finished with missing components. Please port missing implementations.');
} else {
  console.log('✅ Full parity between React and Angular components!');
}
