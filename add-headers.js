const { google } = require('googleapis');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

async function addHeaders() {
    try {
        // Load credentials from file
        const keyPath = path.join(__dirname, 'google-creds.json');
        const auth = new google.auth.GoogleAuth({
            keyFile: keyPath,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!spreadsheetId) {
            throw new Error('GOOGLE_SHEET_ID is not defined');
        }

        // Add headers to the first row
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: 'Sheet1!A1:E1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [['Date', 'Name', 'Email', 'Company', 'Message']],
            },
        });

        console.log('✅ Headers added to Google Sheet');
    } catch (error) {
        console.error('❌ Failed to add headers:', error.message);
    }
}

addHeaders();
