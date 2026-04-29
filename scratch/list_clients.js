const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function getClients() {
    const response = await fetch(`${STRAPI_API_URL}/api/clients?populate=*&pagination[limit]=500`, {
        headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        }
    });
    const data = await response.json();
    return data.data;
}

async function main() {
    try {
        const clients = await getClients();
        console.log(`Found ${clients.length} clients`);
        clients.forEach(client => {
            const attr = client.attributes || client;
            console.log(`ID: ${client.id}, Name: ${attr.name}, Sector: ${attr.sector}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
