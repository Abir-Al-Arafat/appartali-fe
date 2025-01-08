import { Outfit } from 'next/font/google';
import "./globals.css";
import Providers from './lib/Providers';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '700'],
});

export const metadata = {
  title: "Appartli",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>

  );
}
