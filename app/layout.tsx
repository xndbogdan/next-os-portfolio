import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const defaultStyles = `select-none cursor-default overflow-hidden bg-tile-3 text-black`;
export const metadata: Metadata = {
  title: "Next OS - My Portfolio",
  description: "My web development portfolio",
  applicationName: "Next OS",
  authors: [
    { name: "Bogdan-Mihai Mosteanu" },
  ],
  keywords: [
    "Bogdan",
    "independent developer",
    "full-stack developer",
    "Bucharest",
    "Laravel",
    "Vue",
    "Tailwind",
    "Remix",
    "Next.js",
    "window manipulation",
    "music playing",
    "fax",
    "playlist",
    "mobile device",
    "desktop icons",
    "business inquiries",
    "bogdan.mosteanu@hey.com"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${defaultStyles}`}>{children}</body>
    </html>
  );
}
