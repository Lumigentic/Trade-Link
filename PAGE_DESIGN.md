# 🎨 Trade-Link Website - Design Documentation

Complete UI/UX Component Reference

---

## 📋 Table of Contents
1. [Brand Colors](#brand-colors)
2. [Typography](#typography)
3. [Layout Components](#layout-components)
4. [Page Sections](#page-sections)
5. [Interactive Elements](#interactive-elements)
6. [Animations & Effects](#animations--effects)
7. [Responsive Breakpoints](#responsive-breakpoints)

---

## 🎨 Brand Colors

### Primary Colors
```css
Navy Blue (Primary):
- HEX: #1C355E
- RGB: (28, 53, 94)
- CSS: var(--primary-navy) / var(--primary-teal) (legacy)
- Usage: Navigation, buttons, accents, icons

Orange (Accent):
- HEX: #E87722
- RGB: (232, 119, 34)
- CSS: var(--accent-orange)
- Usage: CTAs, highlights, hover states

Light Blue (Secondary):
- HEX: #96B8D4
- RGB: (150, 184, 212)
- CSS: var(--secondary-blue)
- Usage: Backgrounds, particles, secondary elements
```

### Secondary Colors
```css
Dark Teal:
- HEX: #1f6371
- CSS: var(--primary-teal-dark)
- Usage: Darker variations, shadows

Dark Orange:
- HEX: #d19422
- CSS: var(--accent-orange-dark)
- Usage: Hover states, emphasis

Blue Gradient Start:
- HEX: #003A6F
- CSS: var(--blue-gradient-start)
- Usage: Hero background, footer

Blue Gradient End:
- HEX: #005B97
- CSS: var(--blue-gradient-end)
- Usage: Gradients, card backgrounds
```

### Neutral Colors
```css
Background: #ffffff (white)
Foreground: #1E293B (dark gray)
Gray-50: #f9fafb (light backgrounds)
Gray-100: #f3f4f6
Gray-600: #4b5563 (body text)
Gray-900: #111827 (headings)
```

---

## 📝 Typography

### Font Families
```css
Headings: 'DM Sans', sans-serif
- Weights: 400, 500, 600, 700
- Usage: All h1-h6, section titles

Body: 'Inter', sans-serif
- Weights: 300, 400, 500, 600, 700, 800
- Usage: Paragraphs, links, UI text

Monospace: Geist Mono
- Usage: Code blocks (if needed)
```

### Text Sizes (Responsive)

#### Mobile → Tablet → Desktop

**Hero Heading:**
- Mobile: `text-3xl` (30px)
- Tablet: `text-4xl` → `text-5xl`
- Desktop: `text-6xl` → `text-7xl` (72px)

**Section Headings (H2):**
- Mobile: `text-3xl` (30px)
- Tablet: `text-4xl` (36px)
- Desktop: `text-5xl` (48px)

**Subsection Headings (H3):**
- Mobile: `text-xl` (20px)
- Tablet: `text-xl` (20px)
- Desktop: `text-2xl` (24px)

**Body Text:**
- Mobile: `text-sm` → `text-base` (14px → 16px)
- Desktop: `text-base` → `text-lg` (16px → 18px)

**Large Paragraph:**
- Mobile: `text-base` (16px)
- Tablet: `text-lg` (18px)
- Desktop: `text-xl` (20px)

---

## 🧱 Layout Components

### 1. **Navbar** (`components/Navbar.tsx`)

**Description:** Fixed navigation bar that changes appearance on scroll

**Features:**
- Fixed position (`fixed top-0`)
- Transparent when at top, white background when scrolled
- Dynamic logo sizing: `h-12` → `h-16` → `h-20`
- Logo text: "Trade" (teal) + "Link" (orange)
- Navigation links change color: white → teal on scroll
- Mobile hamburger menu
- "Get Started" CTA button (orange)

**States:**
- `isScrolled = false`: Transparent background, white text
- `isScrolled = true`: White background, teal text, shadow

**Breakpoints:**
- Mobile: Logo h-12, text-xl, hamburger menu
- Tablet: Logo h-16, text-2xl
- Desktop: Logo h-20, text-3xl, full navigation

---

### 2. **Footer** (`components/Footer.tsx`)

**Description:** Site footer with gradient background

**Layout:** 4-column grid (responsive to 1 column on mobile)

**Sections:**
1. **Company Info:**
   - Logo + text
   - Tagline
   - Social media links (LinkedIn, Twitter)

2. **Quick Links:**
   - About Us
   - Services
   - Blog
   - Contact

3. **Our Services:**
   - Client Acquisition
   - Door-to-Door Transport
   - Import Customs Clearance
   - Export Customs Clearance

4. **Contact Info:**
   - Address with map pin icon
   - Phone with clickable tel: link
   - Email with clickable mailto: link

**Bottom Bar:**
- Copyright notice
- Privacy Policy link
- "Powered by Lumigentic" link
- Certifications (BIFA, FSB, etc.)

**Colors:**
- Background: Blue-teal gradient
- Text: White (`text-gray-100`)
- Hover: Orange accent
- Icons: Orange

---

### 3. **Button Component** (`components/Button.tsx`)

**Variants:**

**Primary:**
```tsx
bg-[var(--primary-teal)]
text-white
hover:bg-[var(--primary-teal-dark)]
```

**Secondary:**
```tsx
bg-[var(--accent-orange)]
text-white
hover:bg-[var(--accent-orange-dark)]
```

**Outline:**
```tsx
border-2 border-[var(--primary-teal)]
text-[var(--primary-teal)]
hover:bg-[var(--primary-teal)]
hover:text-white
```

**Sizes:**
- `sm`: `px-4 py-2 text-sm`
- `md`: `px-6 py-3 text-base` (default)
- `lg`: `px-8 py-4 text-lg`

---

### 4. **Scroll-to-Top Button** (`components/ScrollToTop.tsx`)

**Description:** Floating button that appears after scrolling 300px

**Features:**
- Fixed position: `bottom-6 right-6` (mobile) → `bottom-8 right-8` (desktop)
- Circular shape with teal background
- Up arrow icon
- Fade-in animation (Framer Motion)
- Smooth scroll to top on click

**Responsive Sizing:**
- Mobile: `p-3`, icon `w-5 h-5`
- Desktop: `p-4`, icon `w-6 h-6`

---

### 5. **Particle Background** (`components/ParticleBackground.tsx`)

**Description:** Animated particle network in hero section

**Features:**
- 50 animated particles
- Particles move slowly (0.5px/frame)
- Lines connect particles within 150px
- Light Blue color matching brand (#96B8D4)
- Canvas-based animation
- Performance optimized with requestAnimationFrame

**Technical:**
- Canvas fills hero section
- Particles wrap around edges
- Opacity varies (0.2 - 0.7)
- Particle size: 1-4px

---

## 📄 Page Sections

### **HOME PAGE** (`app/page.tsx`)

---

#### 1. **Hero Section**

**Layout:**
- Full screen height (`min-h-screen`)
- Centered content
- Gradient background: Blue → Teal → Blue

**Background Effects:**
- Particle network (animated canvas)
- 3 animated gradient blobs (purple, yellow, pink)
- Grid pattern overlay (subtle)

**Content:**
- Main heading: Multi-line with orange "Global Trade & Logistics"
- Subheading: Company description
- 2 CTA buttons: "Get Started" (orange), "Our Services" (outline)
- Scroll indicator (animated mouse icon)

**Responsive Text:**
- Heading: `text-3xl` → `text-7xl`
- Paragraph: `text-base` → `text-2xl`

---

#### 2. **Services Section**

**Layout:**
- Light gray background (`bg-gray-50` to `bg-white` gradient)
- 3-column grid (responsive to 1 column)

**Decorative Elements:**
- Gradient orbs in corners (teal & orange, blurred)

**Service Cards:**
- White background
- Gradient icon box (teal → blue)
- Hover effects:
  - Lift up 8px
  - Gradient overlay appears
  - Border changes to teal
- Each card has:
  - Icon in gradient box
  - Title
  - Description
  - "Learn More" button

**Icons:**
- Globe (Client Acquisition)
- Ship (Door-to-Door Transport)
- Package (Customs Clearance)

**Animations:**
- Staggered fade-in (0.1s delay between cards)
- Hover lift animation

---

#### 3. **Why Choose Us Section**

**Layout:**
- 2-column grid (text + stats cards)
- White background

**Left Column - Text:**
- Large heading
- Descriptive paragraph
- 2-column grid of features with icons
- Each feature:
  - Orange icon
  - Feature text
- "Learn More About Us" button

**Right Column - Stats Cards:**
- 2x2 grid
- 4 animated cards with gradient backgrounds
- Staggered animation (0.1s, 0.2s, 0.3s, 0.4s delays)

**Stats Cards:**
1. **20+ Years** (Teal → Blue gradient)
   - Icon: Award
2. **50+ Countries** (Orange gradient, offset top)
   - Icon: Globe
3. **1000+ Shipments** (Blue → Teal gradient)
   - Icon: Ship
4. **100% Satisfaction** (Dark Teal gradient, offset top)
   - Icon: Package

**Responsive:**
- Cards: `p-4` → `p-8`
- Icons: `w-8` → `w-12`
- Numbers: `text-2xl` → `text-3xl`

---

#### 4. **Client Success Stories Section**

**Layout:**
- Gray background (`bg-gray-50`)
- 3-column grid (responsive to 1 column)

**Testimonial Cards:**
- White background with subtle gradient overlay
- Each card has unique gradient:
  - Card 1: Teal → Blue
  - Card 2: Orange → Dark Orange
  - Card 3: Dark Blue → Teal

**Card Structure:**
- Quote icon in gradient box
- Customer testimonial text
- 2x2 metrics grid (gradient cards with white text)
- Author avatar (gradient circle with initial)
- Author name & company

**Animations:**
- Staggered fade-in (0.1s delay)
- Shadow increases on hover

**Responsive:**
- Padding: `p-6` → `p-8`
- Quote icon: `text-2xl` → `text-3xl`
- Testimonial text: `text-sm` → `text-lg`
- Metrics: `text-lg` → `text-2xl`

---

#### 5. **CTA Section**

**Layout:**
- White background
- Centered content
- Max width container

**Content:**
- Large heading: "Ready to Expand Your Global Reach?"
- Descriptive paragraph
- 2 buttons: "Request a Quote" (teal), "View Our Services" (outline)

**Colors:**
- Heading: Dark gray (`text-gray-900`)
- Text: Medium gray (`text-gray-600`)

---

### **ABOUT US PAGE** (`app/about/page.tsx`)

#### Sections:

1. **Hero Banner**
   - Gradient background
   - Large heading: "About Trade Link"
   - Tagline

2. **Mission Statement**
   - 2-column: Text + stats grid
   - 2x2 stats cards with icons

3. **Our Values**
   - 3-column grid
   - White cards with icons
   - Values: Expertise, Reliability, Personal Service

4. **Industries We Serve**
   - 3-column grid (2 columns on tablet)
   - 6 industry cards with gradient backgrounds
   - Industries:
     - E-commerce & Retail (Teal gradient)
     - Manufacturing (Orange gradient)
     - Consumer Goods (Blue gradient)
     - Fashion & Textiles (Dark Teal gradient)
     - Electronics & Technology (Orange gradient)
     - Industrial Equipment (Teal gradient)

5. **CTA Section**
   - "Ready to Work With Us?"
   - Contact button

---

### **SERVICES PAGE** (`app/services/page.tsx`)

**Layout:** 3 main services, each with detailed description

**Services:**
1. Client Acquisition for Overseas Products
2. Door-to-Door Transport Solutions
3. Import & Export Customs Clearance

Each service card includes:
- Large icon
- Service name
- Detailed description
- Key benefits
- "Learn More" button

---

### **CONTACT PAGE** (`app/contact/page.tsx`)

**Layout:** 2-column (form + info)

**Left Column - Contact Form:**
- Name (required)
- Email (required)
- Company (optional)
- Phone (optional)
- Message (required)
- Submit button
- Form connects to Supabase

**Right Column - Contact Info:**
- Google Maps embed
- Address with icon
- Phone with clickable link
- Email with clickable link
- Operating hours

**Form States:**
- Default
- Loading (submitting)
- Success (green message)
- Error (red message)

---

## 🎭 Interactive Elements

### **Hover Effects**

**Navigation Links:**
```css
Default: white (top) / teal (scrolled)
Hover: gray-200 (top) / teal-dark (scrolled)
Transition: 200ms
```

**Buttons:**
```css
Primary: Darkens background
Secondary: Darkens background
Outline: Fills with color, text becomes white
Transition: 200ms
Scale: Subtle (1.0 → 1.02 optional)
```

**Service Cards:**
```css
Default: shadow-lg
Hover: shadow-2xl, lift -8px, gradient overlay appears
Border: gray-100 → teal-30%
Transition: 300ms
```

**Stats Cards (Why Choose Us):**
```css
Animation: Fade-in from bottom (y: 20 → 0)
Staggered: 0.1s, 0.2s, 0.3s, 0.4s
No hover effect (already animated)
```

**Testimonial Cards:**
```css
Animation: Fade-in from bottom (y: 20 → 0)
Staggered: 0.1s delay between cards
Hover: shadow-lg → shadow-2xl
Transition: 300ms
```

**Footer Links:**
```css
Default: text-gray-100
Hover: text-accent-orange
Transition: 200ms
```

---

## ✨ Animations & Effects

### **Framer Motion Animations**

#### **Fade In Up**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```
**Used in:** Section headings, service cards, stats cards

#### **Fade In Left**
```tsx
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
```
**Used in:** Text content in Why Choose Us

#### **Fade In Right**
```tsx
initial={{ opacity: 0, x: 20 }}
whileInView={{ opacity: 1, x: 0 }}
```
**Used in:** Stats cards grid

#### **Staggered Animation**
```tsx
transition={{ duration: 0.5, delay: index * 0.1 }}
```
**Used in:** Service cards, testimonials, stats cards

#### **Hover Lift**
```tsx
whileHover={{ y: -8 }}
```
**Used in:** Service cards

#### **Scroll Indicator**
```tsx
animate={{ y: [0, 10, 0] }}
transition={{ repeat: Infinity, duration: 1.5 }}
```
**Used in:** Hero section scroll indicator

---

### **CSS Animations**

#### **Blob Animation**
```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
Duration: 7s infinite
```
**Used in:** Hero background gradient blobs

#### **Shine Effect**
```css
@keyframes shine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
Duration: 3s infinite
```
**Used in:** Optional card highlights (currently disabled)

---

### **Background Effects**

#### **Grid Pattern**
```css
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
```
**Used in:** Hero section overlay

#### **Gradient Mesh (Animated Blobs)**
- 3 colored circles (purple, yellow, pink)
- `mix-blend-multiply` for color blending
- `blur-xl` for soft edges
- Different animation delays (0s, 2s, 4s)

#### **Particle Network**
- Canvas-based animation
- 50 particles
- Particles connect with lines when within 150px
- Light Blue color (#96B8D4)

---

## 📱 Responsive Breakpoints

### **Tailwind Breakpoints**

```css
/* Mobile First (Default) */
Base: < 640px

/* Small (sm) */
640px: Tablets portrait

/* Medium (md) */
768px: Tablets landscape, small laptops

/* Large (lg) */
1024px: Laptops, small desktops

/* Extra Large (xl) */
1280px: Large desktops

/* 2XL */
1536px: Extra large screens
```

---

### **Component Responsive Behavior**

#### **Navbar**
- **Mobile:** Hamburger menu, logo h-12, text-xl
- **Tablet:** Logo h-16, text-2xl
- **Desktop:** Full nav menu, logo h-20, text-3xl

#### **Hero Section**
- **Mobile:** text-3xl heading, text-base paragraph, single column buttons
- **Tablet:** text-5xl heading, text-lg paragraph
- **Desktop:** text-7xl heading, text-2xl paragraph, row buttons

#### **Service Cards**
- **Mobile:** 1 column
- **Tablet:** 2 columns (if grid-cols-2)
- **Desktop:** 3 columns

#### **Why Choose Us**
- **Mobile:** Stacked (text, then cards)
- **Desktop:** 2-column grid (text left, cards right)

#### **Stats Cards**
- Always 2x2 grid
- Card padding: `p-4` → `p-6` → `p-8`
- Icons: `w-8` → `w-10` → `w-12`
- Text: `text-2xl` → `text-3xl`

#### **Testimonials**
- **Mobile:** 1 column
- **Tablet:** 2 columns
- **Desktop:** 3 columns

#### **Footer**
- **Mobile:** 1 column stacked
- **Tablet:** 2 columns
- **Desktop:** 4 columns

---

## 🎨 Special Design Elements

### **Glassmorphism Effect** (Currently not used, but available)
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### **Gradient Text** (Available utility)
```css
.gradient-text {
  background: linear-gradient(135deg, var(--primary-teal), var(--accent-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### **Card Shadows**
```css
Default: shadow-lg
Hover: shadow-xl or shadow-2xl
Transition: 300ms
```

### **Border Radius**
```css
Buttons: rounded-lg (8px)
Cards: rounded-2xl (16px)
Stats cards: rounded-2xl (16px)
Icons: rounded-xl (12px) or rounded-full
```

---

## 📊 Component Inventory

### **Total Components:**
- Layout: 5 (Navbar, Footer, Button, ScrollToTop, ParticleBackground)
- Pages: 6 (Home, About, Services, Contact, Blog, Privacy)
- Sections: 15+ (Hero, Services, Why Choose, Testimonials, etc.)

### **Icons Used (Lucide React):**
- Navigation: Menu, X, ArrowRight
- Services: Globe, Ship, Package
- Features: Award, Shield, Clock, Users, CheckCircle
- Stats: Award, Globe, Ship, Package
- Contact: Mail, Phone, MapPin
- Social: Linkedin, Twitter
- Industries: Package, Factory, ShoppingBag, Shirt, Zap, Truck
- Other: ArrowUp (scroll to top)

### **Third-party Libraries:**
- **Framer Motion:** Animations
- **Lucide React:** Icons
- **@supabase/supabase-js:** Database connection
- **Next.js:** Framework
- **Tailwind CSS:** Styling

---

## 🎯 Design Principles

### **1. Consistency**
- Same button styles across all pages
- Consistent spacing (padding, margins)
- Unified color palette
- Same animation durations and easings

### **2. Accessibility**
- High contrast text (WCAG AA compliant)
- Focus states on interactive elements
- Alt text on all images
- Semantic HTML structure
- Keyboard navigation support

### **3. Performance**
- Optimized images (Next.js Image component)
- Lazy loading animations (whileInView)
- requestAnimationFrame for canvas
- Minimal re-renders

### **4. Modern Aesthetics**
- Gradients
- Soft shadows
- Rounded corners
- Smooth animations
- AI-inspired particle effects

### **5. User Experience**
- Clear CTAs
- Intuitive navigation
- Feedback on interactions (hover, focus)
- Loading states
- Error messages
- Success confirmations

---

## 🔄 Future Enhancements (Suggestions)

1. **Dark Mode Toggle**
   - User preference detection
   - Smooth theme transition
   - Persistent setting

2. **Advanced Animations**
   - Parallax scrolling
   - 3D card tilts on hover
   - Lottie animations

3. **Micro-interactions**
   - Button ripple effects
   - Form field animations
   - Toast notifications

4. **Accessibility Improvements**
   - Skip to content link
   - ARIA labels everywhere
   - Reduced motion support

5. **Performance Optimizations**
   - Image optimization
   - Font loading strategy
   - Code splitting

---

## 📝 Notes for Developers

### **Adding New Components:**
1. Follow existing naming conventions
2. Use Tailwind utilities (avoid custom CSS)
3. Make responsive by default
4. Add Framer Motion animations
5. Test on mobile, tablet, desktop
6. Document in this file

### **Color Updates:**
- Update CSS variables in `app/globals.css`
- Keep brand colors consistent
- Test contrast ratios

### **Animation Guidelines:**
- Duration: 200-500ms for UI, 1-7s for effects
- Easing: Default or ease-out
- Use `whileInView` with `once: true` for scroll animations
- Stagger delays: 0.1s increments

### **Responsive Design:**
- Mobile first approach
- Test all breakpoints
- Use responsive text sizes
- Stack on mobile, grid on desktop

---

## 🔗 Related Files

- **Colors:** `app/globals.css` (CSS variables)
- **Components:** `components/` directory
- **Pages:** `app/` directory
- **Brand Assets:** `public/logo.png`
- **Config:** `tailwind.config.ts`, `next.config.ts`

---

**Last Updated:** October 31, 2025
**Version:** 1.0
**Maintainer:** Lumigentic (via Claude Code)

---

This documentation provides a complete reference for all UI/UX components in the Trade-Link website. Use it as a guide for consistency, updates, and future development.
