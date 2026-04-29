const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const LOGO_DIR = path.resolve(__dirname, '../../docs/GV_CLIENT_LOGO');

async function getExistingClients() {
    console.log('Fetching existing clients...');
    const response = await fetch(`${STRAPI_API_URL}/api/clients?pagination[limit]=500`, {
        headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        }
    });
    const data = await response.json();
    return data.data || [];
}

async function uploadFile(filePath, fileName) {
    console.log(`Uploading ${fileName}...`);
    const formData = new FormData();
    const fileBuffer = fs.readFileSync(filePath);
    const blob = new Blob([fileBuffer]);
    formData.append('files', blob, fileName);

    const response = await fetch(`${STRAPI_API_URL}/api/upload`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        },
        body: formData
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data[0].id;
}

async function createOrUpdateClient(name, logoId, existingClients) {
    const existingClient = existingClients.find(c => c.attributes.name === name);

    if (existingClient) {
        console.log(`Updating client: ${name} (ID: ${existingClient.id})...`);
        const response = await fetch(`${STRAPI_API_URL}/api/clients/${existingClient.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STRAPI_API_TOKEN}`
            },
            body: JSON.stringify({
                data: {
                    logo: logoId
                }
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to update client ${name}: ${errorText}`);
        }
    } else {
        console.log(`Creating client: ${name}...`);
        const response = await fetch(`${STRAPI_API_URL}/api/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STRAPI_API_TOKEN}`
            },
            body: JSON.stringify({
                data: {
                    name: name,
                    logo: logoId,
                    publishedAt: new Date().toISOString() // Publish immediately
                }
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to create client ${name}: ${errorText}`);
        }
    }
}

async function main() {
    try {
        if (!STRAPI_API_URL || !STRAPI_API_TOKEN) {
            throw new Error('Missing Strapi credentials in .env.local');
        }

        const existingClients = await getExistingClients();
        const files = fs.readdirSync(LOGO_DIR);

        console.log(`Found ${files.length} files in ${LOGO_DIR}`);

        for (const file of files) {
            if (file.startsWith('.')) continue; // Skip hidden files

            const filePath = path.join(LOGO_DIR, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) continue;

            const clientName = path.parse(file).name;
            
            try {
                const logoId = await uploadFile(filePath, file);
                await createOrUpdateClient(clientName, logoId, existingClients);
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }

        console.log('Finished processing all logos.');
    } catch (error) {
        console.error('Fatal error:', error);
    }
}

main();
