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
  cardGlassClass: string;
  cinematicGlowClass: string;
  accentBorder: string;
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
  metrics: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
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
    pageTitle: 'MRIG — Unlock the Value of Every Asset | In Progress',
    metaDescription: "Unlock the value of every asset. We're building the future of physical asset access. Confidential development underway.",
    badge: {
      status: 'IN PROGRESS',
      label: 'SYSTEMS INITIALIZING'
    },
    hero: {
      tagline: 'ASSET INTELLIGENCE & INFRASTRUCTURE',
      headingPrefix: 'Unlock the Value of',
      headingHighlight: 'Every Asset.',
      headingSuffix: '',
      supportingText: "We're building the future of physical asset access.",
      secondaryText: 'MRIG is currently in development. Something meaningful is being built behind the scenes.'
    },
    metrics: [
      {
        value: '100%',
        label: 'VERIFIED CUSTODY',
        detail: 'Cryptographic asset proof'
      },
      {
        value: '0-LATENCY',
        label: 'ACCESS PROTOCOL',
        detail: 'Streamlined physical allocation'
      },
      {
        value: 'INSTITUTIONAL',
        label: 'SECURITY ARCHITECTURE',
        detail: 'Hardware-grade integrity'
      }
    ],
    features: [
      {
        title: 'Institutional Grade',
        desc: 'Security-first architecture designed for mission-critical enterprise and decentralized reliability.'
      },
      {
        title: 'Frictionless Liquidity',
        desc: 'Unlock physical value dynamically without administrative drag or settlement delays.'
      },
      {
        title: 'Unified Ecosystem',
        desc: 'Interconnected asset intelligence layer bridging physical custody and automated access.'
      }
    ],
    contactEmail: 'contact@mrig.tech',
    theme: {
      primary: '#f97316', // Vibrant Orange matching MRIG Logo
      primaryLight: '#fdba74',
      glowColor: 'rgba(249, 115, 22, 0.22)',
      badgeBg: 'rgba(249, 115, 22, 0.10)',
      badgeBorder: 'rgba(249, 115, 22, 0.32)',
      badgeText: '#fb923c',
      statusDot: '#f97316',
      gradientFrom: 'from-amber-400',
      gradientTo: 'to-orange-500',
      buttonGradient: 'from-amber-500 via-orange-500 to-orange-600',
      cardGlassClass: 'glass-panel-orange',
      cinematicGlowClass: 'cinematic-glow-orange',
      accentBorder: 'border-orange-500/30'
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
    metaDescription: "A smarter way to access what you need. Rentro is an MRIG technology platform under active development.",
    badge: {
      status: 'IN PROGRESS',
      label: 'COMING SOON'
    },
    hero: {
      tagline: 'AN MRIG ECOSYSTEM PRODUCT',
      headingPrefix: 'A Smarter Way to Access',
      headingHighlight: 'What You Need.',
      headingSuffix: '',
      supportingText: 'Rentro is currently being built.',
      secondaryText: "We're working behind the scenes to bring the experience to life."
    },
    metrics: [
      {
        value: 'ON-DEMAND',
        label: 'RESOURCE MOBILITY',
        detail: 'Zero ownership overhead'
      },
      {
        value: 'MRIG POWERED',
        label: 'SMART VALIDATION',
        detail: 'Hardware-verified tiers'
      },
      {
        value: '24/7 ECOSYSTEM',
        label: 'ACTIVE ALLOCATION',
        detail: 'Instant equipment access'
      }
    ],
    features: [
      {
        title: 'On-Demand Mobility',
        desc: 'Instant physical asset and equipment availability tailored for teams and high-speed execution.'
      },
      {
        title: 'Verified Quality',
        desc: 'Every resource is inspected, telemetry-tracked, and verified through MRIG smart validation.'
      },
      {
        title: 'Ecosystem Native',
        desc: 'Directly linked with MRIG asset intelligence for automated contracts and flexible custody.'
      }
    ],
    contactEmail: 'hello@mrig.tech',
    theme: {
      primary: '#10b981', // Emerald / Mint matching Rentro brand
      primaryLight: '#6ee7b7',
      glowColor: 'rgba(16, 185, 129, 0.22)',
      badgeBg: 'rgba(16, 185, 129, 0.10)',
      badgeBorder: 'rgba(16, 185, 129, 0.32)',
      badgeText: '#34d399',
      statusDot: '#10b981',
      gradientFrom: 'from-emerald-400',
      gradientTo: 'to-teal-500',
      buttonGradient: 'from-emerald-500 via-teal-500 to-emerald-600',
      cardGlassClass: 'glass-panel-rentro',
      cinematicGlowClass: 'cinematic-glow-rentro',
      accentBorder: 'border-emerald-500/30'
    }
  }
};

/**
 * Resolves the active brand configuration based on:
 * 1. Production Hostname (Priority 1)
 * 2. URL Query Param `?brand=mrig` or `?brand=rentro` (Dev & preview fallback)
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
