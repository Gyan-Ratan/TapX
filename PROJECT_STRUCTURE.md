# TapX - Proactiv Marketing Template - Project Structure & Component List

## 📁 Complete File Structure

```
TapX/
├── 📁 app/                          # Next.js 14 App Router
│   ├── 📁 (auth)/                   # Authentication route group
│   │   └── 📁 register/
│   │       └── 📄 page.tsx          # Registration page
│   ├── 📁 (marketing)/              # Marketing route group
│   │   ├── 📁 blog/                 # Blog section
│   │   │   ├── 📁 changelog-for-2024/
│   │   │   │   ├── 📄 page.mdx      # Blog post content
│   │   │   │   └── 📄 thumbnail.jpeg
│   │   │   ├── 📁 cool-things-to-do-with-ai/
│   │   │   │   ├── 📄 page.mdx
│   │   │   │   └── 📄 thumbnail.jpeg
│   │   │   ├── 📁 how-companies-are-working-without-ai/
│   │   │   │   ├── 📄 page.mdx
│   │   │   │   └── 📄 thumbnail.jpeg
│   │   │   ├── 📁 top-5-llm-of-all-time/
│   │   │   │   ├── 📄 page.mdx
│   │   │   │   └── 📄 thumbnail.jpeg
│   │   │   ├── 📁 what-is-ai-anyway/
│   │   │   │   ├── 📄 page.mdx
│   │   │   │   └── 📄 thumbnail.jpeg
│   │   │   ├── 📁 what-is-social-media-marketing/
│   │   │   │   ├── 📄 page.mdx
│   │   │   │   └── 📄 thumbnail.jpeg
│   │   │   └── 📄 page.tsx          # Blog listing page
│   │   ├── 📁 contact/
│   │   │   └── 📄 page.tsx          # Contact page
│   │   ├── 📁 features/
│   │   │   └── 📄 page.tsx          # Features page
│   │   ├── 📁 pricing/
│   │   │   └── 📄 page.tsx          # Pricing page
│   │   ├── 📄 layout.tsx            # Marketing layout
│   │   └── 📄 page.tsx              # Home page
│   ├── 📄 favicon.ico
│   ├── 📄 globals.css               # Global styles
│   ├── 📄 layout.tsx                # Root layout
│   └── 📄 prism.css                 # Code syntax highlighting
├── 📁 components/                   # React components
│   ├── 📁 beam/                     # Animated beam effects
│   │   ├── 📄 index.tsx
│   │   └── 📄 styles.module.css
│   ├── 📁 features/                 # Feature showcase components
│   │   ├── 📁 skeletons/            # Loading skeletons
│   │   │   ├── 📄 fifth.tsx
│   │   │   ├── 📄 first.tsx
│   │   │   ├── 📄 fourth.tsx
│   │   │   ├── 📄 second.tsx
│   │   │   └── 📄 third.tsx
│   │   ├── 📄 card.tsx              # Feature card component
│   │   ├── 📄 feature-icon-container.tsx
│   │   ├── 📄 features-grid.tsx
│   │   ├── 📄 grid-pattern.tsx
│   │   ├── 📄 grid.tsx
│   │   ├── 📄 icon-container.tsx
│   │   └── 📄 index.tsx             # Main features component
│   ├── 📁 icons/                    # Icon components
│   │   └── 📄 illustrations.tsx
│   ├── 📁 navbar/                   # Navigation components
│   │   ├── 📄 desktop-navbar.tsx
│   │   ├── 📄 index.tsx             # Main navbar component
│   │   ├── 📄 mobile-navbar.tsx
│   │   └── 📄 navbar-item.tsx
│   ├── 📁 testimonials/             # Testimonial components
│   │   ├── 📄 grid.tsx
│   │   ├── 📄 index.tsx             # Main testimonials component
│   │   ├── 📄 marquee.tsx
│   │   └── 📄 slider.tsx
│   ├── 📁 ui/                       # Reusable UI components
│   │   ├── 📄 container-scroll-animation.tsx
│   │   ├── 📄 dialog.tsx            # Modal component (Radix UI)
│   │   ├── 📄 sparkles.tsx
│   │   └── 📄 sticky-scroll.tsx
│   ├── 📄 accordion.tsx
│   ├── 📄 ambient-color.tsx         # Background color effects
│   ├── 📄 animated-svg.tsx          # SVG animations
│   ├── 📄 blog-card.tsx             # Blog post cards
│   ├── 📄 blog-layout.tsx           # Blog layout wrapper
│   ├── 📄 blur-image.tsx            # Blur effect images
│   ├── 📄 button.tsx                # Button component
│   ├── 📄 clients.tsx               # Client logos
│   ├── 📄 contact-form.tsx          # Contact form
│   ├── 📄 container.tsx             # Layout container
│   ├── 📄 cta.tsx                   # Call-to-action sections
│   ├── 📄 custom-link.tsx           # Custom link component
│   ├── 📄 faqs.tsx                  # FAQ section
│   ├── 📄 featured-images.tsx       # Featured image showcase
│   ├── 📄 footer.tsx                # Footer component
│   ├── 📄 gradient-container.tsx    # Gradient background container
│   ├── 📄 heading.tsx               # Typography component
│   ├── 📄 hero.tsx                  # Hero section
│   ├── 📄 logo.tsx                  # Logo component
│   ├── 📄 macbook.tsx               # MacBook mockup component
│   ├── 📄 pricing-grid.tsx          # Pricing plans grid
│   ├── 📄 register.tsx              # Registration component
│   ├── 📄 subheading.tsx            # Subheading component
│   ├── 📄 switch.tsx                # Toggle switch component
│   ├── 📄 tools.tsx                 # Tools showcase
│   └── 📄 video-modal.tsx           # Video player modal
├── 📁 constants/                    # Application constants
│   ├── 📄 page-testimonials.ts      # Testimonial data
│   └── 📄 testimonials.ts
├── 📁 lib/                          # Utility libraries
│   ├── 📄 blog.ts                   # Blog utilities
│   └── 📄 utils.ts                  # General utilities
├── 📄 mdx-components.tsx            # MDX component overrides
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 package-lock.json
├── 📄 package.json                  # Dependencies and scripts
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📁 public/                       # Static assets
│   ├── 📁 logos/                    # Client logos
│   │   ├── 📄 amazon.png
│   │   ├── 📄 digital-ocean.svg
│   │   ├── 📄 google.webp
│   │   ├── 📄 meta.png
│   │   ├── 📄 netflix.png
│   │   ├── 📄 onlyfans.png
│   │   ├── 📄 uber.png
│   │   └── 📄 vercel.png
│   ├── 📄 avatar.jpeg
│   ├── 📄 avatar.png
│   ├── 📄 banner.png
│   ├── 📄 dashboard-x.png
│   ├── 📄 dashboard.png
│   ├── 📄 first.png
│   ├── 📄 fourth-backup.png
│   ├── 📄 next.svg
│   ├── 📄 second-backup.png
│   ├── 📄 second.png
│   ├── 📄 third.png
│   └── 📄 vercel.svg
├── 📄 README.md
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
└── 📄 tsconfig.json                 # TypeScript configuration
```

