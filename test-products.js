process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const query = `
  query GetAllProducts {
    products(first: 100) {
      nodes {
        id
        databaseId
        slug
        title
        productacf {
          specialities
          brands
          description
          subtitle
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

    if (!res.ok) {
      console.error('HTTP Error:', res.status, res.statusText);
      const text = await res.text();
      console.error('Response body:', text);
      return;
    }

    const json = await res.json();
    console.log('Results count:', json.data?.products?.nodes?.length);
    console.log(JSON.stringify(json, null, 2));
  } catch (e) {
    console.error('Fetch Error:', e.message);
  }
}
test();
