import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import { Header } from '@/components/components/Header';
import { Footer } from '@/components/components/Footer';
import '../styles/globals.css';
import '../styles/custom.css';
import 'animate.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEA Webstudio',
  description: 'SEA Webstudio - Création, Développement & Stratégie Web',
  openGraph: {
    title: 'SEA Webstudio',
    description: 'SEA Webstudio - Création, Développement & Stratégie Web',
    url: 'https://seawebstudio.com/',
    siteName: 'SEA Webstudio',
    images: [
      {
        url: 'https://seawebstudio.com/assets/Logo_entier_SEA_Webstudio.svg', // Must be an absolute URL
        width: 800,
        height: 800,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEA Webstudio',
    description: 'SEA Webstudio - Création, Développement & Stratégie Web',
    creator: '@seawebstudio',
    images: ['https://seawebstudio.com/assets/Logo_entier_SEA_Webstudio.svg'], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
      </head>
      <body
        className={inter.className}
        style={{
          overflowX: 'hidden',
          backgroundColor: '#e7ebff',
          padding: '0',
          margin: '0',
        }}
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
