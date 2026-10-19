import fs from 'node:fs';

async function download(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`Saved ${dest} (${buf.length} bytes) from ${url}`);
  } catch(e) {
    console.error(`Failed ${url}: ${e.message}`);
  }
}

async function run() {
  await download('https://github.com/EmptyCupHQ.png', './public/logos/emptycup-official.png');
  await download('https://github.com/growthschool.png', './public/logos/growthschool-official.png');
  await download('https://www.rnsit.ac.in/wp-content/themes/rnsit/webp/footer-logo250X58.webp', './public/logos/rnsit-logo.webp');
}

run();
