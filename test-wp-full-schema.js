const query = `
  query {
    products(first: 1) {
      nodes {
        id
        title
        __typename
      }
    }
    __type(name: "Product") {
      fields {
        name
        type {
          name
          kind
        }
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
