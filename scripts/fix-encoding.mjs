import { readFileSync, writeFileSync } from 'fs';
const c = readFileSync('src/data/services.ts', 'utf8');
const lines = c.split('\n');

// Line 313 (0-indexed: 312) has erroneously added icon: "✿" — remove it
// Line 317 (0-indexed: 316) has corrupted icon — fix it
// Also need to check if slug is missing from breast-surgery category

console.log('Lines 311-320:');
for (let i = 310; i <= 320; i++) {
  console.log(`${i+1}: ${JSON.stringify(lines[i])}`);
}

// Remove line 312 (0-indexed) - the erroneous icon line
// Fix line 316 (0-indexed) - replace corrupted icon with ✿
const newLines = lines.filter((_, i) => i !== 312);

// Now the original line 317 is at index 315 (after removing one line)
// Find the corrupted icon line
for (let i = 311; i <= 318; i++) {
  if (newLines[i] && newLines[i].includes('icon:') && !newLines[i].includes('string') && !newLines[i].includes('✿') && !newLines[i].includes('✦') && !newLines[i].includes('◈')) {
    console.log(`\nFound corrupted icon at line ${i+1}: ${JSON.stringify(newLines[i])}`);
    newLines[i] = '    icon: "✿",';
    console.log('Fixed to:', newLines[i]);
  }
}

// Also check if slug is present for breast-surgery category
let hasSlug = false;
for (let i = 311; i <= 320; i++) {
  if (newLines[i] && newLines[i].includes('slug: "breast-surgery"')) {
    hasSlug = true;
    break;
  }
}

if (!hasSlug) {
  // Insert slug after line 311 (the opening { )
  newLines.splice(312, 0, '    slug: "breast-surgery",');
  console.log('\nAdded missing slug');
}

writeFileSync('src/data/services.ts', newLines.join('\n'), 'utf8');
console.log('\nDone. Lines 311-322 now:');
for (let i = 310; i <= 322; i++) {
  if (newLines[i]) console.log(`${i+1}: ${newLines[i]}`);
}
