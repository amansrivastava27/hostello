import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar"; // ✅ Import Navbar component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hostelle - Hostel Booking Made Easy",
  description: "Simple Hostel Booking Website built for Aspirants & Day Scholars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ Temporary mock user (replace with MySQL auth later)
  const user = null; // or { name: "Rahul" }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar always visible */}
        <Navbar user={user} />

        {/* ✅ Push content below fixed navbar */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
