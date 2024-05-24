import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AosProvider from "./AosProvider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANIHOST - Software House, Hosting, Domain & IT Consultant di Semarang",
  description: "Perusahaan Software Software House, Hosting, Domain & IT Consultant di Semarang",
  openGraph: {
    type: "website",
    title: "ANIHOST - Software House, Hosting, Domain & IT Consultant di Semarang",
    description: "Perusahaan Software Software House, Hosting, Domain & IT Consultant di Semarang",
    url: "https://www.anihost.com",
    siteName: "ANIHOST",
    locale: "id",
    alternateLocale: "en",
  },
  twitter: {
    card: "summary",
    title: "ANIHOST - Software House, Hosting, Domain & IT Consultant di Semarang",
    description: "Perusahaan Software Software House, Hosting, Domain & IT Consultant di Semarang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-slate-900 text-white", inter.className)}>
        <AosProvider>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
