
export async function createStrapiEntry(data: { name: string; email: string; mobile: string; company: string; message: string }) {
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
                    mobile: data.mobile,
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

/**
 * Helper to get the full Strapi URL
 * @param path The path to append to the Strapi URL
 * @returns The full Strapi URL
 */
export function getStrapiURL(path = "") {
    return `${process.env.STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

/**
 * Helper to flatten query params for Strapi
 */
function flattenQuery(obj: any, prefix = ''): string {
    const query: string[] = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const k = prefix ? `${prefix}[${key}]` : key;
            const v = obj[key];
            if (v !== null && typeof v === 'object') {
                query.push(flattenQuery(v, k));
            } else {
                query.push(`${k}=${encodeURIComponent(v)}`);
            }
        }
    }
    return query.join('&');
}

/**
 * Helper to fetch data from Strapi API
 * @param path The path to fetch from
 * @param urlParamsObject The query params to append to the URL
 * @param options The fetch options
 * @returns The data from Strapi
 */
export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
    try {
        // Merge default and user options
        const mergedOptions = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
            ...options,
        };

        // Build request URL
        const queryString = flattenQuery(urlParamsObject);
        const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;


        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();
        return data;


    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
    }
}

/**
 * specific function to fetch pages by slug
 * @param slug The page slug
 * @returns The page data
 */
export async function getPageBySlug(slug: string) {
    const token = process.env.STRAPI_API_TOKEN;

    if (!token) {
        throw new Error("The Strapi API Token environment variable is not set.");
    }

    const path = `/pages`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            // content: true, // Only if content is a component/dynamic zone, otherwise not needed for rich text field
        },
    };

    const data = await fetchAPI(path, urlParamsObject);
    return data;
}

/**
 * Fetch all case studies
 * @returns List of case studies
 */
export async function getCaseStudies() {
    const token = process.env.STRAPI_API_TOKEN;

    if (!token) {
        throw new Error("The Strapi API Token environment variable is not set.");
    }

    const path = `/case-studies`;
    const urlParamsObject = {
        populate: {
            heroImage: true,
            metrics: true,
        },
        sort: 'createdAt:desc', // Optional: sort by newest
    };

    const data = await fetchAPI(path, urlParamsObject);
    return data;
}

/**
 * Fetch a single case study by slug
 * @param slug The case study slug
 * @returns The case study data
 */
export async function getCaseStudyBySlug(slug: string) {
    const token = process.env.STRAPI_API_TOKEN;

    if (!token) {
        throw new Error("The Strapi API Token environment variable is not set.");
    }

    const path = `/case-studies`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            heroImage: true,
            metrics: true,
            pdf: true,
        },
    };

    const data = await fetchAPI(path, urlParamsObject);
    return data;
}
