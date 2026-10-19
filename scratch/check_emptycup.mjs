import fs from 'node:fs';

async function checkEmptyCup() {
  for (const url of ['https://emptycup3d.com', 'https://emptycup.in', 'https://www.emptycup.in']) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      console.log('---', url, 'Length:', html.length);
      const all = html.match(/(?:https?:\/\/[^\s"'><]+|\/[^\s"'><]+)\.(?:svg|png|webp|ico|jpg)/gi) || [];
      console.log('Images:', [...new Set(all)].slice(0, 20));
      // Favicon or link rel icon
      const icons = html.match(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/gi) || [];
      console.log('Icons:', icons);
    } catch(e) {
      console.log('Error', url, e.message);
    }
  }
}

checkEmptyCup();
