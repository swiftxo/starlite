import { Inter } from "next/font/google";
import "./globals.css";

import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sohan's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
