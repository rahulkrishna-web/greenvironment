export async function createStrapiEntry(data: { name: string; email: string; company: string; message: string }) {
    try {
        const apiUrl = process.env.STRAPI_API_URL;
        const apiToken = process.env.STRAPI_API_TOKEN;

        if (!apiUrl || !apiToken) {
            console.warn('Strapi credentials not found');
            return false;
        }

        const response = await fetch(`${apiUrl}/api/contact-submissions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiToken}`,
            },
            body: JSON.stringify({
                data: {
                    name: data.name,
                    email: data.email,
                    company: data.company,
                    message: data.message,
                    date: new Date().toISOString(),
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Strapi API error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Successfully created Strapi entry:', result.data.id);
        return true;
    } catch (error) {
        console.error('Error creating Strapi entry:', error);
        return false;
    }
}