## 🧩 Component List & Descriptions

### 🏠 Core Layout Components

| Component | File | Description |
|-----------|------|-------------|
| `RootLayout` | `app/layout.tsx` | Main application layout with metadata and global providers |
| `MarketingLayout` | `app/(marketing)/layout.tsx` | Layout wrapper for marketing pages |
| `Container` | `components/container.tsx` | Responsive layout container with max-width and padding |
| `NavBar` | `components/navbar/index.tsx` | Main navigation with mobile/desktop variants |
| `Footer` | `components/footer.tsx` | Site footer with links and branding |

### 🎯 Marketing Components

| Component | File | Description |
|-----------|------|-------------|
| `Hero` | `components/hero.tsx` | Main landing section with animated dashboard preview |
| `Features` | `components/features/index.tsx` | Feature showcase with interactive cards |
| `Testimonials` | `components/testimonials/index.tsx` | Customer testimonials with slider and grid |
| `PricingGrid` | `components/pricing-grid.tsx` | Pricing plans display with comparison |
| `CTA` | `components/cta.tsx` | Call-to-action sections throughout the site |
| `Tools` | `components/tools.tsx` | Tools and integrations showcase |
| `FAQs` | `components/faqs.tsx` | Frequently asked questions section |

### 🎨 UI Components

| Component | File | Description |
|-----------|------|-------------|
| `Button` | `components/button.tsx` | Reusable button with multiple variants |
| `Heading` | `components/heading.tsx` | Typography component with responsive sizes |
| `Subheading` | `components/subheading.tsx` | Secondary heading component |
| `Dialog` | `components/ui/dialog.tsx` | Modal component built with Radix UI |
| `Switch` | `components/switch.tsx` | Toggle switch component |
| `Accordion` | `components/accordion.tsx` | Collapsible content sections |

### 🎭 Animation Components

| Component | File | Description |
|-----------|------|-------------|
| `Beam` | `components/beam/index.tsx` | Animated beam effects for visual appeal |
| `AnimatedSvg` | `components/animated-svg.tsx` | SVG animations and illustrations |
| `VideoModal` | `components/video-modal.tsx` | Video player modal with controls |
| `AmbientColor` | `components/ambient-color.tsx` | Background color effects and gradients |
| `StickyScroll` | `components/ui/sticky-scroll.tsx` | Scroll-based sticky animations |
| `ContainerScrollAnimation` | `components/ui/container-scroll-animation.tsx` | Container scroll animations |

### 📝 Content Components

