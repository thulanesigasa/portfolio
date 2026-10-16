# Ts Industries — Premium Tech Portfolio & Case Studies

A high-performance, visually stunning Next.js and Vanilla CSS portfolio agency website showcasing custom web applications, SaaS platforms, mobile designs, and product case studies developed by **Ts Industries** since 2024.

---

## Core Features

- **Performance-Optimised Architecture:** Built using Next.js 15, with zero runtime fetch requests. Dynamic client data is statically inlined at build time, achieving near-instant load speeds.
- **Self-Hosted Assets:** Complete Google Fonts optimization (`next/font/google`), removing third-party DNS overhead, preventing Cumulative Layout Shift (CLS), and improving privacy.
- **Next-Gen Media Assets:** Entire image assets converted recursively to WebP, decreasing baseline network payloads by over 40% with zero quality loss.
- **Interactive Component Layouts:** Custom touch-enabled CSS scroll-snap carousels designed to present mobile layouts (e.g., side-by-side avatar variants for Bible Diaries) natively without heavy external libraries.
- **Location-Based Dynamic Pricing:** Automatic geo-location lookup that displays custom currencies and pricing rates depending on whether a user is within the Southern African region (ZAR) or international regions (GBP).
- **SEO & Social Metadata:** Fully configured OpenGraph metadata, structured site data, a dynamic `sitemap.xml`, and clean `robots.txt` configuration for Google Bot crawler compliance.
- **Production Security Headers:** Enforced HTTPS compliance (HSTS), XSS protection, anti-clickjacking guards (X-Frame-Options), Referrer-Policy, and a strict Content Security Policy (CSP) whitelisting only local assets and form endpoints.

---

## Project Portfolio Showcase

The repository houses detailed case studies and UI/UX reviews for several active client projects:
- **MedSync (Hokma Tech)** — Clinical session & appointment booking app designed for Delphi REST API backends.
- **Rhyma Music** — Immersive artist branding and web streaming portal.
- **Resume Build (rbptech)** — ATS-optimised SaaS document builder platform.
- **Bible Diaries** — Community reflection app utilizing Supabase and OpenAI AI content moderation.
- **Service Link** — Location-based marketplace connecting clients with local contractors.
- **Ndivhu & Mpho** — Elegant wedding reservation and guest RSVP portal.

---

## Getting Started

### 1. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/thulanesigasa/portfolio.git
cd portfolio
npm install
```

### 2. Run in Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Build & Export
Compile an optimized production-ready static export:
```bash
npm run build
```
The compiled HTML, CSS, and JS assets will be exported directly into the `/out` directory, which is ready to be hosted on any static provider (GitHub Pages, Vercel, Netlify, Cloudflare).

---

## Production Deployment Checklist

To ensure this site stays fully production-ready when deploying live:

1. **CSP & Security Headers:**
   Deploy the build on a CDN that reads the custom `/public/_headers` file (e.g., Cloudflare Pages, Netlify, or Vercel). This ensures the strict Content-Security-Policy and HSTS rules are enforced on all network requests.
2. **Form Activation:**
   Ensure you submit a test contact form and click the one-time **`ACTIVATE FORM`** confirmation link sent to `pharezsigasa@gmail.com` to enable active email notifications.
3. **Custom Domain:**
   Ensure the `metadataBase` in `src/app/layout.tsx` is updated to your production domain name for perfect canonical links and OpenGraph rendering.

---

## License & Credits

- **Copyright:** All rights, designs, source code, and assets are owned by **Ts Industries** and the respective client IP owners (Hokma Tech, rbptech, Rhyma).
- **Development & Design:** Built with excellence by the Ts Industries engineering team, with front-end implementation contributions from Mpho.

## Ts Industries portfolio

The shared visual hierarchy uses a white canvas (60), supporting gold (30), and
yellow action accents (10), with dark text for readability. These are visual
proportions, not a literal pixel quota. The body provides the continuous background;
semantic sections and lists replace unnecessary homepage wrappers and panels.
Services, pricing, journey and FAQs use open layouts. The header and footer display
`public/images/logo/ts-industries-transparent.png`, a transparent-background edit of
the original signature in `public/images/icon/icon.png`. The built-in image editor
was instructed to remove only the white background and excess margins while
preserving the black signature, circular industries text and 2024.

The homepage uses `src/app/studio.css`, with selected projects before services,
process, studio information and the project enquiry form. Existing project stories
share the white, gold and yellow palette; their original content and galleries are retained.
The homepage features screenshots from Bible Diaries and Service Link, alongside
MedSync and Resume Build. All project assets belong to this portfolio.

Project enquiries use the existing FormSubmit endpoint. Service, optional budget
and timeline are included in the message. Native field validation, a honeypot,
a request timeout and visible failure/retry feedback are provided. A successful
response confirms submission to FormSubmit, not delivery to the recipient inbox.
Verify receipt with a real enquiry after deployment.

Build with `npm ci && npm run build`. The existing Pages workflow publishes `out/`
when changes reach `main`. Security headers configured in `next.config.ts` are not
applied by a static export; they require support from the hosting layer.

Mobile project screenshots use a shared `PhonePreview` component in the homepage
and app galleries. CSS renders a gold device frame around screenshots in their
original colours. Native dialog previews support Escape, close and backdrop
dismissal. The
carousel uses slide offsets for navigation and scopes scrollbar styling to its rail.
