# Readme

This repository is designed to help you quickly start a Mastra and MedusaJS project.

Instructions to start the project. Replace [project-name] with your project's name.

1. docker-compose up
2. npx create-medusa-app@latest [project-name] --db-url postgres://medusa:poseidon@localhost:5432/medusa
3. Generate storefront and copy NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY content from .env.local file
4. Paste it to store-bot .env MEDUSA_PUBLISHABLE_KEY

If you didn't generate the storefront, then you can go and generate a publishable API key by following these instructions: 
https://docs.medusajs.com/resources/storefront-development/publishable-api-keys

Happy hacking. 