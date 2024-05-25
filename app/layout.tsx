import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Poetsen_One } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

const poetsenOne = Poetsen_One({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-poetsen-one',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Mane Artistry by Jay',
  description: 'Mane Artistry by Jay',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poetsenOne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
