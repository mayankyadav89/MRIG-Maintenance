import React, { useRef, useState, useEffect } from 'react';
import { BrandConfig } from '../config/siteConfig';

interface BrandViewProps {
  brand: BrandConfig;
  isLocalhost: boolean;
}

export const BrandView: React.FC<BrandViewProps> = ({ brand }) => {
  const mrigCardRef = useRef<HTMLDivElement>(null);
  const rentroStageRef = useRef<HTMLDivElement>(null);
  const [mrigTilt, setMrigTilt] = useState({ x: 0, y: 0 });
  const [rentroTilt, setRentroTilt] = useState({ x: 0, y: 0 });
  const [isMrigHovered, setIsMrigHovered] = useState(false);
  const [isRentroHovered, setIsRentroHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      // MRIG: Slower, restrained, elegant architectural tilt
      setMrigTilt({
        x: -normY * 8,
        y: normX * 8,
      });

      // Rentro: Dynamic, punchy product-stage perspective
      setRentroTilt({
        x: -normY * 14,
        y: normX * 14,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isRentro = brand.id === 'rentro';

  /* =========================================================================
     RENTRO VIEW - Dynamic, High-Energy Product & Venture Showcase
     ========================================================================= */
  if (isRentro) {
    return (
      <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#07080c] text-zinc-100 selection:bg-orange-500/30 selection:text-white font-sans antialiased">
        {/* Dynamic Directional Lighting - High Contrast Vibrant Ambiance */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1300px] max-w-[100vw] h-[700px] rounded-full blur-[200px] opacity-45"
            style={{ backgroundColor: 'rgba(249, 115, 22, 0.24)' }}
          />
          <div
            className="absolute top-1/2 -right-40 w-[800px] h-[800px] rounded-full blur-[240px] opacity-25"
            style={{ backgroundColor: 'rgba(234, 179, 8, 0.16)' }}
          />
          <div
            className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[700px] rounded-full blur-[260px] opacity-20"
            style={{ backgroundColor: 'rgba(249, 115, 22, 0.14)' }}
          />
        </div>

        {/* 1. Rentro Dynamic Header */}
        <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 py-7 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <a href="https://rentro.mrig.tech" className="block focus:outline-none">
              <img
                src="/assets/rentro-logo.png"
                alt="Rentro"
                className="h-8 sm:h-10 w-auto object-contain"
                loading="eager"
              />
            </a>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[10px] font-mono uppercase tracking-widest text-orange-400">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span>MRIG Venture</span>
            </div>
          </div>

          <nav className="flex items-center gap-6 sm:gap-8">
            <a
              href="https://mrig.tech"
              className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              MRIG Ecosystem
            </a>
            <a
              href="mailto:contact@mrig.tech"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-950/40 transition-all duration-200"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* 2. Rentro Hero Section - Expressive Asymmetric Product Stage */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex-1 flex flex-col justify-center py-10 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-orange-500/30 text-xs font-mono uppercase tracking-wider text-orange-400">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>MRIG VENTURE</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.0] mb-6">
                Rentro is an{' '}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  MRIG venture and product.
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-zinc-300 font-medium leading-snug mb-10 max-w-2xl">
                Rentro is an MRIG venture/product.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <a
                  href="mailto:contact@mrig.tech"
                  className="px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-orange-950/50"
                >
                  Contact MRIG
                </a>
                <a
                  href="https://mrig.tech"
                  className="px-8 py-4 rounded-2xl font-bold text-base text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:text-white transition-all"
                >
                  Parent Company (MRIG) &rarr;
                </a>
              </div>
            </div>

            {/* Right Product Showcase Artifact Stage (5 cols) */}
            <div
              className="lg:col-span-5 flex items-center justify-center w-full"
              style={{ perspective: '1100px' }}
            >
              <div
                ref={rentroStageRef}
                onMouseEnter={() => setIsRentroHovered(true)}
                onMouseLeave={() => {
                  setIsRentroHovered(false);
                  setRentroTilt({ x: 0, y: 0 });
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${rentroTilt.x}deg) rotateY(${rentroTilt.y}deg)`,
                  transition: isRentroHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="relative w-80 h-80 sm:w-[440px] sm:h-[440px] flex items-center justify-center"
              >
                {/* Radial Glow Halo */}
                <div
                  className="absolute inset-2 rounded-full blur-3xl opacity-60 pointer-events-none"
                  style={{
                    backgroundColor: 'rgba(249, 115, 22, 0.38)',
                    transform: 'translateZ(-60px)',
                  }}
                />

                {/* Layer 1: Sculpted Deep Gloss Shield */}
                <div
                  className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-zinc-900 via-[#0c0d12] to-black border-2 border-orange-500/30 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                </div>

                {/* Layer 2: Main High-Contrast Icon */}
                <div
                  className="relative z-10 p-10 flex items-center justify-center"
                  style={{ transform: 'translateZ(90px)' }}
                >
                  <img
                    src="/assets/rentro-icon.png"
                    alt="Rentro"
                    className="w-52 h-52 sm:w-64 sm:h-64 object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.85)] select-none pointer-events-none"
                  />
                </div>

                {/* Layer 3: Concentric Floating Accent Ring */}
                <div
                  className="absolute inset-[-8px] rounded-[42px] border border-orange-500/40 pointer-events-none"
                  style={{ transform: 'translateZ(110px)' }}
                />
              </div>
            </div>
          </div>

          {/* 3. Bento Product Architecture Grid */}
          <section className="mt-28 sm:mt-36 w-full pt-16 border-t border-zinc-800/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold block mb-2">
                  PRODUCT INFRASTRUCTURE
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  Engineered by MRIG.
                </h2>
              </div>
              <p className="text-base text-zinc-400 max-w-md font-normal">
                Rentro represents specialized technology engineering developed directly within the MRIG parent ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0c0d14] border border-zinc-800 backdrop-blur-xl shadow-xl hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                    01 / ECOSYSTEM
                  </span>
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">MRIG Venture</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  Rentro is developed within the MRIG corporate ecosystem, leveraging parent resources and strategic engineering leadership.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0c0d14] border border-zinc-800 backdrop-blur-xl shadow-xl hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                    02 / DISCIPLINE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Integrated Product</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  Rentro is an MRIG venture and product, built with a rigorous focus on modern engineering standards and scalable technology.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0c0d14] border border-zinc-800 backdrop-blur-xl shadow-xl hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                    03 / GOVERNANCE
                  </span>
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Direct Inquiries</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  All corporate, partnership, and operational inquiries for Rentro are handled directly through MRIG group communications.
                </p>
              </div>
            </div>
          </section>

          {/* 4. High-Energy Callout */}
          <section className="mt-24 sm:mt-32 w-full text-center py-20 sm:py-28 rounded-3xl bg-gradient-to-b from-zinc-900/80 via-[#0a0b10] to-black border border-zinc-800 relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.25) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 max-w-3xl mx-auto px-6">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold block mb-4">
                COMMUNICATIONS
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
                Connect with MRIG.
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-xl mx-auto font-normal">
                For inquiries regarding Rentro or the broader MRIG venture ecosystem, reach out directly to the group.
              </p>
              <a
                href="mailto:contact@mrig.tech"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:opacity-95 transition-all shadow-xl shadow-orange-950/50"
              >
                <span>contact@mrig.tech</span>
                <span>&rarr;</span>
              </a>
            </div>
          </section>
        </main>

        {/* 5. Rentro Footer */}
        <footer className="relative z-10 w-full border-t border-zinc-800/80 py-10 px-6 sm:px-10 mt-20 bg-zinc-950/70 backdrop-blur">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-3">
              <span className="text-zinc-300 font-bold">Rentro</span>
              <span>—</span>
              <span>An MRIG Venture</span>
            </div>

            <div className="flex items-center gap-8 font-medium">
              <a
                href="https://mrig.tech"
                className="text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                MRIG
              </a>
              <a
                href="mailto:contact@mrig.tech"
                className="text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                Contact
              </a>
              <span>&copy; {new Date().getFullYear()} MRIG</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  /* =========================================================================
     MRIG ECOSYSTEM VIEW - Restrained, Monumental Venture Studio Experience
     ========================================================================= */
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#050507] text-zinc-100 selection:bg-orange-500/25 selection:text-white font-sans antialiased">
      {/* Calm Architectural Ambient Lighting - Deep Obsidian Base */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] max-w-[100vw] h-[600px] rounded-full blur-[190px] opacity-30 transition-all duration-700 pointer-events-none"
          style={{ backgroundColor: 'rgba(249, 115, 22, 0.15)' }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[750px] h-[750px] rounded-full blur-[220px] opacity-15 pointer-events-none"
          style={{ backgroundColor: 'rgba(234, 179, 8, 0.10)' }}
        />
        <div
          className="absolute -bottom-20 left-[-10%] w-[800px] h-[600px] rounded-full blur-[240px] opacity-10 pointer-events-none"
          style={{ backgroundColor: 'rgba(249, 115, 22, 0.10)' }}
        />
      </div>

      {/* 1. MRIG Architectural Header */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 py-8 flex items-center justify-between border-b border-zinc-900/60">
        <div className="flex items-center gap-3">
          <a href="/" className="block focus:outline-none">
            <img
              src="/assets/mrig-logo.png"
              alt={brand.logoAlt}
              className="h-9 sm:h-11 w-auto object-contain"
              loading="eager"
            />
          </a>
        </div>

        <nav className="flex items-center gap-8 sm:gap-12">
          <a
            href="#ventures"
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Ventures
          </a>
          <a
            href="#about"
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="mailto:contact@mrig.tech"
            className="text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all duration-200"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* 2. MRIG Monumental Editorial Hero */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex-1 flex flex-col justify-center py-16 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1 rounded-md bg-zinc-900/70 border border-zinc-800 text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>MRIG ECOSYSTEM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-8">
              Building the{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                ventures that move things forward.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed mb-10 max-w-xl">
              MRIG is the parent company behind a growing ecosystem of technology ventures.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#ventures"
                className="px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:opacity-95 active:scale-[0.98] transition-all shadow-lg"
              >
                Explore Our Ventures
              </a>
              <a
                href="#about"
                className="px-7 py-3.5 rounded-xl font-medium text-sm text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all"
              >
                About MRIG
              </a>
            </div>
          </div>

          {/* Right Column: Architectural 3D Centerpiece (5 cols) */}
          <div
            className="lg:col-span-5 flex items-center justify-center w-full"
            style={{ perspective: '1200px' }}
          >
            <div
              ref={mrigCardRef}
              onMouseEnter={() => setIsMrigHovered(true)}
              onMouseLeave={() => {
                setIsMrigHovered(false);
                setMrigTilt({ x: 0, y: 0 });
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${mrigTilt.x}deg) rotateY(${mrigTilt.y}deg)`,
                transition: isMrigHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative w-72 h-72 sm:w-[400px] sm:h-[400px] flex items-center justify-center"
            >
              {/* Subtle Depth Glow */}
              <div
                className="absolute inset-4 rounded-full blur-3xl opacity-50 pointer-events-none"
                style={{
                  backgroundColor: 'rgba(249, 115, 22, 0.25)',
                  transform: 'translateZ(-50px)',
                }}
              />

              {/* Architectural Frame Panel */}
              <div
                className="absolute inset-0 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-2xl shadow-2xl"
                style={{ transform: 'translateZ(20px)' }}
              >
                <div className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
              </div>

              {/* Graphic Asset */}
              <div
                className="relative z-10 flex items-center justify-center p-8"
                style={{ transform: 'translateZ(75px)' }}
              >
                <img
                  src="/assets/mrig-icon.png"
                  alt={brand.name}
                  className="w-44 h-44 sm:w-60 sm:h-60 object-contain drop-shadow-2xl select-none pointer-events-none"
                />
              </div>

              {/* Hairline Border Accent */}
              <div
                className="absolute inset-[-6px] rounded-[20px] border border-orange-500/20 pointer-events-none"
                style={{ transform: 'translateZ(95px)' }}
              />
            </div>
          </div>
        </div>

        {/* 3. OUR VENTURES Section */}
        <section id="ventures" className="mt-32 sm:mt-48 w-full text-left scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-zinc-900 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-2">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                OUR VENTURES
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Specialized companies conceptualized and engineered within the MRIG parent ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Rentro Card (7 cols) */}
            <div className="lg:col-span-7 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/90 p-8 sm:p-12 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <img
                    src="/assets/rentro-logo.png"
                    alt="Rentro"
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700/50">
                    Venture
                  </span>
                </div>

                <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-lg">
                  Rentro is an MRIG venture/product.
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <a
                  href="https://rentro.mrig.tech"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>Explore Rentro</span>
                  <span>&rarr;</span>
                </a>
                <span className="text-xs font-mono text-zinc-500">rentro.mrig.tech</span>
              </div>
            </div>

            {/* GetNextIn Card (5 cols) */}
            <div className="lg:col-span-5 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/90 p-8 sm:p-12 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-zinc-700 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Venture
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                </div>

                <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight block mb-4">
                  GetNextIn
                </span>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>MRIG Venture</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Large Editorial Philosophy Section */}
        <section className="mt-32 sm:mt-48 w-full text-left py-16 sm:py-24 border-y border-zinc-900 relative">
          <div className="max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-6">
              OUR PHILOSOPHY
            </span>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.12]">
              We build, incubate, and scale specialized technology ventures designed for enduring impact.
            </p>
          </div>
        </section>

        {/* 5. About MRIG Section */}
        <section id="about" className="mt-32 sm:mt-48 w-full text-left scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-3">
                ABOUT THE GROUP
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                MRIG Ecosystem.
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-6">
                MRIG operates as the strategic parent company governing high-conviction ventures across modern technology disciplines.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
                <h3 className="text-base font-semibold text-white mb-2">Venture Incubation</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Ideating and building standalone products from initial architecture to full-scale operations.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-zinc-900/30 border border-zinc-800/80">
                <h3 className="text-base font-semibold text-white mb-2">Shared Infrastructure</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Providing enterprise-grade technical foundations, governance, and resources across all subsidiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Cinematic Contact Section */}
        <section className="mt-32 sm:mt-48 w-full text-center py-20 sm:py-28 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 relative overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.16) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-4">
              DIRECT INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              Connect with MRIG.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              For partnership discussions, investment inquiries, or general communications with MRIG leadership.
            </p>

            <a
              href="mailto:contact@mrig.tech"
              className="text-2xl sm:text-4xl font-bold text-orange-400 hover:text-orange-300 transition-all inline-flex items-center gap-3"
            >
              <span>Contact MRIG →</span>
            </a>
          </div>
        </section>
      </main>

      {/* 7. Minimal Footer */}
      <footer className="relative z-10 w-full border-t border-zinc-900 py-10 px-6 sm:px-10 mt-20 bg-zinc-950/60 backdrop-blur">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="font-semibold text-zinc-400">
            MRIG
          </div>

          <div className="flex items-center gap-8">
            <a
              href="mailto:contact@mrig.tech"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Contact
            </a>
            <span>&copy; {new Date().getFullYear()} MRIG</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
