const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const sectorMapping = {
    'Residential': [
        "Brigade Gateway Apartments Owners Association (BGAOA)",
        "Brigade Metropolis Apartment Owners Welfare Assosiation",
        "Chakolas Pinnacle Owners Association",
        "Cumins Genesis Apartment Owners Association",
        "Edenpark Residents Welfare Association",
        "Lancor Lumina",
        "Navin's Starwoods Towers Owners Welfare Association",
        "PURVA WINDERMERE APARTMENT OWNERS ASSOCIATION",
        "intelligent community management private limited"
    ],
    'Hospitality': [
        "APEEJAY SURRENDRA PARK HOTELS LIMITED",
        "Accor",
        "BIRD AIRPORT HOTEL PRIVATE LIMITED",
        "BRIGADE HOTEL VENTURES LIMITED",
        "Courtyard by Marriott Chennai",
        "Crowne Plaza Kochi",
        "GOLDEN JUBILEE HOTELS PRIVATE LIMITED",
        "JAI MAHAL Palace", // Note: Filename was JAI MAHAL PALACE
        "JAI MAHAL PALACE",
        "MFAR HOTELS AND RESORTS LTD",
        "Mahindra Holidays And Resorts India Ltd",
        "Marriot Bonvoy",
        "Marriott Hotels India Private Limited",
        "PRESTIGE HOSPITALITY VENTURES LIMITED",
        "Park Hyatt",
        "RAMBAGH PALACE",
        "SAMHI HOTELS LIMITED",
        "SRP PROSPERITA HOTEL VENTURES LIMITED",
        "THE RESIDENCY TOWERS",
        "Taj Hotels",
        "The Indian Hotels Company Limited (IHCL)",
        "The Leela Palaces, Hotels and Resorts",
        "VIWA ECO CLUB",
        "WONDERLA HOLIDAYS LTD"
    ],
    'Commercial Real Estate': [
        "ADOBE SYSTEMS INDIA PRIVATE LTD",
        "ASCENDAS IT PARK (CHENNAI) LTD",
        "ASTER TECHNOLOGIES",
        "Amazon",
        "Ambit IT Park",
        "Bagmane Group",
        "Bilaspur Smart City Limited (BSCL)",
        "Brigade Group",
        "Brookfield",
        "DIVYASREE INFRASTRUCTURE PROJECTS PRIVATE LIMITED",
        "ECOTECH ENGINEERING CONSULTANCY PRIVATE LIMITED",
        "EMBASSY SERVICES PRIVATE LIMITED",
        "ERNET INDIA",
        "INDIAN INSTITUTE OF TECHNOLOGY MADRAS",
        "KSPCB",
        "Karnataka Neeravari Nigam Limited",
        "Knowledge Realty Trust",
        "NESCO Limited",
        "PRESTIGE PROPERTY MANAGEMENT & SERVICES",
        "Prestige Estate Projects Limited",
        "RMZ CITY ESTATES PRIVATE LIMITED",
        "RMZ Infinity (Chennai) Limited",
        "SILA SOLUTIONS PRIVATE LIMITED",
        "Tata_Consultancy_Services"
    ],
    'Healthcare': [
        "BABY MEMORIAL HOSPITAL LIMITED",
        "M S RAMAIAH UNIVERSITY OF APPLIED SCIENCES",
        "Nauravi Hospital",
        "Ramaiah India"
    ],
    'Industrial': [
        "ABA Aqua Tech Pvt Ltd",
        "AMBATTUR FASHION INDIA PRIVATE LIMITED",
        "BANKA BIOLOO LIMITED",
        "Baby Marine",
        "BlueDrop Enviro",
        "COSMOS PURIFICATION SYSTEMS PRIVATE LIMITED",
        "DANFOSS INDUSTRIES PRIVATE LIMITED",
        "Dewborn Chemicals Mfg Pvt Ltd.",
        "ENVIROBOTICS INDIA PRIVATE LIMITED",
        "FILTRA CONSULTANTS & ENGINEERS LTD,VASAI",
        "GEO ENVIRO SOLUTION",
        "GOOD CROP INDIA LLP",
        "IFB",
        "INTERNATIONAL BAKERY PRODUCTS LTD",
        "LARSEN AND TOUBRO - Water Technology Centre",
        "MAHINDRA AND MAHINDRA LTD",
        "MURALI SESH ENVIRO ENGINEERS PRIVATE LIMITED",
        "REDSEA ECO SOLUTIONS AND INSTRUMENTS PRIVATE LIMITED",
        "Rane NSK Steering Systems Pvt Ltd, Guducherry",
        "Rane",
        "S R Paryavaran"
    ]
};

async function getClients() {
    const response = await fetch(`${STRAPI_API_URL}/api/clients?pagination[limit]=500`, {
        headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        }
    });
    const data = await response.json();
    return data.data || [];
}

async function updateClientSector(documentId, sector) {
    console.log(`Updating client ${documentId} with sector: ${sector}`);
    const response = await fetch(`${STRAPI_API_URL}/api/clients/${documentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        },
        body: JSON.stringify({
            data: {
                sector: sector
            }
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to update client ${documentId}: ${errorText}`);
    }
}

async function main() {
    try {
        const clients = await getClients();
        console.log(`Found ${clients.length} clients in Strapi.`);

        for (const client of clients) {
            const name = client.name;
            const docId = client.documentId;
            let sector = null;

            for (const [s, names] of Object.entries(sectorMapping)) {
                if (names.includes(name)) {
                    sector = s;
                    break;
                }
            }

            if (sector && docId) {
                await updateClientSector(docId, sector);
            } else if (!docId) {
                console.warn(`No documentId found for client: ${name}`);
            } else {
                console.warn(`No sector found for client: ${name}`);
            }
        }

        console.log('Finished updating sectors.');
    } catch (error) {
        console.error('Fatal error:', error);
    }
}

main();
