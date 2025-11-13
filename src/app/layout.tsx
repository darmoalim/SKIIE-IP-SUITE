import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "SKUAST-K IP SUITE | Patent Portfolio of SKIIE Centre",
  description:
    "Explore the comprehensive patent portfolio of SKUAST-K's Innovation, Incubation & Entrepreneurship Centre (SKIIE) - showcasing 78 groundbreaking innovations in agricultural sciences and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
