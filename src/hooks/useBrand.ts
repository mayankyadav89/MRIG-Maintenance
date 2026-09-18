import { useState, useEffect } from 'react';
import { BrandConfig, getBrandConfig } from '../config/siteConfig';

export function useBrand(): { brand: BrandConfig; isLocalhost: boolean } {
  const [brand, setBrand] = useState<BrandConfig>(() => {
    if (typeof window !== 'undefined') {
      return getBrandConfig(window.location.hostname, window.location.search);
    }
    return getBrandConfig();
  });

  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hostname = window.location.hostname;
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
    setIsLocalhost(isLocal);

    const activeBrand = getBrandConfig(hostname, window.location.search);
    setBrand(activeBrand);

    // Update document title dynamically
    document.title = activeBrand.pageTitle;

    // Update Favicon dynamically
    let faviconLink = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(faviconLink);
    }
    faviconLink.href = activeBrand.icon;

    // Update Meta Description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = activeBrand.metaDescription;
    }

    // Update OpenGraph tags
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = activeBrand.pageTitle;
    }
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.content = activeBrand.metaDescription;
    }

  }, []);

  return { brand, isLocalhost };
}
