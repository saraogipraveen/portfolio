import type { Metadata } from "next";
import { Fira_Code, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://praveen-saraogi.com'),
  title: "Praveen Saraogi | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in React, Next.js, and high-performance enterprise applications. Based in Glasgow, UK.",
  openGraph: {
    title: "Praveen Saraogi | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specializing in React, Next.js, and high-performance enterprise applications.",
    url: "https://praveen-saraogi.com", // Adjust as needed
    siteName: "Praveen Saraogi Portfolio",
    images: [
      {
        url: "/profile-photo.jpeg", // Using the updated profile photo
        width: 800,
        height: 600,
        alt: "Praveen Saraogi Profile",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Saraogi | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specializing in React, Next.js, and high-performance enterprise applications.",
    creator: "@saraogipraveen",
    images: ["/profile-photo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} bg-[#05070a] text-zinc-100 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
