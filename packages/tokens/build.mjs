import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync, rmSync } from 'fs';
import { resolve } from 'path';
import { getConfig } from './style-dictionary.config.js';

const THEMES = ['light', 'dark'];
const cssDir = resolve(import.meta.dirname, 'dist/css');

for (const theme of THEMES) {
  const sd = new StyleDictionary(getConfig(theme));
  await sd.buildPlatform('css');
  // ts/js and json exports are theme-agnostic static values; only build
  // them once, from the light theme.
  if (theme === 'light') {
    await sd.buildPlatform('ts');
    await sd.buildPlatform('json');
  }
}

const merged = THEMES.map((theme) =>
  readFileSync(resolve(cssDir, `variables-${theme}.css`), 'utf-8').trim()
).join('\n\n');

writeFileSync(
  resolve(cssDir, 'variables.css'),
  `/**\n * Do not edit directly, this file was auto-generated.\n */\n\n${merged}\n`
);

for (const theme of THEMES) {
  rmSync(resolve(cssDir, `variables-${theme}.css`));
}
