# Browns' Fencing & Equipment

Professional fencing, mulching, skid steer & tractor services in Fairmount, Georgia.

## About

Browns' Fencing & Equipment is a family-owned business specializing in rural property improvements. We provide:

- **Farm & Residential Fencing** - Durable fencing solutions built for Georgia's terrain
- **Forestry Mulching & Land Clearing** - Professional overgrowth removal and lot clearing
- **Skid Steer & Tractor Services** - Grading, driveway prep, and heavy equipment work

Serving Fairmount, Pickens County, Gordon County, and Bartow County in North Georgia.

## Contact

- **Phone:** 706-847-5979
- **Email:** brownsfencingnequip@gmail.com
- **Location:** Fairmount, GA 30139

## Website

This is the official website for Browns' Fencing & Equipment, built with React, TypeScript, Vite, and Tailwind CSS.

### Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom configuration
- **Component Library:** Shadcn/ui (Radix UI)
- **Animations:** GSAP with ScrollTrigger
- **Routing:** React Router v6
- **Forms:** React Hook Form with Zod validation
- **State Management:** TanStack React Query
- **SEO:** React Helmet Async

### Key Features

- Fully responsive mobile-first design
- Server-side rendering fallback for SPA routing (historyApiFallback)
- Smooth scroll-triggered animations
- Accessible components with ARIA labels
- SEO-optimized with Open Graph and Twitter Card support
- JSON-LD schema markup for local business
- Production-ready build with optimized code splitting

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

### Deployment

The site is configured for deployment to:

- **Netlify:** Uses `_redirects` file for SPA fallback routing
- **Vercel:** Uses `vercel.json` for SPA fallback routing
- **Custom servers:** Configure with `historyApiFallback: true` in your server

### Project Structure

```
src/
├── pages/              # Page components (Home, About, Services, etc.)
├── components/         # Reusable UI components
│   ├── layout/        # Navigation, Footer, Layout wrapper
│   └── ui/            # Shadcn/ui components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── assets/            # Images and static assets
├── App.tsx            # Root app component with routing
└── index.css          # Tailwind base styles
```

### Performance

- Code splitting by vendor, UI components, and animations
- Lazy loading of images
- Optimized bundle size (gzip ~250KB)
- Fast initial page load with streaming SSR-ready structure

### License

© 2026 Browns' Fencing & Equipment. All rights reserved.
