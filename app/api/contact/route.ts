import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/google-sheets';
import { sendNotificationEmail } from '@/lib/email';
import { createStrapiEntry } from '@/lib/strapi';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and Email are required' },
                { status: 400 }
            );
        }

        const data = {
            name,
            email,
            company: company || 'N/A',
            message: message || '',
        };

        // Execute integrations in parallel
        const [sheetResult, emailResult, strapiResult] = await Promise.all([
            appendToSheet([data.name, data.email, data.company, data.message]),
            sendNotificationEmail(data),
            createStrapiEntry(data),
        ]);

        // Check if at least one integration succeeded
        if (!sheetResult && !emailResult && !strapiResult) {
            console.error('All integrations failed');
            // Still return 200 to user if we want them to think it worked, or 500.
            // Let's return 200 but log heavily, as this might be a configuration issue.
            // But typically for a contact form, if everything fails, we should tell the user.
            return NextResponse.json(
                { error: 'Failed to submit form. Please contact us directly.' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            results: {
                googleSheets: sheetResult,
                email: emailResult,
                strapi: strapiResult,
            },
        });
    } catch (error) {
        console.error('Error in contact API:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
