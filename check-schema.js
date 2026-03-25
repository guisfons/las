async function checkSchema() {
  const query = `
    query {
      __schema {
        types {
          name
          description
          fields {
            name
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
      console.error(json.errors);
      return;
    }

    const types = json.data.__schema.types;

    // Look for product-like types
    const productTypes = types.filter(
      (t) =>
        t.name.toLowerCase().includes('product') ||
        t.name.toLowerCase().includes('produto'),
    );

    console.log(
      'Found product types:',
      productTypes.map((t) => t.name),
    );

    // Print fields for a specific product type if found
    const targetType = productTypes[0] || types.find((t) => t.name === 'Post');
    if (targetType) {
      console.log(`\nFields for ${targetType.name}:`);
      console.log(targetType.fields?.map((f) => f.name).join(', '));
    }
  } catch (error) {
    console.error('Error fetching schema:', error);
  }
}

checkSchema();
