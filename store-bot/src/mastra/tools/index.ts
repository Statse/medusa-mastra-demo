import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const fetchProducts = async () => {
  const response = await fetch('http://localhost:9000/store/products', {
    headers: {
      'x-publishable-api-key': process.env.MEDUSA_PUBLISHABLE_KEY as string
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const data = await response.json();
  const products = data.products.map((product: any) => ({
    id: product.id,
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.images[0].url,
    url: "http://localhost:8000/dk/products/" + product.handle,
  }));

  return products;
};

export const productsTool = createTool({
  id: 'get-products',
  description: 'Get products from medusajs store',
  inputSchema: z.object({}),
  outputSchema: z.object({}),
  execute: async () => await fetchProducts(),
});