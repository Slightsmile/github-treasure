import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://github-treasures.vercel.app";
const description =
  "Discover underrated GitHub projects and hidden open-source gems — a hand-curated, searchable directory of the best overlooked repositories worth knowing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GitHub Treasures — Discover Underrated GitHub Projects & Hidden Gems",
    template: "%s | GitHub Treasures",
  },
  description,
  keywords: [
    "underrated github projects",
    "hidden github gems",
    "best open source projects",
    "underrated open source",
    "github goldmines",
    "open source directory",
    "github discovery",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "GitHub Treasures — Discover Underrated GitHub Projects & Hidden Gems",
    description,
    url: siteUrl,
    siteName: "GitHub Treasures",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GitHub Treasures — Discover Underrated GitHub Projects & Hidden Gems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Treasures — Discover Underrated GitHub Projects & Hidden Gems",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider delay={200}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
