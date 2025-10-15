import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/page-transition"; // we'll create this next
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beautiful Shadcn UI Landing Page",
  description:
    "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
  openGraph: {
    type: "website",
    title: "Shadcn Landing Page",
    url: "https://shadcn-landing-page.vercel.app",
    description:
      "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Page Transition Wrapper */}
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
