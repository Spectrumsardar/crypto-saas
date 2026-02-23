import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licrown",
  description: "Crypto SaaS • USDT (BEP20)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
