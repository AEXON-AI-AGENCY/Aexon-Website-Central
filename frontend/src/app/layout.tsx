import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aexonai.com"),
  applicationName: "Aexon AI",
  title: {
    default: "Aexon AI Agency | Intelligent Business Systems",
    template: "%s | Aexon AI Agency",
  },
  description:
    "Aexon AI builds workflow automations, custom AI agents, and operational systems that help businesses save time, reduce manual work, and improve ROI.",
  keywords: [
    "Aexon AI",
    "AI agency",
    "AI automation",
    "workflow automation",
    "custom AI agents",
    "business automation",
    "AI operations",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aexon AI Agency | Intelligent Business Systems",
    description:
      "AI workflow automation, custom agents, and operational infrastructure for businesses that want clearer systems and better ROI.",
    url: "https://aexonai.com",
    siteName: "Aexon AI Agency",
    images: [
      {
        url: "/aexon-logo.png",
        width: 1536,
        height: 1024,
        alt: "Aexon AI logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aexon AI Agency | Intelligent Business Systems",
    description:
      "AI workflow automation, custom agents, and operational infrastructure for modern businesses.",
    images: ["/aexon-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
