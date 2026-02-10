import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { data } from "@/lib/data";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const generateMetadata = () => {
  const {
    companyName: COMPANY_NAME,
    heroDesc: HERO_DESC,
    domain,
  } = data.commonInfo;
  return {
    title: COMPANY_NAME,
    description: HERO_DESC,
    openGraph: {
      title: COMPANY_NAME,
      description: HERO_DESC,
      url: domain,
      siteName: COMPANY_NAME,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cn(cairo.variable, cairo.className)}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
