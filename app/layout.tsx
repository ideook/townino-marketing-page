import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Townino Design System",
  description: "A compact OpenAI Daybreak inspired design system for Townino marketing pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
