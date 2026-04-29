const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function main() {
    const response = await fetch(`${STRAPI_API_URL}/api/clients?populate=*&pagination[limit]=1`, {
        headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        }
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
}

main();
