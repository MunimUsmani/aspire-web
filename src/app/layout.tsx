import type { Metadata } from "next";
import { Unbounded } from "next/font/google"; 
import "./globals.css";

const unbounded = Unbounded({
  weight: ['400', '500', '600', '700'], 
  style: ['normal'],
  variable: "--font-unbounded", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abells HR Solutions",
  description: "Your trusted partner in HR recruitment and business development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
