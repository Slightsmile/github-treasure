import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GitHub Treasures — Discover Hidden GitHub Goldmines",
    template: "%s | GitHub Treasures",
  },
  description:
    "A curated collection of underrated open-source GitHub projects worth knowing.",
  openGraph: {
    title: "GitHub Treasures",
    description:
      "A curated collection of underrated open-source GitHub projects worth knowing.",
    url: siteUrl,
    siteName: "GitHub Treasures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Treasures",
    description:
      "A curated collection of underrated open-source GitHub projects worth knowing.",
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
