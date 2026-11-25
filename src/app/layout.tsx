import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/shared/components/layout/Footer";
import { Header } from "@/shared/components/layout/Header";
import { MotionProvider } from "@/shared/components/MotionProvider";
import { site } from "@/shared/content/site";
import { getSiteUrl } from "@/shared/lib/site-url";
import { fontVariables } from "@/shared/styles/fonts";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${site.name} — ${site.role}, Melbourne`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.links.linkedin }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f6f3fc",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={fontVariables}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <div className="relative overflow-x-clip">
            <Header />
            <main id="main" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer />
          </div>
        </MotionProvider>
        {/* Only on Vercel builds: elsewhere /_vercel/insights doesn't exist. */}
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
