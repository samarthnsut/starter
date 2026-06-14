import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Techlist Solutions",
    template: "%s | Techlist Solutions",
  },
  description:
    "A platform that takes you from being sort-of-ready to being Recruitment Ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
