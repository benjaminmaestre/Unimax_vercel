const fs = require('fs');
const html = fs.readFileSync('scratch/unimax_proyectos.html', 'utf8');

let cleanHtml = html
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '');

const results = [];

const tagRegex = /<(h[1-6]|p|li|a)(?:\s+[^>]*)*>([\s\S]*?)<\/\1>/gi;
let match;
while ((match = tagRegex.exec(cleanHtml)) !== null) {
  const tag = match[1].toLowerCase();
  let text = match[2]
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '–')
    .replace(/&#8230;/g, '...')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length > 0) {
    if (tag.startsWith('h')) {
      results.push(`\n[${tag.toUpperCase()}] ${text}`);
    } else if (tag === 'p') {
      results.push(`[P] ${text}`);
    } else if (tag === 'li') {
      results.push(`  - ${text}`);
    } else if (tag === 'a') {
      if (text.length > 3 && !text.includes('Menu') && !text.includes('Ir al')) {
        results.push(`[LINK] ${text}`);
      }
    }
  }
}

fs.writeFileSync('scratch/unimax_proyectos_clean.txt', results.join('\n'), 'utf8');
console.log('Extracted projects to scratch/unimax_proyectos_clean.txt');
