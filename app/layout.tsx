import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Sherwyne Costiniano | Data Scientist & Automation Engineer",
    template: "%s | Sherwyne Costiniano",
  },
  description:
    "Portfolio of Sherwyne Costiniano - Data Scientist and Automation Engineer specializing in NLP, data analytics, and process automation. View my projects and get in touch.",
  keywords: [
    "Data Scientist",
    "Automation Engineer",
    "NLP",
    "Natural Language Processing",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Data Analytics",
    "AI",
    "Flask",
    "API Development",
  ],
  authors: [{ name: "Sherwyne Costiniano" }],
  creator: "Sherwyne Costiniano",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://shercostiniano.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sherwyne Costiniano Portfolio",
    title: "Sherwyne Costiniano | Data Scientist & Automation Engineer",
    description:
      "Portfolio of Sherwyne Costiniano - Data Scientist and Automation Engineer specializing in NLP, data analytics, and process automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sherwyne Costiniano - Data Scientist & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherwyne Costiniano | Data Scientist & Automation Engineer",
    description:
      "Portfolio of Sherwyne Costiniano - Data Scientist and Automation Engineer specializing in NLP, data analytics, and process automation.",
    creator: "@shercostiniano",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
