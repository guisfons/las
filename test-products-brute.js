const fetch = require('node-fetch');

async function test(fieldName) {
  const query = `
    query {
      products(first: 1) {
        nodes {
          id
          title
          ${fieldName} {
            description
          }
        }
      }
    }
  `;
  try {
    const res = await fetch('https://las-wp.lndo.site/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    if (json.errors) {
      console.log(`Field "${fieldName}" failed:`, json.errors[0].message);
    } else {
      console.log(
        `Field "${fieldName}" SUCCESS!`,
        JSON.stringify(json.data, null, 2),
      );
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
}

async function run() {
  await test('productAcf');
  await test('productacf');
  await test('Productacf');
  await test('ProductAcf');
}
run();
