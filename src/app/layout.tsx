import type { Metadata } from "next";
import { Fira_Code, Space_Grotesk } from "next/font/google";
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
  title: "Praveen Saraogi | Senior UI Engineer",
  description:
    "Senior UI Engineer in Glasgow. Fast delivery, high quality, and end-to-end frontend ownership.",
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
      </body>
    </html>
  );
}
