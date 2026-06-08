process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const query = `
  query GetPageBySlug($id: ID!) {
    page(id: $id, idType: URI) {
      id
      slug
      title
      pageLasClubs {
        howWeDoItToday { banner { node { sourceUrl } } logo { node { sourceUrl } } description { text } link }
        bannerLas { title description { text } imageBanner { node { sourceUrl } } link labelLink }
      }
    }
  }
`;

async function test() {
  try {
    const res = await fetch('https://las-wp.lndo.site/graphql', {
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
