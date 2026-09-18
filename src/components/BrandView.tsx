import React, { useState } from 'react';
import { BrandConfig } from '../config/siteConfig';
import {
  Mail,
  Sparkles,
  Check,
  ArrowRight,
  Lock,
  ExternalLink,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface BrandViewProps {
  brand: BrandConfig;
  isLocalhost: boolean;
}

export const BrandView: React.FC<BrandViewProps> = ({ brand, isLocalhost }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#050507] text-zinc-100 selection:bg-white/10 selection:text-white">
      {/* Ambient Lighting & Backdrop Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[550px] rounded-full blur-[160px] animate-orbit-glow ${brand.theme.cinematicGlowClass}`}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[180px] opacity-35 pointer-events-none"
          style={{ backgroundColor: brand.theme.glowColor }}
        />
        {/* Fine background grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Dev Switcher for Localhost Simulation */}
      {isLocalhost && (
        <aside aria-label="Development switcher" className="relative z-50 bg-zinc-950/95 backdrop-blur border-b border-zinc-800 text-xs px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Local Dev Preview: <strong className="text-zinc-200">{brand.name}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Simulate Hostname:</span>
            <a
              href="?brand=mrig"
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                brand.id === 'mrig'
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
              }`}
            >
              mrig.tech
            </a>
            <a
              href="?brand=rentro"
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                brand.id === 'rentro'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
              }`}
            >
              rentro.mrig.tech
            </a>
          </div>
        </aside>
      )}

      {/* Navigation / Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={brand.logo}
            alt={brand.logoAlt}
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            loading="eager"
          />
        </div>

        {/* Parent or Ecosystem Link */}
        {brand.parentBrand ? (
          <a
            href={brand.parentBrand.url}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition shadow-sm"
          >
            <span>Part of {brand.parentBrand.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
            <span>Venture Studio</span>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-10 sm:py-16 flex flex-col items-center text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono uppercase tracking-widest text-zinc-400 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>{brand.hero.tagline}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          {brand.hero.headingPrefix}{' '}
          <span
            className={`bg-gradient-to-r ${brand.theme.gradientFrom} ${brand.theme.gradientTo} bg-clip-text text-transparent`}
          >
            {brand.hero.headingHighlight}
          </span>{' '}
          {brand.hero.headingSuffix}
        </h1>

        {/* Supporting Description */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-10">
          {brand.hero.description}
        </p>

        {/* Ventures or Focus Showcase (MRIG Specific) */}
        {brand.ventures && brand.ventures.length > 0 && (
          <div className="w-full max-w-2xl mb-12 text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3 px-1 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>VENTURE ECOSYSTEM</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {brand.ventures.map((venture) => (
                <div
                  key={venture.id}
                  className="group relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/90 hover:border-zinc-700/90 p-6 rounded-2xl transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={venture.logo}
                        alt={venture.name}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {venture.tagline}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {venture.description}
                  </p>

                  <a
                    href={venture.url}
                    className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition"
                  >
                    <span>{venture.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact & Inquiries Box */}
        <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 p-2.5 rounded-2xl shadow-2xl">
          {subscribed ? (
            <div className="flex items-center justify-center gap-2.5 py-3 px-4 text-emerald-400 text-sm font-medium">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>Thank you. We will be in touch shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email for inquiries..."
                  className="w-full bg-zinc-950/80 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-zinc-500 transition"
                />
              </div>
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r ${brand.theme.buttonGradient} hover:opacity-95 active:scale-[0.98] transition cursor-pointer shadow-lg`}
              >
                <span>Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-zinc-900 py-8 px-6 mt-16 bg-zinc-950/60 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {brand.name}.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${brand.contactEmail}`}
              className="text-zinc-400 hover:text-zinc-200 transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact: {brand.contactEmail}</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-500 font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>SECURE INFRASTRUCTURE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
