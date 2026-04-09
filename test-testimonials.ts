import { getTestimonials } from "./lib/strapi";

async function test() {
    try {
        const data = await getTestimonials();
        console.log("Total entries in Strapi response:", data?.data?.length);
        console.log("Entry IDs:", data?.data?.map((i: any) => i.id));
        console.log("Entry Names:", data?.data?.map((i: any) => i.attributes?.name || "N/A"));
    } catch (e) {
        console.error("Test failed:", e);
    }
}

test();
