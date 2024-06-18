import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const defaultStyles = ``;
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
  metadataBase: new URL("https://nextos.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${defaultStyles}`}>
        {children}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "267f5874766e4d1b960a1ce9183bc200"}'></script>
      </body>
    </html>
  );
}
