import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const defaultStyles = `select-none cursor-default overflow-hidden bg-tile-3 text-black`;
export const metadata: Metadata = {
  title: "Next OS - My Portfolio",
  description: "My web development portfolio",
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
