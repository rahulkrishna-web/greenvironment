import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/page-transition"; // we'll create this next
import PreviewGate from "@/components/preview-gate";

const headingFont = localFont({
  src: [
    { path: "../public/fonts/neutronic/Neutronic-Regular.otf", weight: "400", style: "normal" },
    // Use regular cut for heavier weights too to avoid the compressed width
    { path: "../public/fonts/neutronic/Neutronic-Regular.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/neutronic/Neutronic-Regular.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = localFont({
  src: [
    { path: "../public/fonts/myriad/Myriad Pro Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/myriad/Myriad Pro Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/myriad/Myriad Pro Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/myriad/Myriad Pro Bold Italic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/myriad/Myriad Pro Light.otf", weight: "300", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
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
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Page Transition Wrapper */}
          <PreviewGate>{children}</PreviewGate>
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}
