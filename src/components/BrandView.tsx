import React, { useRef, useState, useEffect } from 'react';
import { BrandConfig } from '../config/siteConfig';

interface BrandViewProps {
  brand: BrandConfig;
  isLocalhost: boolean;
}

export const BrandView: React.FC<BrandViewProps> = ({ brand }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rentroCardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [rentroRotate, setRentroRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isRentroHovered, setIsRentroHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      setRotate({
        x: -deltaY * 12,
        y: deltaX * 12,
      });

      setRentroRotate({
        x: -deltaY * 10,
        y: deltaX * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isRentro = brand.id === 'rentro';

  /* =========================================================================
     RENTRO VIEW - Dramatic, High-End Product & Venture Experience
     ========================================================================= */
  if (isRentro) {
    return (
      <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#040507] text-zinc-100 selection:bg-orange-500/25 selection:text-white font-sans antialiased">
        {/* Atmospheric Ambient Glows - Sleek & Mesh (No Dots/Particles) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1200px] max-w-[100vw] h-[650px] rounded-full blur-[190px] opacity-40 pointer-events-none"
            style={{ backgroundColor: 'rgba(249, 115, 22, 0.20)' }}
          />
          <div
            className="absolute top-1/2 -right-32 w-[750px] h-[750px] rounded-full blur-[220px] opacity-20 pointer-events-none"
            style={{ backgroundColor: 'rgba(234, 179, 8, 0.12)' }}
          />
          <div
            className="absolute bottom-[-10%] left-[-10%] w-[850px] h-[650px] rounded-full blur-[240px] opacity-15 pointer-events-none"
            style={{ backgroundColor: 'rgba(249, 115, 22, 0.12)' }}
          />
        </div>

        {/* 1. Rentro Header */}
        <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://rentro.mrig.tech" className="block focus:outline-none">
              <img
                src="/assets/rentro-logo.png"
                alt="Rentro"
                className="h-8 sm:h-10 w-auto object-contain"
                loading="eager"
              />
            </a>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span>MRIG Venture</span>
            </div>
          </div>

          <nav className="flex items-center gap-6 sm:gap-10">
            <a
              href="https://mrig.tech"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              MRIG Ecosystem
            </a>
            <a
              href="mailto:contact@mrig.tech"
              className="text-sm font-medium px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white transition-all duration-200 shadow-sm"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* 2. Rentro Hero Section - Dramatic Asymmetric Product Stage */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex-1 flex flex-col justify-center py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 text-xs font-mono uppercase tracking-widest text-orange-400">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>MRIG VENTURE & PRODUCT</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-8">
                Rentro is an{' '}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  MRIG venture and product.
                </span>
              </h1>

              <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed mb-10 max-w-2xl">
                Rentro is an MRIG venture/product.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="mailto:contact@mrig.tech"
                  className="px-8 py-4 rounded-xl font-medium text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:opacity-95 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-orange-950/40"
                >
                  Contact MRIG
                </a>
                <a
                  href="https://mrig.tech"
                  className="px-8 py-4 rounded-xl font-medium text-base text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all duration-200"
                >
                  Parent Company (MRIG) &rarr;
                </a>
              </div>
            </div>

            {/* Right Interactive 3D Product Artifact Column (5 cols) */}
            <div
              className="lg:col-span-5 flex items-center justify-center w-full"
              style={{ perspective: '1200px' }}
            >
              <div
                ref={rentroCardRef}
                onMouseEnter={() => setIsRentroHovered(true)}
                onMouseLeave={() => {
                  setIsRentroHovered(false);
                  setRentroRotate({ x: 0, y: 0 });
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${rentroRotate.x}deg) rotateY(${rentroRotate.y}deg)`,
                  transition: isRentroHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] flex items-center justify-center"
              >
                {/* Parallax Ambient Radial Glow */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-50 pointer-events-none"
                  style={{
                    backgroundColor: 'rgba(249, 115, 22, 0.30)',
                    transform: 'translateZ(-50px)',
                  }}
                />

                {/* Layer 1: Sculpted Backing Shield */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-black/90 border border-orange-500/20 backdrop-blur-2xl shadow-2xl"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {/* Subtle top glare line */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
                </div>

                {/* Layer 2: Main Floating Icon */}
                <div
                  className="relative z-10 p-10 flex items-center justify-center"
                  style={{ transform: 'translateZ(80px)' }}
                >
                  <img
                    src="/assets/rentro-icon.png"
                    alt="Rentro"
                    className="w-48 h-48 sm:w-60 sm:h-60 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] select-none pointer-events-none"
                  />
                </div>

                {/* Layer 3: Framing Accent Border Ring */}
                <div
                  className="absolute inset-[-6px] rounded-[30px] border border-orange-500/30 pointer-events-none"
                  style={{ transform: 'translateZ(100px)' }}
                />
              </div>
            </div>
          </div>

          {/* 3. High-End Product Architectural System Grid */}
          <section className="mt-28 sm:mt-36 w-full pt-16 border-t border-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-2">
                  PRODUCT ARCHITECTURE
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Engineered by MRIG.
                </h2>
              </div>
              <p className="text-sm text-zinc-400 max-w-md">
                Rentro represents modern technology engineering backed by the resources of the MRIG corporate ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400/90 font-medium">
                    01 / ECOSYSTEM
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">MRIG Venture</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Rentro is developed within the MRIG corporate ecosystem, leveraging parent resources and strategic engineering leadership.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400/90 font-medium">
                    02 / DISCIPLINE
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Integrated Product</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Rentro is an MRIG venture and product, built with a rigorous focus on modern engineering standards and scalable technology.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400/90 font-medium">
                    03 / GOVERNANCE
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Direct Inquiries</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  All corporate, partnership, and operational inquiries for Rentro are handled directly through MRIG group communications.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Large Editorial Callout */}
          <section className="mt-28 sm:mt-36 w-full text-center py-20 sm:py-28 rounded-3xl bg-gradient-to-b from-zinc-900/60 via-zinc-950 to-black border border-zinc-800/90 relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.20) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 max-w-3xl mx-auto px-6">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 block mb-4">
                COMMUNICATIONS
              </span>
              <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
                Connect with MRIG.
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                For inquiries regarding Rentro or the broader MRIG venture ecosystem, reach out directly to the group.
              </p>
              <a
                href="mailto:contact@mrig.tech"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:opacity-95 transition-all shadow-xl shadow-orange-950/40"
              >
                <span>contact@mrig.tech</span>
                <span>&rarr;</span>
              </a>
            </div>
          </section>
        </main>

        {/* 5. Rentro Footer */}
        <footer className="relative z-10 w-full border-t border-zinc-900 py-10 px-6 sm:px-10 mt-20 bg-zinc-950/60 backdrop-blur">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-3">
              <span className="text-zinc-300 font-semibold">Rentro</span>
              <span>—</span>
              <span>An MRIG Venture</span>
            </div>

            <div className="flex items-center gap-8">
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
     MRIG ECOSYSTEM VIEW - Cinematic Venture Holding Experience
     ========================================================================= */
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#050507] text-zinc-100 selection:bg-orange-500/25 selection:text-white font-sans antialiased">
      {/* Ambient Lighting Gradients - Smooth Mesh (No Dots/Particles) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] max-w-[100vw] h-[650px] rounded-full blur-[190px] opacity-40 transition-all duration-700 pointer-events-none"
          style={{ backgroundColor: 'rgba(249, 115, 22, 0.18)' }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[800px] h-[800px] rounded-full blur-[220px] opacity-20 pointer-events-none"
          style={{ backgroundColor: 'rgba(234, 179, 8, 0.12)' }}
        />
        <div
          className="absolute -bottom-20 left-[-10%] w-[900px] h-[700px] rounded-full blur-[240px] opacity-15 pointer-events-none"
          style={{ backgroundColor: 'rgba(249, 115, 22, 0.12)' }}
        />
      </div>

      {/* 1. Header */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 py-8 flex items-center justify-between">
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

        <nav className="flex items-center gap-6 sm:gap-10">
          <a
            href="#ventures"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Ventures
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="mailto:contact@mrig.tech"
            className="text-sm font-medium px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white transition-all duration-200 shadow-sm"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex-1 flex flex-col justify-center py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <span>MRIG ECOSYSTEM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-8">
              Building the{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                ventures that move things forward.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed mb-10 max-w-2xl">
              MRIG is the parent company behind a growing ecosystem of technology ventures.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#ventures"
                className="px-8 py-4 rounded-xl font-medium text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 hover:opacity-95 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-orange-950/40"
              >
                Explore Our Ventures
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-xl font-medium text-base text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all duration-200"
              >
                About MRIG
              </a>
            </div>
          </div>

          {/* Right Column: Hardware-Accelerated 3D Interactive Tilt Centerpiece (5 cols) */}
          <div
            className="lg:col-span-5 flex items-center justify-center w-full"
            style={{ perspective: '1200px' }}
          >
            <div
              ref={cardRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setRotate({ x: 0, y: 0 });
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] flex items-center justify-center"
            >
              {/* Parallax Depth Layer 1: Ambient Blurred Glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-60 pointer-events-none"
                style={{
                  backgroundColor: 'rgba(249, 115, 22, 0.32)',
                  transform: 'translateZ(-50px)',
                }}
              />

              {/* Parallax Depth Layer 2: Geometric Backdrop Panel */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-black/90 border border-orange-500/25 backdrop-blur-2xl shadow-2xl"
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
              </div>

              {/* Parallax Depth Layer 3: Main Real Graphic Asset */}
              <div
                className="relative z-10 flex items-center justify-center p-10"
                style={{
                  transform: 'translateZ(80px)',
                }}
              >
                <img
                  src="/assets/mrig-icon.png"
                  alt={brand.name}
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] select-none pointer-events-none"
                />
              </div>

              {/* Parallax Depth Layer 4: Subtle Floating Accent Ring */}
              <div
                className="absolute inset-[-6px] rounded-[30px] border border-orange-500/30 pointer-events-none"
                style={{
                  transform: 'translateZ(100px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* 3. OUR VENTURES Section */}
        <section id="ventures" className="mt-32 sm:mt-44 w-full text-left scroll-mt-20">
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
            {/* Rentro Card (7 cols - Editorial Showcase) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-black/90 backdrop-blur-2xl border border-zinc-800/90 p-8 sm:p-12 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/15 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <img
                    src="/assets/rentro-logo.png"
                    alt="Rentro"
                    className="h-9 sm:h-11 w-auto object-contain"
                  />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    Active Venture
                  </span>
                </div>

                <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-lg">
                  Rentro is an MRIG venture/product.
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <a
                  href="https://rentro.mrig.tech"
                  className="inline-flex items-center gap-2 text-base font-medium text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore Rentro</span>
                  <span>&rarr;</span>
                </a>
                <span className="text-xs font-mono text-zinc-500">rentro.mrig.tech</span>
              </div>
            </div>

            {/* GetNextIn Card (5 cols - Clean Monolithic Presentation) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900/60 via-zinc-950/80 to-black/90 backdrop-blur-2xl border border-zinc-800/90 p-8 sm:p-12 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-zinc-700 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Venture
                  </span>
                  <span className="w-2 h-2 rounded-full bg-zinc-600" />
                </div>

                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block mb-4">
                  GetNextIn
                </span>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>MRIG Venture</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Large Editorial Statement Section */}
        <section className="mt-32 sm:mt-44 w-full text-left py-16 sm:py-24 border-y border-zinc-900 relative">
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
        <section id="about" className="mt-32 sm:mt-44 w-full text-left scroll-mt-20">
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
              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                <h3 className="text-lg font-semibold text-white mb-2">Venture Incubation</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Ideating and building standalone products from initial architecture to full-scale operations.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                <h3 className="text-lg font-semibold text-white mb-2">Shared Infrastructure</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Providing enterprise-grade technical foundations, governance, and resources across all subsidiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Cinematic Contact Section */}
        <section className="mt-32 sm:mt-44 w-full text-center py-20 sm:py-28 rounded-3xl bg-gradient-to-b from-zinc-900/60 via-zinc-950 to-black border border-zinc-800/90 relative overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.20) 0%, transparent 70%)',
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
              className="text-2xl sm:text-4xl font-bold text-orange-400 hover:text-orange-300 transition-all inline-flex items-center gap-3 group"
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
