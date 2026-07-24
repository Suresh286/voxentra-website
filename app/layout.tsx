import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Footer, Navbar, SkipLink } from "@/components/layout";
import { FrontendObservability } from "@/components/frontend-observability";
import { site } from "@/content/site";
import { getSiteOrigin } from "@/lib/site-url";
import "./globals.css";

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: getSiteOrigin(),
  title: {
    default: `${site.name} — ${site.category}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/favicon.png", sizes: "512x512" }],
  },
  openGraph: {
    title: `${site.name} — ${site.category}`,
    description: site.description,
    type: "website",
    siteName: site.name,
    images: [
      {
        url: site.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.category}`,
    description: site.description,
    images: [site.ogImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        fontDisplay.variable,
        fontBody.variable,
        fontMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col bg-neutral-background bg-site-grid">
        <FrontendObservability />
        <SkipLink />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="min-w-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
