import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const fetchProducts = async () => {
    const response = await fetch('http://localhost:9000/store/products', {
      headers: {
        'x-publishable-api-key': 'pk_bc8161805f0d7d6b10d88385ba680ba53f862f56b1c0f469d555a879f0f417b9'
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