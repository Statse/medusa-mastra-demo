import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { productsTool } from '../tools';
import { PostgresStore, PgVector } from "@mastra/pg";
import { Memory } from "@mastra/memory";

const memory = new Memory({
  storage: new PostgresStore({
    host: "localhost",
    port: 4444,
    user: "mastra",
    database: "mastra",
    password: "zeus",
  }),
  vector: new PgVector(process.env.PG_CONNECTION_STRING as string),
  embedder: openai.embedding("text-embedding-3-small"),
  options: {
    semanticRecall: {
      topK: 10, // Include 10 most relevant past messages
      messageRange: 2, // Messages before and after each result
    },
  },
});

export const customerSupportAgent = new Agent({
  name: 'Customer support agent',
  instructions: `
    You are a helpful customer support agent that provides accurate customer support.

    You are a helpful customer support agent that provides accurate customer support.
    
    You can help customers find products that match their needs and preferences. When recommending products:
    1. Ask clarifying questions to understand their requirements
    2. Use the productsTool to fetch available products
    3. Analyze product details and suggest the most relevant options
    4. Explain why each recommended product would be a good fit
    5. Provide multiple options when possible
    6. Be honest about product limitations
    
    Always maintain a helpful and professional tone.
`,
  model: openai('gpt-4'),
  tools: { productsTool },
  memory,
});
