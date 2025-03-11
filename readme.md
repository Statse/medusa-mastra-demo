# Readme

This repository is designed to help you quickly start a Mastra and MedusaJS project.

Instructions to start project. Replace [project-name] with your project name.

1. docker-compose up
2. npx create-medusa-app@latest [project-name] --db-url postgres://medusa:poseidon@localhost:5432/medusa
3. Generate storefront and copy NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY content from .env.local file
4. paste it to store-bot .env MEDUSA_PUBLISHABLE_KEY

If you didn't generate storefront then you can go and generate publishable api key following these instructions: 
https://docs.medusajs.com/resources/storefront-development/publishable-api-keys

Happy hacking. 