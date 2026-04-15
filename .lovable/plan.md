

# FloraVu – Multi-Page Plant Nursery Website

## Overview
A minimalist, organic, high-end multi-page website for FloraVu. All content in Croatian. Separate routes for each major section with proper SEO metadata per page.

## Design System
- **Colors**: Sage green `#8B9E7C`, terracotta `#C4704B`, soft cream `#FAF6F0`, deep forest `#2D3B2D` for text
- **Fonts**: Playfair Display (serif) for headings, Inter for body
- **Style**: Minimalist, whitespace-heavy, organic feel, subtle fade-in animations

## Routes & Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.tsx` | Hero with slogan, brief highlights, CTA links to other pages |
| `/o-nama` | `o-nama.tsx` | About FloraVu, specialization in sadnice & vrtno cvijeće |
| `/radno-vrijeme` | `radno-vrijeme.tsx` | Hours, delivery info, payment methods (cash & cards) |
| `/narudzbe` | `narudzbe.tsx` | Ordering via Instagram & Facebook, social links |
| `/galerija` | `galerija.tsx` | Photo gallery grid of plants/flowers |

## Shared Layout
- **Header** in `__root.tsx`: Sticky transparent navbar with FloraVu logo, nav links to all pages, mobile hamburger menu
- **Footer** in a shared component: Location (Gradska Tržnica Vukovar), social links, copyright

## Per-Page SEO
Each route gets unique `head()` metadata with Croatian titles and descriptions, plus og:title/og:description.

## Key Content (Croatian)
- Hero slogan: "FloraVu – Udahnite život svom vrtu"
- Walk-in do 12:30, dostava istog/sljedećeg dana do 15:00
- Plaćanje: gotovina i kartice
- Orders via Instagram & Facebook with prominent linked buttons
- High-quality Unsplash botanical imagery throughout

## Implementation
- Google Fonts: Playfair Display + Inter
- CSS custom properties for the sage/terracotta/cream palette in `styles.css`
- Responsive mobile-first design
- Smooth page transitions
- All 5 route files + updated root layout + shared Footer component

