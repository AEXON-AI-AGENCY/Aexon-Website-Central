import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://igiehoneliteacademy.com"),
  applicationName: "Igiehon Elite Academy",
  title: {
    default: "Igiehon Elite Academy | Ireland's #1 Basketball Training Academy",
    template: "%s | Igiehon Elite Academy",
  },
  description:
    "Ireland's #1 basketball academy for elite training, international exposure, and athlete development.",
  keywords: ["basketball academy", "Igiehon Elite Academy", "Ireland basketball"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Igiehon Elite Academy | Ireland's #1 Basketball Training Academy",
    description:
      "Elite basketball training, locations, and official academy merchandise.",
    url: "https://igiehoneliteacademy.com",
    siteName: "Igiehon Elite Academy",
    images: [
      {
        url: "/igiehon/IMG_4820_1770112225339-9kBG3xn9.JPEG",
        width: 5920,
        height: 4000,
        alt: "Igiehon Elite Academy team",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igiehon Elite Academy",
    description:
      "Ireland's #1 basketball academy for elite training and athlete development.",
    images: ["/igiehon/IMG_4820_1770112225339-9kBG3xn9.JPEG"],
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
    <html lang="en" className="h-full">
      <body>{children}</body>
    </html>
  );
}
