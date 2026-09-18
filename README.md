# MRIG Ecosystem Maintenance & Coming Soon Portal

A single, unified, high-performance maintenance & "Coming Soon" web application architected for the **MRIG Technology Ecosystem**.

This single codebase dynamically detects the visiting hostname to present tailored branding, styling, metadata, and messaging for:
- **MRIG Core (`mrig.tech` / `www.mrig.tech`)**: Asset Intelligence & Decentralized Infrastructure.
- **Rentro by MRIG (`rentro.mrig.tech`)**: On-demand Equipment & Asset Mobility Platform.

---

## 🏗 Architecture Overview

```
                      ┌─── https://mrig.tech (MRIG Brand)
                      │
                      │
               ┌──────▼──────┐
               │   ONE APP   │
               │             │
               │ MRIG-Maint. │
               │             │
               └──────┬──────┘
                      │
                      └─── https://rentro.mrig.tech (Rentro Brand)
```

### Dynamic Hostname Detection
The application evaluates `window.location.hostname` on load via `src/config/siteConfig.ts` & `src/hooks/useBrand.ts`:
1. **Rentro Brand**: Triggered when the hostname contains `rentro` (e.g. `rentro.mrig.tech`).
2. **MRIG Brand**: Triggered when the hostname contains `mrig.tech` or serves as the safe default fallback.
3. **Localhost & Testing Mode**: When testing on `localhost`, developers can toggle or append `?brand=mrig` or `?brand=rentro` to inspect either experience in real time.

---

## 🎨 Asset Integrity & Brand Features

Both brands use authentic assets from `/assets`:
- `mrig-logo.png` & `mrig-icon.png`
- `rentro-logo.png` & `rentro-icon.png`

The application dynamically updates:
- Brand Logo & Visual Accent Themes
- Browser `<title>` and Dynamic Favicon `<link rel="icon">`
- SEO OpenGraph & Twitter metadata
- Value propositions, status badges, and contact channels

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run Vite development server
npm run dev

# Open in browser:
# Default fallback: http://localhost:5173
# Test MRIG:        http://localhost:5173/?brand=mrig
# Test Rentro:      http://localhost:5173/?brand=rentro
```

---

## 📦 Production Build

```bash
# Compile and build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Connecting Domains (DNS Setup)

Deploy this project on any modern edge platform (Vercel, Cloudflare Pages, Netlify, or AWS Amplify) and point both domains to the same project deployment.

### 1. For `mrig.tech` / `www.mrig.tech`
- Add domain `mrig.tech` to your hosting project.
- **A Record**: `@` $\rightarrow$ Hosting Provider IP (e.g. `76.76.21.21` for Vercel)
- **CNAME Record**: `www` $\rightarrow$ `cname.vercel-dns.com` (or provider CNAME)

### 2. For `rentro.mrig.tech`
- Add subdomain `rentro.mrig.tech` to the exact **same** hosting project.
- **CNAME Record**: `rentro` $\rightarrow$ `cname.vercel-dns.com` (or provider CNAME)

---

## 🛡 Extensibility

To add a future brand or ecosystem service:
1. Place assets in `public/assets/`.
2. Add a new configuration key in `src/config/siteConfig.ts`.
3. Add hostname rule in `getBrandConfig()`.

---

© 2026 MRIG Technologies. All rights reserved.
