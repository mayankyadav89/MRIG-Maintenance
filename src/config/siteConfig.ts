export interface BrandTheme {
  primary: string;
  primaryLight: string;
  glowColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  statusDot: string;
  gradientFrom: string;
  gradientTo: string;
  buttonGradient: string;
}

export interface BrandConfig {
  id: string;
  name: string;
  domain: string;
  logo: string;
  icon: string;
  logoAlt: string;
  pageTitle: string;
  metaDescription: string;
  badge: {
    status: string;
    label: string;
  };
  hero: {
    tagline: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    supportingText: string;
    secondaryText: string;
  };
  features: Array<{
    title: string;
    desc: string;
  }>;
  contactEmail: string;
  theme: BrandTheme;
}

export const BRANDS: Record<string, BrandConfig> = {
  mrig: {
    id: 'mrig',
    name: 'MRIG',
    domain: 'mrig.tech',
    logo: '/assets/mrig-logo.png',
    icon: '/assets/mrig-icon.png',
    logoAlt: 'MRIG - Unlock Value of Every Asset',
    pageTitle: 'MRIG — Unlock the Value of Every Asset | Coming Soon',
    metaDescription: 'MRIG is engineering the future of physical and digital asset access. Systems currently under deliberate development.',
    badge: {
      status: 'IN PROGRESS',
      label: 'CURRENTLY BUILDING'
    },
    hero: {
      tagline: 'ASSET INTELLIGENCE & INFRASTRUCTURE',
      headingPrefix: 'Unlock the Value of',
      headingHighlight: 'Every Asset.',
      headingSuffix: '',
      supportingText: "We're building the future of physical asset access.",
      secondaryText: 'MRIG is currently in development. Something meaningful is being built behind the scenes.'
    },
    features: [
      {
        title: 'Institutional Grade',
        desc: 'Architected with security-first protocols and cryptographic verification.'
      },
      {
        title: 'Frictionless Liquidity',
        desc: 'Unlocking real-world value with modern automated execution.'
      },
      {
        title: 'Unified Ecosystem',
        desc: 'Integrated infrastructure connecting physical hardware, commerce, and verified ownership.'
      }
    ],
    contactEmail: 'contact@mrig.tech',
    theme: {
      primary: '#38bdf8',
      primaryLight: '#bae6fd',
      glowColor: 'rgba(56, 189, 248, 0.15)',
      badgeBg: 'rgba(56, 189, 248, 0.08)',
      badgeBorder: 'rgba(56, 189, 248, 0.25)',
      badgeText: '#7dd3fc',
      statusDot: '#38bdf8',
      gradientFrom: 'from-sky-400',
      gradientTo: 'to-indigo-500',
      buttonGradient: 'from-sky-500 to-indigo-600'
    }
  },
  rentro: {
    id: 'rentro',
    name: 'Rentro',
    domain: 'rentro.mrig.tech',
    logo: '/assets/rentro-logo.png',
    icon: '/assets/rentro-icon.png',
    logoAlt: 'Rentro - A Smarter Way to Access What You Need',
    pageTitle: 'Rentro by MRIG — A Smarter Way to Access What You Need | Coming Soon',
    metaDescription: 'Rentro is an MRIG technology platform under active development. A smarter way to access what you need.',
    badge: {
      status: 'IN PROGRESS',
      label: 'CURRENTLY BUILDING'
    },
    hero: {
      tagline: 'AN MRIG ECOSYSTEM PRODUCT',
      headingPrefix: 'A Smarter Way to Access',
      headingHighlight: 'What You Need.',
      headingSuffix: '',
      supportingText: 'Rentro is currently being built.',
      secondaryText: "We're working behind the scenes to bring the experience to life."
    },
    features: [
      {
        title: 'On-Demand Mobility',
        desc: 'Access equipment and physical assets without the heavy overhead of ownership.'
      },
      {
        title: 'Verified Quality',
        desc: 'Every resource validated and monitored through smart asset checks.'
      },
      {
        title: 'MRIG Core Powered',
        desc: 'Native integration with MRIG decentralized infrastructure and custody protocols.'
      }
    ],
    contactEmail: 'hello@mrig.tech',
    theme: {
      primary: '#34d399',
      primaryLight: '#a7f3d0',
      glowColor: 'rgba(52, 211, 153, 0.15)',
      badgeBg: 'rgba(52, 211, 153, 0.08)',
      badgeBorder: 'rgba(52, 211, 153, 0.25)',
      badgeText: '#6ee7b7',
      statusDot: '#34d399',
      gradientFrom: 'from-emerald-400',
      gradientTo: 'to-teal-500',
      buttonGradient: 'from-emerald-500 to-teal-600'
    }
  }
};

export function getBrandConfig(hostname = '', search = ''): BrandConfig {
  const host = hostname.toLowerCase();

  // Production Hostname checks
  if (host.includes('rentro')) {
    return BRANDS.rentro;
  }

  if (host.includes('mrig.tech') || host.includes('mrig.')) {
    return BRANDS.mrig;
  }

  // Development / query override for local testing
  if (search) {
    const params = new URLSearchParams(search);
    const brandParam = params.get('brand')?.toLowerCase();
    if (brandParam && BRANDS[brandParam]) {
      return BRANDS[brandParam];
    }
  }

  // Default fallback safe
  return BRANDS.mrig;
}
