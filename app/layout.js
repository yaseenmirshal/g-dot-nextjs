// app/layout.tsx

import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"], // you can add more weights if needed
  variable: "--font-montserrat", // define CSS variable
});

export const metadata = {
  title: "G-dot International",
  description: "Gracefully Delivering Our Trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
