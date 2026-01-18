import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Sherwyne Costiniano | Data Scientist & Automation Engineer",
  description:
    "Portfolio of Sherwyne Costiniano - Data Scientist and Automation Engineer specializing in NLP, data analytics, and process automation.",
  keywords: [
    "Data Scientist",
    "Automation Engineer",
    "NLP",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-navy text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
