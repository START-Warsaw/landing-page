import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "START Warsaw – Dare. Build. Belong.",
  description:
    "START Warsaw is the largest student-run entrepreneurship community in Warsaw. We empower the next generation of founders to dare, build, and belong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-navy text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
