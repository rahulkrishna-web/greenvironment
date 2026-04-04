import React from "react";
import PartnersHero from "@/components/partners-hero";
import Footer from "@/components/footer";
import PartnersGrid, { Client } from "@/components/partners-grid";
import { getClients, getStrapiURL } from "@/lib/strapi";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function PartnersPage() {
  let clients: Client[] = [];
  
  try {
    const strapiData = await getClients();
    clients = (strapiData?.data || []).map((item: any) => {
      const attr = item.attributes || item;
      const logo = attr.logo?.url || attr.logo?.data?.attributes?.url;
      return {
        id: item.id.toString(),
        name: attr.name,
        logo: logo ? getStrapiURL(logo) : "/clients/placeholder.png",
        sector: attr.sector,
        properties: attr.properties,
      };
    });
  } catch (error) {
    console.error("Error fetching clients on server:", error);
  }

  return (
    <main className="min-h-screen bg-white flex flex-col pt-12">
      <PartnersHero />

      <section className="max-w-7xl mx-auto px-6 py-16 w-full flex-grow">
        <PartnersGrid initialClients={clients} />
      </section>

      <Footer />
    </main>
  );
}
