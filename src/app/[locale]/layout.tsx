import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AosProvider from "./AosProvider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

library.add(fas, far, fab);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

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

export async function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = await getMessages();

  return (
    <html lang={params.locale} className={`${inter.variable} ${quicksand.variable}`}>
      <body className={cn("bg-slate-900 text-white")}>
        <NextIntlClientProvider messages={messages}>
          <AosProvider>
            <header>
              <Navbar />
            </header>
            {children}
            <Footer />
          </AosProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
