const fetch = require('node-fetch'); // Next.js env might have global fetch, but let's use node's native fetch if available. Wait, node 18+ has native fetch.
async function test() {
  try {
    const res = await fetch('https://las-wp.lndo.site/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: '{ generalSettings { title description } }',
      }),
    });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (e) {
    console.error('Connection failed:', e.message);
  }
}
test();
