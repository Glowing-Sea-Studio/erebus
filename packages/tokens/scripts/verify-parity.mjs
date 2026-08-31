import fs from 'fs';
import path from 'path';

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !('$value' in obj[key])) {
      keys = keys.concat(getKeys(obj[key], `${prefix}${key}.`));
    } else if (typeof obj[key] === 'object' && obj[key] !== null && '$value' in obj[key]) {
      keys.push(`${prefix}${key}`);
    }
  }
  return keys;
}

const lightPath = path.resolve(process.cwd(), 'src/semantic/light.json');
const darkPath = path.resolve(process.cwd(), 'src/semantic/dark.json');

const lightContent = JSON.parse(fs.readFileSync(lightPath, 'utf8'));
const darkContent = JSON.parse(fs.readFileSync(darkPath, 'utf8'));

const lightKeys = getKeys(lightContent).sort();
const darkKeys = getKeys(darkContent).sort();

const missingInDark = lightKeys.filter(k => !darkKeys.includes(k));
const missingInLight = darkKeys.filter(k => !lightKeys.includes(k));

if (missingInDark.length > 0 || missingInLight.length > 0) {
  console.error('Parity check failed!');
  if (missingInDark.length > 0) {
    console.error('Missing in dark mode:', missingInDark);
  }
  if (missingInLight.length > 0) {
    console.error('Missing in light mode:', missingInLight);
  }
  process.exit(1);
} else {
  console.log('Parity check passed.');
  process.exit(0);
}