| Component | File | Description |
|-----------|------|-------------|
| `BlogCard` | `components/blog-card.tsx` | Blog post preview cards |
| `BlogLayout` | `components/blog-layout.tsx` | Blog post layout wrapper |
| `ContactForm` | `components/contact-form.tsx` | Contact form with validation |
| `FeaturedImages` | `components/featured-images.tsx` | Featured image showcase |
| `BlurImage` | `components/blur-image.tsx` | Images with blur effects |

### 🎪 Feature Components

| Component | File | Description |
|-----------|------|-------------|
| `FeatureCard` | `components/features/card.tsx` | Individual feature card |
| `FeatureIconContainer` | `components/features/feature-icon-container.tsx` | Icon container for features |
| `FeaturesGrid` | `components/features/features-grid.tsx` | Grid layout for features |
| `GridPattern` | `components/features/grid-pattern.tsx` | Background grid patterns |
| `SkeletonOne-Five` | `components/features/skeletons/*.tsx` | Loading skeleton components |

### 🗣️ Testimonial Components

| Component | File | Description |
|-----------|------|-------------|
| `TestimonialsGrid` | `components/testimonials/grid.tsx` | Grid layout for testimonials |
| `TestimonialsSlider` | `components/testimonials/slider.tsx` | Slider for testimonial display |
| `TestimonialsMarquee` | `components/testimonials/marquee.tsx` | Marquee animation for testimonials |

### 🧭 Navigation Components

| Component | File | Description |
|-----------|------|-------------|
| `DesktopNavbar` | `components/navbar/desktop-navbar.tsx` | Desktop navigation menu |
| `MobileNavbar` | `components/navbar/mobile-navbar.tsx` | Mobile navigation menu |
| `NavbarItem` | `components/navbar/navbar-item.tsx` | Individual navigation item |

### 🎨 Branding Components

| Component | File | Description |
|-----------|------|-------------|
| `Logo` | `components/logo.tsx` | Site logo component |
| `Clients` | `components/clients.tsx` | Client logos showcase |
| `Macbook` | `components/macbook.tsx` | MacBook mockup component |

### 🔧 Utility Components

| Component | File | Description |
|-----------|------|-------------|
| `GradientContainer` | `components/gradient-container.tsx` | Container with gradient backgrounds |
| `CustomLink` | `components/custom-link.tsx` | Custom link component with styling |
| `Sparkles` | `components/ui/sparkles.tsx` | Sparkle animation effects |

## 📄 Page Structure

### 🏠 Marketing Pages
- **Home** (`app/(marketing)/page.tsx`) - Main landing page
- **Features** (`app/(marketing)/features/page.tsx`) - Feature showcase
- **Pricing** (`app/(marketing)/pricing/page.tsx`) - Pricing plans
- **Contact** (`app/(marketing)/contact/page.tsx`) - Contact form
- **Blog** (`app/(marketing)/blog/page.tsx`) - Blog listing

### 🔐 Auth Pages
- **Register** (`app/(auth)/register/page.tsx`) - Registration form

### 📝 Blog Posts (MDX)
- Changelog for 2024
- Cool Things to Do with AI
- How Companies Are Working Without AI
- Top 5 LLM of All Time
- What is AI Anyway
- What is Social Media Marketing

## 🎨 Design System

### Colors
- **Primary**: Charcoal (#08090A)
- **Secondary**: Cyan (#39C3EF)
- **Muted**: Neutral grays
- **Background**: Dark theme with gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800, 900
- **Sizes**: Responsive with mobile-first approach

### Spacing
- Uses Tailwind's spacing scale
- Consistent padding/margin patterns
- Responsive breakpoints

## 🛠️ Key Technologies

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives

### Content & Data
- **MDX** - Markdown with JSX support
- **date-fns** - Date manipulation
- **fast-glob** - File globbing

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type checking

## 📊 Component Relationships

### Main Page Flow
```
RootLayout
├── NavBar
├── MarketingLayout
│   ├── Hero
│   ├── Features
│   ├── Tools
│   ├── Testimonials
│   ├── PricingGrid
│   ├── FAQs
│   └── CTA
└── Footer
```

### Component Dependencies
- `Hero` → `Button`, `Container`, `Heading`, `Subheading`, `VideoModal`, `FeaturedImages`, `Beam`
- `Features` → `FeatureCard`, `FeatureIconContainer`, `SkeletonComponents`
- `Testimonials` → `TestimonialsGrid`, `TestimonialsSlider`, `TestimonialsMarquee`
- `NavBar` → `DesktopNavbar`, `MobileNavbar`, `NavbarItem`

## 🚀 Development Workflow

### Adding New Components
1. Create component in appropriate directory
2. Add TypeScript interfaces
3. Implement responsive design
4. Add animations if needed
5. Export as named export
6. Update documentation

### Adding New Pages
1. Create page in appropriate route group
2. Add metadata export
3. Use existing components for consistency
4. Follow established layout patterns

### Styling Guidelines
- Use `cn()` utility for conditional classes
- Follow mobile-first responsive design
- Use project's color palette
- Implement proper hover/focus states 