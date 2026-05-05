const { getAllProducts } = require('./src/lib/api/products');
require('dotenv').config({ path: '.env.local' });

async function main() {
  const products = await getAllProducts();
  console.log(JSON.stringify(products, null, 2));
}

main();
