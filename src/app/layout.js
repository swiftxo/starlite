import { Merriweather, Raleway } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-merriweather",
});

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Sohan's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${merriweather.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}