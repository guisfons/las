const query = `
  query GetPageBySlug($id: ID!) {
    page(id: $id, idType: URI) {
      id
      slug
      title
      pageLasClubs {
        bannerLas { title }
      }
    }
  }
`;

async function test() {
  try {
    const res = await fetch('https://mediumblue-swallow-341910.hostingersite.com/index.php?graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { id: 'las-clubs' } }),
    });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (e) {
    console.error('Error:', e.message);
  }
}
test();
