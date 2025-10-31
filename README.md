# Trade Link - International Trade Solutions

Modern, bilingual website for Trade Link - connecting businesses between UK, Poland, and Spain.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- 🌍 **Bilingual** - English & Polish with easy language switching
- 🎨 **Modern Design** - Premium UI with animations (Framer Motion)
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 16 & Turbopack
- 🎯 **SEO Optimized** - Meta tags, structured data, sitemap
- 📝 **Blog System** - MDX-powered blog with syntax highlighting
- 💬 **WhatsApp Integration** - Floating contact button
- 🗺️ **Interactive Maps** - Animated route visualizations
- ✅ **Production Ready** - Built and tested

## 🎨 Brand Colors

**Primary Navy:**
- HEX: `#1C355E`
- RGB: `(28, 53, 94)`
- Usage: Primary brand color, navigation, headings, buttons

**Accent Orange:**
- HEX: `#E87722`
- RGB: `(232, 119, 34)`
- Usage: Call-to-actions, highlights, accents

**Secondary Light Blue:**
- HEX: `#96B8D4`
- RGB: `(150, 184, 212)`
- Usage: Secondary elements, backgrounds, gradients

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy! ✅

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for detailed guide.

### Other Options

See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Netlify
- Self-hosted (VPS)
- Docker

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: MDX (Blog)
- **i18n**: Custom Context API
- **Build**: Turbopack

## 🌍 Multi-Language

The site supports English and Polish:

- Translations in `/lib/i18n.ts`
- Language switcher in navbar
- Saved preference in localStorage
- Easy to add more languages

## 📝 Blog

Add new blog posts in `/content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2025-10-31"
author: "Author Name"
excerpt: "Short description"
category: "Category"
tags: ["tag1", "tag2"]
image: "/blog/post-image.jpg"
---

Your content here in Markdown...
```

## 🎨 Customization

### Colors

Edit colors in `app/globals.css`:

```css
:root {
  --primary-teal: #0EA5E9;
  --accent-orange: #E87722;
  /* ... */
}
```

### Content

- **Homepage**: `app/page.tsx`
- **Translations**: `lib/i18n.ts`
- **SEO**: `lib/seo.config.ts`
- **WhatsApp Number**: `lib/i18n.ts` (whatsapp section)

## 📦 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Currently no required variables, but template includes:
- Site URL
- Analytics IDs
- Contact form settings
- Social media links

## 📊 Performance

- ✅ Static Generation
- ✅ Image Optimization (AVIF/WebP)
- ✅ Code Splitting
- ✅ Tree Shaking
- ✅ Minification
- ✅ Gzip Compression

## 🎯 SEO

- ✅ Meta tags
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Structured data
- ✅ Sitemap
- ✅ Robots.txt

## 📱 Contact Integration

- **WhatsApp**: Floating button with +44 7429 980548
- **Contact Form**: `/contact` page
- **Social Links**: Footer

## 📄 License

This project is proprietary software for Trade Link.

## 📞 Support

For questions or support:
- WhatsApp: +44 7429 980548

---

**Built with ❤️ for Trade Link by [Lumigentic](https://lumigentic.com)**

🚀 **[Deploy to Vercel](https://vercel.com/new)**
