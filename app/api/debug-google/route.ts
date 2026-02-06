import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
    const results = {
        envVarExists: false,
        envVarLength: 0,
        parsedSuccessfully: false,
        sheetIdExists: false,
        sheetId: '',
        appendSuccess: false,
        error: null as any,
    };

    try {
        const jsonCreds = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
        results.envVarExists = !!jsonCreds;
        results.envVarLength = jsonCreds ? jsonCreds.length : 0;

        results.sheetIdExists = !!process.env.GOOGLE_SHEET_ID;
        results.sheetId = process.env.GOOGLE_SHEET_ID || '';

        if (!jsonCreds) {
            throw new Error('GOOGLE_APPLICATION_CREDENTIALS_JSON is missing');
        }

        let credentials;
        try {
            credentials = JSON.parse(jsonCreds);
            results.parsedSuccessfully = true;
        } catch (e: any) {
            throw new Error(`JSON Parse Error: ${e.message}`);
        }

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:E',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[new Date().toISOString(), 'DEBUG ROUTE', 'debug@route.com', 'Debug Route', 'Direct API Test']],
            },
        });

        results.appendSuccess = true;

        return NextResponse.json({ success: true, debug_info: results });

    } catch (error: any) {
        results.error = {
            message: error.message,
            stack: error.stack,
            // Google APIs often put details in response.data
            details: error.response ? error.response.data : 'No additional API details',
        };

        return NextResponse.json({ success: false, debug_info: results }, { status: 500 });
    }
}

// Make it dynamic to avoid caching issues on Vercel
export const dynamic = 'force-dynamic';
