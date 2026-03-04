const query = `
  query {
    __schema {
      types {
        name
        kind
      }
    }
  }
`;

async function test() {
  try {
    const res = await fetch('https://las-wp.lndo.site/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (e) {
    console.error('Error:', e.message);
  }
}
test();
