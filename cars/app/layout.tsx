import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import { Footer } from "@/components";
export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover The Best Cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
