export interface BrandTheme {
  primary: string;
  primaryLight: string;
  glowColor: string;
  gradientFrom: string;
  gradientTo: string;
  buttonGradient: string;
  cardGlassClass: string;
  cinematicGlowClass: string;
  accentBorder: string;
}

export interface VentureItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  ctaText: string;
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
  hero: {
    tagline: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    description: string;
  };
  ventures?: VentureItem[];
  parentBrand?: {
    name: string;
    url: string;
    logo: string;
  };
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
    logoAlt: 'MRIG',
    pageTitle: 'MRIG — Technology Ventures & Infrastructure',
    metaDescription: 'MRIG designs, builds, and scales modern technology ventures and physical-digital infrastructure.',
    hero: {
      tagline: 'TECHNOLOGY VENTURES & INFRASTRUCTURE',
      headingPrefix: 'Building Modern',
      headingHighlight: 'Ventures & Infrastructure.',
      headingSuffix: '',
      description: 'MRIG is a technology group focused on building, funding, and scaling specialized digital and physical platform ecosystems.'
    },
    ventures: [
      {
        id: 'rentro',
        name: 'Rentro',
        tagline: 'EQUIPMENT & ASSET MOBILITY',
        description: 'On-demand equipment and physical asset access platform designed for streamlined mobility and flexible resource utilization.',
        url: 'https://rentro.mrig.tech',
        logo: '/assets/rentro-logo.png',
        ctaText: 'Explore Rentro'
      }
    ],
    contactEmail: 'contact@mrig.tech',
    theme: {
      primary: '#f97316',
      primaryLight: '#fdba74',
      glowColor: 'rgba(249, 115, 22, 0.22)',
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
    logoAlt: 'Rentro',
    pageTitle: 'Rentro — Equipment & Asset Mobility Platform',
    metaDescription: 'Rentro is an on-demand equipment and physical asset access platform by MRIG.',
    hero: {
      tagline: 'AN MRIG VENTURE',
      headingPrefix: 'On-Demand Asset &',
      headingHighlight: 'Equipment Mobility.',
      headingSuffix: '',
      description: 'Rentro delivers on-demand access to specialized equipment, machinery, and physical assets with seamless dispatch and verified management.'
    },
    parentBrand: {
      name: 'MRIG',
      url: 'https://mrig.tech',
      logo: '/assets/mrig-logo.png'
    },
    contactEmail: 'hello@mrig.tech',
    theme: {
      primary: '#10b981',
      primaryLight: '#6ee7b7',
      glowColor: 'rgba(16, 185, 129, 0.22)',
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
 *    - rentro.mrig.tech -> Rentro
 *    - mrig.tech / www.mrig.tech -> MRIG
 * 2. URL Query Param ?brand=mrig / ?brand=rentro (Local development only)
 * 3. Default Fallback -> MRIG
 */
export function getBrandConfig(hostname = '', search = ''): BrandConfig {
  const host = hostname.toLowerCase();

  // Production Hostname checks
  if (host === 'rentro.mrig.tech' || host.startsWith('rentro.')) {
    return BRANDS.rentro;
  }

  if (host === 'mrig.tech' || host === 'www.mrig.tech' || host.endsWith('mrig.tech')) {
    return BRANDS.mrig;
  }

  // Development / query override only when on localhost
  const isLocal = host === 'localhost' || host === '127.0.0.1' || host.startsWith('192.168.');
  if (isLocal && search) {
    const params = new URLSearchParams(search);
    const brandParam = params.get('brand')?.toLowerCase();
    if (brandParam && BRANDS[brandParam]) {
      return BRANDS[brandParam];
    }
  }

  // Default fallback
  return BRANDS.mrig;
}
