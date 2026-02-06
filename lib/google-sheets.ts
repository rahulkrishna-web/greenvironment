import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function appendToSheet(values: string[]) {
    try {
        const authOptions: any = {
            scopes: SCOPES,
        };

        if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
            try {
                authOptions.credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
            } catch (e) {
                console.error('Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON', e);
            }
        }

        const serviceAccountAuth = new google.auth.GoogleAuth(authOptions);

        const sheets = google.sheets({ version: 'v4', auth: serviceAccountAuth });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!spreadsheetId) {
            throw new Error('GOOGLE_SHEET_ID is not defined');
        }

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:E', // Assuming columns: Timestamp, Name, Email, Company, Message
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[new Date().toISOString(), ...values]],
            },
        });

        console.log('Successfully appended to Google Sheet');
        return true;
    } catch (error) {
        console.error('Error appending to Google Sheet:', error);
        return false;
    }
}
