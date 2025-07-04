import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'], // Add more weights like '500', '600', '700' if needed
  variable: '--font-poppins',
});

export const metadata = {
  title: 'G-dot International',
  description: 'Gracefully Delivering Our Trust',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
