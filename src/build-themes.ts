
import * as fs from 'fs';
import * as path from 'path';
import { generateTheme } from './themeGenerator';

const DEFAULT_ACCENT = '#00B09C';

function buildThemes() {
  const themesDir = path.join(__dirname, '../themes');
  
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir);
  }

  // Generate Standard Theme
  const standardTheme = generateTheme(DEFAULT_ACCENT, false);
  fs.writeFileSync(
    path.join(themesDir, 'hadar-color-theme.json'),
    JSON.stringify(standardTheme, null, 2)
  );
  console.log('Generated hadar-color-theme.json');

  // Generate Bordered Theme
  const borderedTheme = generateTheme(DEFAULT_ACCENT, true);
  fs.writeFileSync(
    path.join(themesDir, 'hadar-bordered-color-theme.json'),
    JSON.stringify(borderedTheme, null, 2)
  );
  console.log('Generated hadar-bordered-color-theme.json');
}

buildThemes();
