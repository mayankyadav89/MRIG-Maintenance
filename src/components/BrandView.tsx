import React, { useState } from 'react';
import { BrandConfig } from '../config/siteConfig';
import { ShieldCheck, Mail, Sparkles, Check, ArrowRight, Layers, Lock, Cpu } from 'lucide-react';

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
    setTimeout(() => {
      // simulate feedback state
    }, 4000);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      {/* Background Decorative Gradients & Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] max-w-[90vw] h-[450px] rounded-full blur-[140px] animate-pulse-glow"
          style={{ backgroundColor: brand.theme.glowColor }}
        />
        <div
          className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
          style={{ backgroundColor: brand.theme.glowColor }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Dev Switcher for Localhost preview testing */}
      {isLocalhost && (
        <div className="relative z-50 bg-zinc-900/90 backdrop-blur border-b border-zinc-800 text-xs px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Local Dev Preview Mode: <strong>{brand.name}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Simulate Brand:</span>
            <a
              href="?brand=mrig"
              className={`px-2.5 py-1 rounded transition ${brand.id === 'mrig' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'}`}
            >
              MRIG (mrig.tech)
            </a>
            <a
              href="?brand=rentro"
              className={`px-2.5 py-1 rounded transition ${brand.id === 'rentro' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'}`}
            >
              Rentro (rentro.mrig.tech)
            </a>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={brand.logo}
            alt={brand.logoAlt}
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            loading="eager"
          />
        </div>

        {/* Live Status Pill */}
        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-wide backdrop-blur-md"
          style={{
            backgroundColor: brand.theme.badgeBg,
            borderColor: brand.theme.badgeBorder,
            color: brand.theme.badgeText
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: brand.theme.statusDot }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: brand.theme.statusDot }}
            />
          </span>
          <span className="uppercase font-semibold tracking-wider text-[11px]">
            <span>COMING SOON</span>
            <span className="text-zinc-600">|</span>
            <span>{brand.badge.label}</span>
          </span>
        </div>
      </header>

      {/* Main Content / Hero */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 sm:py-16 flex flex-col items-center text-center">
        {/* Subtle Tagline / Ecosystem Label */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-[11px] font-mono uppercase tracking-widest text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>{brand.hero.tagline}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          {brand.hero.headingPrefix}{' '}
          <span
            className={`bg-gradient-to-r ${brand.theme.gradientFrom} ${brand.theme.gradientTo} bg-clip-text text-transparent`}
          >
            {brand.hero.headingHighlight}
          </span>{' '}
          {brand.hero.headingSuffix}
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-4">
          {brand.hero.supportingText}
        </p>

        <p className="text-sm sm:text-base text-zinc-500 max-w-xl mb-10 leading-normal">
          {brand.hero.secondaryText}
        </p>

        {/* Early Access / Contact Form Box */}
        <div className="w-full max-w-md bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 p-2 sm:p-2.5 rounded-2xl shadow-2xl mb-14">
          {subscribed ? (
            <div className="flex items-center justify-center gap-2.5 py-3 px-4 text-emerald-400 text-sm font-medium">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>You're on the priority notification list.</span>
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
                  placeholder="Enter email for private preview..."
                  className="w-full bg-zinc-950/60 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-zinc-500 transition"
                />
              </div>
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r ${brand.theme.buttonGradient} hover:opacity-95 active:scale-[0.98] transition cursor-pointer shadow-lg`}
              >
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* 3 Pillar Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {brand.features.map((feature, idx) => {
            const icons = [
              <ShieldCheck key="1" className="w-5 h-5" style={{ color: brand.theme.primary }} />,
              <Layers key="2" className="w-5 h-5" style={{ color: brand.theme.primary }} />,
              <Cpu key="3" className="w-5 h-5" style={{ color: brand.theme.primary }} />
            ];
            return (
              <div
                key={idx}
                className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 hover:border-zinc-700/80 transition p-5 rounded-xl group"
              >
                <div className="mb-3.5 p-2 w-fit rounded-lg bg-zinc-950/80 border border-zinc-800">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-zinc-200 font-semibold text-base mb-1.5 group-hover:text-white transition">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-zinc-900/80 py-8 px-6 mt-12 bg-zinc-950/40 backdrop-blur">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {brand.name} Technologies.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${brand.contactEmail}`}
              className="text-zinc-400 hover:text-zinc-200 transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquiries: {brand.contactEmail}</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <Lock className="w-3.5 h-3.5" />
              <span>Confidential Build</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
