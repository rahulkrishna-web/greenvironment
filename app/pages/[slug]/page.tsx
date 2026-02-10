import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/strapi";
import { Metadata } from "next";
import { StrapiBlocksRenderer } from "@/components/StrapiBlocksRenderer";

export const revalidate = 60; // Revalidate every 60 seconds

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const pageData = await getPageBySlug(slug);

    if (!pageData?.data?.[0]) {
        return {
            title: "Page Not Found",
        };
    }

    const page = pageData.data[0];
    // Check for both cases (Title vs title) just in case
    const title = page.Title || page.title || page.attributes?.Title || page.attributes?.title;

    return {
        title: title || "Greenvironment",
        description: "Greenvironment Page",
    };
}

import Footer from "@/components/footer";

// ... existing imports

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const pageData = await getPageBySlug(slug);

    if (!pageData?.data?.[0]) {
        notFound();
    }

    const page = pageData.data[0];

    // Handle case sensitivity and structure variations
    const attributes = page.attributes || page;
    const title = attributes.Title || attributes.title;
    const content = attributes.Body || attributes.content || attributes.blocks;

    if (!title) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl pt-28 pb-16 lg:pt-32 lg:pb-20 flex-grow">
                <div className="space-y-4 mb-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                        Legal
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">{title}</h1>
                </div>

                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    {Array.isArray(content) ? (
                        <StrapiBlocksRenderer blocks={content} />
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
