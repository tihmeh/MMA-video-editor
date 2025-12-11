import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Hype Editor",
  description: "AI-powered hype edit generator for all sports.",
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
