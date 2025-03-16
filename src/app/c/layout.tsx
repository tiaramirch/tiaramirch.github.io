import type { Metadata } from "next";
import { Eczar } from "next/font/google";
import ".././globals.css";

const eczar = Eczar({
  variable: "--font-eczar",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiara Mirchandani",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eczar.variable} antialiased`}>{children}</body>
    </html>
  );
}
