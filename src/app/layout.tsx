
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/custom.css';
import { Header } from '@/components/Header';
import 'animate.css';
import { Footer } from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEA Webstudio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className} style={{overflowX: 'hidden', backgroundColor: '#e7ebff',}}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
