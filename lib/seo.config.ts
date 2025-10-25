import { Metadata } from 'next';

export const siteConfig = {
  name: 'Trade Link',
  title: 'Trade Link - Customs & Logistics Ltd',
  description: 'Your trusted partner in global trade and logistics. We provide client acquisition for overseas products, door-to-door transport solutions, and import & export customs clearance services.',
  url: 'https://trade-link.co.uk',
  ogImage: '/logo.png',
  links: {
    twitter: 'https://twitter.com/tradelink',
    linkedin: 'https://linkedin.com/company/tradelink',
  },
  contact: {
    email: 'enquiries@trade-link.co.uk',
    phone: '+44 1482 230 748',
    address: '29 Newland Ave, Hull HU5 3BE, UK',
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'customs clearance',
    'import export',
    'logistics',
    'freight',
    'international trade',
    'transport solutions',
    'Hull',
    'UK',
    'BIFA',
    'customs',
    'door-to-door transport',
    'global trade',
  ],
  authors: [
    {
      name: 'Trade Link',
      url: siteConfig.url,
    },
  ],
  creator: 'Lumigentic',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@tradelink',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
