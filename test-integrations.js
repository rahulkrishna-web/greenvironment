const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// 1. Manually load env variables from .env.local
try {
    const envContent = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8');
    envContent.split('\n').forEach(line => {
        const minLine = line.trim();
        if (minLine && !minLine.startsWith('#')) {
            const parts = minLine.split('=');
            const key = parts[0];
            const val = parts.slice(1).join('=');
            if (key && val) {
                process.env[key.trim()] = val.trim();
            }
        }
    });
    console.log('Environment variables loaded.');
} catch (e) {
    console.error('Failed to load .env.local', e);
    process.exit(1);
}

// 2. Google Sheets Test
// 2. Google Sheets Test
async function testGoogleSheets() {
    console.log('\n--- Testing Google Sheets ---');
    try {
        const jsonCreds = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
        const sheetId = process.env.GOOGLE_SHEET_ID;

        if (!jsonCreds || !sheetId) {
            console.error('MISSING: GOOGLE_APPLICATION_CREDENTIALS_JSON or GOOGLE_SHEET_ID');
            return;
        }

        let credentials;
        try {
            credentials = JSON.parse(jsonCreds);
        } catch (e) {
            console.error('JSON Parse Error for Credentials:', e.message);
            return;
        }

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Append a test row
        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Sheet1!A:E',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[new Date().toISOString(), 'DEBUG USER', 'debug@test.com', 'Debug Corp', 'Integration Debug']],
            },
        });

        console.log('✅ SUCCESS: Appended row to Google Sheet');
    } catch (error) {
        console.error('❌ FAILED: Google Sheets error:', error.message);
        if (error.response) {
            console.error('API Response:', JSON.stringify(error.response.data, null, 2));
        }
    }
}

// 3. Strapi Test
async function testStrapi() {
    console.log('\n--- Testing Strapi ---');
    try {
        const apiUrl = process.env.STRAPI_API_URL;
        const apiToken = process.env.STRAPI_API_TOKEN;

        if (!apiUrl || !apiToken) {
            console.error('MISSING: STRAPI_API_URL or STRAPI_API_TOKEN');
            return;
        }

        // Dynamic import for node-fetch is tricky in CJS/ESM mixed envs, checking if global fetch exists (Node 18+)
        if (!global.fetch) {
            console.error("Fetch API not found. Please use Node 18+");
            return;
        }

        const response = await fetch(`${apiUrl}/api/contact-submissions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiToken}`,
            },
            body: JSON.stringify({
                data: {
                    name: 'TEST USER',
                    email: 'test@example.com',
                    company: 'Test Corp',
                    message: 'Integration Test from Script',
                    date: new Date().toISOString(),
                },
            }),
        });

        const text = await response.text();

        if (response.ok) {
            console.log('✅ SUCCESS: Created Strapi entry. Response:', text);
        } else {
            console.error('❌ FAILED: Strapi returned:', response.status, text);
        }

    } catch (error) {
        console.error('❌ FAILED: Strapi error:', error.message);
    }
}

// Run Tests
(async () => {
    await testGoogleSheets();
    await testStrapi();
})();
