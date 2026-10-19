import fs from 'node:fs';

async function download(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`Saved ${dest} (${buf.length} bytes) from ${url}`);
  } catch (e) {
    console.error(`Failed ${url}: ${e.message}`);
  }
}

async function main() {
  await download('https://d31bwppm8yl9g2.cloudfront.net/learner/website/gsmainlogo.svg', './public/logos/growthschool.svg');
  await download('https://emptycup.in/favicon.png', './public/logos/emptycup-favicon.png');
  await download('https://emptycup.in/img/website/yinyang.png', './public/logos/emptycup-yinyang.png');
  await download('https://www.rnsit.ac.in/wp-content/themes/rnsit/img/sticky-header-logo-with-25years.png', './public/logos/rnsit-official.png');
}

main();
