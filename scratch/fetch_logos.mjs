import fs from 'node:fs';

async function fetchLogos() {
  const targets = [
    { name: 'growthschool', url: 'https://growthschool.io' },
    { name: 'emptycup', url: 'https://emptycup3d.com' },
    { name: 'rnsit', url: 'https://www.rnsit.ac.in' },
  ];

  for (const t of targets) {
    try {
      console.log(`Fetching ${t.name} from ${t.url}...`);
      const res = await fetch(t.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const html = await res.text();
      // find image/svg tags with logo
      const imgTags = html.match(/<img[^>]+>/gi) || [];
      const logoImgs = imgTags.filter(tag => /logo/i.test(tag));
      console.log(`${t.name} logo <img> tags:`, logoImgs.slice(0, 5));
      
      const allUrls = html.match(/https?:\/\/[^\s"'><]+?\.(?:svg|png|webp|ico)/gi) || [];
      const logoUrls = [...new Set(allUrls.filter(u => /logo/i.test(u)))];
      console.log(`${t.name} logo asset URLs:`, logoUrls.slice(0, 8));

      // also check for inline svgs containing logo
      const svgs = html.match(/<svg[^>]*>[\s\S]*?<\/svg>/gi) || [];
      const logoSvgs = svgs.filter(s => /logo/i.test(s));
      console.log(`${t.name} inline logo SVGs:`, logoSvgs.length);
      if (logoSvgs.length > 0) {
        fs.writeFileSync(`./scratch/${t.name}_inline_logo.svg`, logoSvgs[0]);
      }
    } catch (e) {
      console.error(`Error fetching ${t.name}:`, e.message);
    }
  }
}

fetchLogos();
