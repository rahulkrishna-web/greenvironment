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
  title: "Greenvironment | Sustainable Innovation Studio",
  description:
    "Greenvironment partners with purpose-driven brands to design climate-positive experiences, products, and campaigns backed by science.",
  openGraph: {
    type: "website",
    title: "Greenvironment | Sustainable Innovation Studio",
    url: "https://greenvironment.com",
    description:
      "Discover how Greenvironment blends strategy, design, and technology to accelerate environmental impact.",
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
