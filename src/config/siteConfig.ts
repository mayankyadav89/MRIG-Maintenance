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
    pageTitle: 'MRIG - In Progress | Building the Future of Asset Access',
    metaDescription: 'Unlock the value of every asset. We are building the next-generation ecosystem for physical and decentralized asset access.',
    badge: {
      status: 'SYSTEMS UNDER CONSTRUCTION',
      label: 'INITIALIZING ECOSYSTEM'
    },
    hero: {
      tagline: 'ASSET INTELLIGENCE & INFRASTRUCTURE',
      headingPrefix: 'Unlock the Value of',
      headingHighlight: 'Every Asset.',
      headingSuffix: '',
      supportingText: 'We are engineering the future of high-value physical and digital asset access. MRIG is currently under deliberate, confidential development.',
      secondaryText: 'A unified infrastructure is being forged behind the scenes to transform liquidity, verification, and asset utilization.'
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
        title: 'Next-Gen Ecosystem',
        desc: 'Integrated suite connecting verified hardware, commerce, and owners.'
      }
    ],
    contactEmail: 'contact@mrig.tech',
    theme: {
      primary: '#38bdf8', // sky-400
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
    logoAlt: 'Rentro - Smarter Way to Access What You Need',
    pageTitle: 'Rentro by MRIG - Coming Soon | Smarter Asset Access',
    metaDescription: 'A smarter way to access what you need. Rentro is an MRIG technology platform under active development.',
    badge: {
      status: 'DEVELOPMENT IN PROGRESS',
      label: 'COMING SOON'
    },
    hero: {
      tagline: 'AN MRIG ECOSYSTEM PRODUCT',
      headingPrefix: 'A Smarter Way to Access',
      headingHighlight: 'What You Need.',
      headingSuffix: '',
      supportingText: 'Rentro is fundamentally redesigning asset mobility and equipment access. The platform is currently being crafted for launch.',
      secondaryText: 'Experience seamless on-demand access without the overhead of ownership. Powered by MRIG core infrastructure.'
    },
    features: [
      {
        title: 'Instant Access',
        desc: 'On-demand equipment and physical asset availability without friction.'
      },
      {
        title: 'Verified Quality',
        desc: 'Every tier and asset verified through MRIG smart validation.'
      },
      {
        title: 'Ecosystem Powered',
        desc: 'Native integration with MRIG asset custody and flexible agreements.'
      }
    ],
    contactEmail: 'hello@mrig.tech',
    theme: {
      primary: '#34d399', // emerald-400
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

/**
 * Resolves the active brand configuration based on:
 * 1. Production Hostname (Priority 1)
 * 2. URL Query Param `?brand=mrig` or `?brand=rentro` (Enabled in Dev or as explicit fallback)
 * 3. Default Fallback: `mrig`
 */
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
