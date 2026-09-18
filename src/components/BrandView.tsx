import React, { useState } from 'react';
import { BrandConfig } from '../config/siteConfig';
import {
  ShieldCheck,
  Mail,
  Sparkles,
  Check,
  ArrowRight,
  Layers,
  Lock,
  Activity,
  Globe2,
  Terminal,
  Zap
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
      {/* Dynamic Ambient Atmospheric Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[550px] rounded-full blur-[160px] animate-orbit-glow ${brand.theme.cinematicGlowClass}`}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[180px] opacity-40 pointer-events-none"
          style={{ backgroundColor: brand.theme.glowColor }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Dev Switcher for Localhost Preview Testing */}
      {isLocalhost && (
        <aside aria-label="Development switcher" className="relative z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800 text-xs px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Local Preview: <strong className="text-zinc-200">{brand.name}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Simulate Brand:</span>
            <a
              href="?brand=mrig"
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                brand.id === 'mrig'
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
              }`}
            >
              MRIG (mrig.tech)
            </a>
            <a
              href="?brand=rentro"
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                brand.id === 'rentro'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
              }`}
            >
              Rentro (rentro.mrig.tech)
            </a>
          </div>
        </aside>
      )}

      {/* Navigation Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={brand.logo}
            alt={brand.logoAlt}
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            loading="eager"
          />
        </div>

        {/* Live Intentional Status Pill */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-medium tracking-wide backdrop-blur-xl shadow-lg"
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
          <span className="font-mono uppercase font-bold tracking-widest text-[11px]">
            {brand.badge.status}
          </span>
        </div>
      </header>

      {/* Main Content / Interactive Hero */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 sm:py-14 flex flex-col items-center text-center">
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono uppercase tracking-widest text-zinc-400 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
          <span>{brand.hero.tagline}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          {brand.hero.headingPrefix}{' '}
          <span
            className={`bg-gradient-to-r ${brand.theme.gradientFrom} ${brand.theme.gradientTo} bg-clip-text text-transparent drop-shadow-sm`}
          >
            {brand.hero.headingHighlight}
          </span>{' '}
          {brand.hero.headingSuffix}
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-2xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-3">
          {brand.hero.supportingText}
        </p>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
          {brand.hero.secondaryText}
        </p>

        {/* Premium Coming Soon Intentional Marker */}
        <div className="mb-12 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-xs font-semibold tracking-widest text-zinc-200 uppercase shadow-xl backdrop-blur-md">
          <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: brand.theme.statusDot }}></span>
          <span>COMING SOON</span>
        </div>

        {/* Interactive 3D Holographic Display Card */}
        <div className="w-full max-w-4xl mb-16 perspective-container">
          <div className={`relative w-full rounded-2xl p-6 sm:p-8 preserve-3d animate-float-3d shadow-2xl ${brand.theme.cardGlassClass}`}>
            {/* Ambient Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl pointer-events-none" style={{ borderColor: brand.theme.primary }} />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl pointer-events-none" style={{ borderColor: brand.theme.primary }} />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5 layer-mid">
              <div className="flex items-center gap-4 text-left">
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 shadow-inner">
                  <Activity className="w-6 h-6" style={{ color: brand.theme.primary }} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">STATUS MONITOR</div>
                  <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span>{brand.name} Core Protocol</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-300">v0.9.4-rc</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-500" />
                  <span>BUILD: CONFIDENTIAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-zinc-500" />
                  <span className="text-zinc-300">{brand.domain}</span>
                </div>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 layer-front">
              {brand.metrics.map((metric, i) => (
                <div key={i} className="text-left bg-zinc-950/50 p-4 rounded-xl border border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono tracking-wider uppercase font-semibold text-zinc-400 mb-0.5">
                    {metric.label}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Private Preview & Email Capture Box */}
        <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 p-2 sm:p-2.5 rounded-2xl shadow-2xl mb-16">
          {subscribed ? (
            <div className="flex items-center justify-center gap-2.5 py-3.5 px-4 text-emerald-400 text-sm font-medium">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>You're on the priority VIP preview registry.</span>
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
                  className="w-full bg-zinc-950/80 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-zinc-500 transition"
                />
              </div>
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r ${brand.theme.buttonGradient} hover:opacity-95 active:scale-[0.98] transition cursor-pointer shadow-xl`}
              >
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {brand.features.map((feature, idx) => {
            const icons = [
              <ShieldCheck key="1" className="w-5 h-5" style={{ color: brand.theme.primary }} />,
              <Zap key="2" className="w-5 h-5" style={{ color: brand.theme.primary }} />,
              <Layers key="3" className="w-5 h-5" style={{ color: brand.theme.primary }} />
            ];
            return (
              <div
                key={idx}
                className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-zinc-700/90 transition-all duration-300 p-6 rounded-2xl group hover:-translate-y-1 shadow-lg"
              >
                <div className="mb-4 p-2.5 w-fit rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-zinc-200 font-semibold text-base mb-2 group-hover:text-white transition">
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
      <footer className="relative z-10 w-full border-t border-zinc-900 py-8 px-6 mt-16 bg-zinc-950/60 backdrop-blur-lg">
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
            <div className="flex items-center gap-1.5 text-zinc-500 font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>CONFIDENTIAL BUILD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
