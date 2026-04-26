import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accredian Enterprise | Corporate Training Solutions',
  description: 'Enterprise upskilling programs in AI, Data, Cloud and Leadership',
  openGraph: {
    title: 'Accredian Enterprise | Corporate Training Solutions',
    description: 'Enterprise upskilling programs in AI, Data, Cloud and Leadership',
    type: 'website',
    siteName: 'Accredian Enterprise',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
