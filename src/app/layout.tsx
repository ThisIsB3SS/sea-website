import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/components/Header';
import { Footer } from '@/components/components/Footer';
import { OnlineBusiness, Thing, WithContext } from 'schema-dts';
import '../styles/globals.css';
import '../styles/custom.css';
import 'animate.css';

export function JsonLd<T extends Thing>(json: WithContext<T>): string {
  return `<script type="application/ld+json">
${JSON.stringify(json)}
</script>`;
}

export const MyOnlineBusiness = JsonLd<OnlineBusiness>({
  '@context': 'https://schema.org',
  '@type': 'OnlineBusiness',
  name: 'SEA Webstudio',
  url: 'https://seawebstudio.com/',
  logo: 'https://seawebstudio.com/assets/Logo_SEA_Webstudio.jpg',
  description:
    'SEA Webstudio - votre agence experte en création de sites web, développement sur mesure et stratégies digitales innovantes. Spécialisés dans la conception de solutions web performantes et esthétiques, nous accompagnons les entreprises de toutes tailles dans leur succès en ligne. Découvrez comment nous pouvons transformer votre présence web.  ',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@seawebstudio.com',
    contactType: 'customer service',
    areaServed: 'FR',
    availableLanguage: 'French, English, Spanish',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 rue raymond morel',
    addressLocality: 'Coulommiers',
    postalCode: '7710',
    addressCountry: 'France',
    email: 'contact@seawebstudio.com',
  },
});

export const metadata: Metadata = {
  referrer: 'origin-when-cross-origin',
  keywords: ['Création Web', 'Développement Web', 'Stratégie Web', 'SEA Webstudio', 'Agence Web', 'Webdesign', 'Webmarketing', 'SEO', 'SEA', 'SMM'],
  title: 'SEA Webstudio',
  description:
    'SEA Webstudio - votre agence experte en création de sites web, développement sur mesure et stratégies digitales innovantes. Spécialisés dans la conception de solutions web performantes et esthétiques, nous accompagnons les entreprises de toutes tailles dans leur succès en ligne. Découvrez comment nous pouvons transformer votre présence web.',
  icons: [
    {
      url: '/assets/favicon.ico',
      rel: 'shortcut icon',
      type: 'image/x-icon',
      sizes: 'any',
    },
  ],
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'SEA Webstudio',
    description:
      'SEA Webstudio - votre agence experte en création de sites web, développement sur mesure et stratégies digitales innovantes. Spécialisés dans la conception de solutions web performantes et esthétiques, nous accompagnons les entreprises de toutes tailles dans leur succès en ligne. Découvrez comment nous pouvons transformer votre présence web.',

    url: 'https://seawebstudio.com/',
    siteName: 'SEA Webstudio',
    images: [
      {
        url: 'https://seawebstudio.com/assets/Logo_SEA_Webstudio.jpg', // Must be an absolute URL
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
    description:
      'SEA Webstudio - votre agence experte en création de sites web, développement sur mesure et stratégies digitales innovantes. Spécialisés dans la conception de solutions web performantes et esthétiques, nous accompagnons les entreprises de toutes tailles dans leur succès en ligne. Découvrez comment nous pouvons transformer votre présence web.',

    creator: '@seawebstudio',
    images: ['https://seawebstudio.com/assets/Logo_SEA_Webstudio.jpg'], // Must be an absolute URL
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
