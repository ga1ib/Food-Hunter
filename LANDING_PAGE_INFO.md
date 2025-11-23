# Food Hunter Landing Page

## Overview
A fully responsive, eye-catching landing page for a food farming and harvesting website built with React, Vite, Tailwind CSS, and Framer Motion. **Now featuring real farm images for an authentic, professional look!**

## Features

### Design
- **Cold Type Aesthetic**: Clean, minimalist typography with high contrast
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience

### Components Created

1. **Navbar** (`src/components/Navbar.jsx`)
   - Fixed position with backdrop blur
   - Responsive hamburger menu for mobile
   - Smooth animations on scroll and hover
   - Logo integration

2. **Hero Section** (`src/components/Hero.jsx`) ✨ **Updated with Real Images**
   - Eye-catching headline with gradient text on real farm background
   - Real agricultural field image as hero background
   - Call-to-action buttons with hover effects
   - Statistics display with glassmorphism effect
   - Floating image showcase
   - Scroll indicator

3. **Features Section** (`src/components/Features.jsx`)
   - 4 feature cards with custom icons
   - Hover animations and transitions
   - Scroll-triggered animations
   - Call-to-action banner

4. **About Section** (`src/components/About.jsx`) ✨ **Updated with Real Images**
   - Two-column layout with real farming images
   - Main image: Farmer harvesting onions
   - Floating secondary image: Hands with plants
   - Company statistics grid
   - Animated decorative elements
   - Scroll-triggered content reveal

5. **Services Section** (`src/components/Services.jsx`) ✨ **Updated with Real Images**
   - 4 service/product cards with real farm photos
   - Image headers for each card showing actual produce
   - Feature lists with checkmarks
   - Order buttons with animations
   - Hover zoom effects on images

6. **Gallery Section** (`src/components/Gallery.jsx`) 🆕 **NEW!**
   - Beautiful 3-column responsive grid
   - 7 high-quality farm images
   - Hover effects with image zoom
   - Lightbox modal for full-size viewing
   - Smooth animations and transitions
   - Click to expand functionality

7. **Footer** (`src/components/Footer.jsx`)
   - Multi-column layout with links
   - Social media icons
   - Newsletter subscription form
   - Copyright information

### Assets Used

**Real Farm Images:**
- `agricultural-field-ai-generated.jpg` - Hero background and gallery
- `agriculture-healthy-food.jpg` - Services card and gallery
- `farmer-harvesting-onions-field.jpg` - About section main image
- `farmer-picking-fresh-ripe-tomato-vegetables-putting-into-wooden-crate.jpg` - Services card and gallery
- `hands-cupping-small-plants-soil.jpg` - About section floating image
- `male-farmer-who-is-using-shovel-dig-soil-his-rice-fields.jpg` - Services card and gallery
- `so-many-vegetables-this-field.jpg` - Services card and gallery

**Custom SVG Assets:**
- `src/assets/logo.svg` - Company logo
- `src/assets/icons/organic.svg` - Organic feature icon
- `src/assets/icons/fresh.svg` - Fresh feature icon
- `src/assets/icons/sustainable.svg` - Sustainable feature icon
- `src/assets/icons/quality.svg` - Quality feature icon

## Technologies Used
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **SWC** - Fast refresh plugin

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Colors
The primary color scheme uses green tones for the farming theme:
- Primary: `#22c55e` (green-500)
- Secondary: `#16a34a` (green-600)
- Accent colors for different sections

### Typography
- Headings: Bold (700), tight tracking (-0.02em)
- Body text: Light (300), relaxed leading
- High contrast for readability

### Animations
All animations are configured in individual components using Framer Motion:
- Scroll-triggered animations with `useInView` hook
- Hover effects with `whileHover`
- Tap effects with `whileTap`
- Staggered children animations

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Performance
- Optimized with Vite's fast refresh
- Lazy loading animations with Framer Motion
- Minimal bundle size with tree-shaking
- SVG assets for scalable graphics

## Recent Updates ✨

### Real Images Integration
All placeholder images have been replaced with authentic farm photography:
- **Hero Section**: Now features a stunning agricultural field background with improved text contrast
- **About Section**: Showcases real farmers at work with a beautiful dual-image layout
- **Services Section**: Each service card displays relevant farm imagery
- **Gallery Section**: Brand new interactive gallery with 7 professional farm photos and lightbox functionality

### Visual Improvements
- Enhanced color overlays for better text readability on images
- Glassmorphism effects on statistics cards
- Image hover zoom effects throughout
- Professional image gradients for depth
- Lightbox modal for full-screen image viewing

## Next Steps
Consider adding:
- ✅ ~~Real product images~~ **COMPLETED!**
- ✅ ~~Image gallery~~ **COMPLETED!**
- Backend integration for newsletter signup
- Contact form functionality
- Blog section
- Customer testimonials
- Shopping cart functionality
- Image optimization for faster loading
- Lazy loading for images

