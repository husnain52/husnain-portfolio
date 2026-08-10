# Husnain Akhtar - Professional Portfolio

A modern, full-stack developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features smooth scroll animations, interactive video backgrounds, and a responsive design optimized for all devices.

## Features

✨ **Modern Design**
- Full-viewport video backgrounds with CloudFront CDN
- Smooth scroll animations and entrance effects
- Responsive grid layouts optimized for mobile and desktop
- Glass morphism UI components with backdrop blur

🎬 **Interactive Elements**
- Hero section with video scrubbing via mouse movement
- Scroll-triggered 3D perspective animations on About section
- Smooth fade-up and stagger animations on cards
- Expandable navigation menu with spring physics
- Custom hamburger menu animation

🎨 **Typography & Styling**
- Space Mono monospace font for all text
- Anton SC display font for watermark effects
- Tailwind CSS utility-first styling
- Bootstrap Icons CDN integration
- Dot grid overlay patterns

📱 **Responsive & Accessible**
- Mobile-first responsive design with sm breakpoints
- Touch-friendly navigation and buttons
- Semantic HTML structure
- Proper accessibility attributes

---

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion 11
- **Smooth Scrolling**: Lenis (ready to integrate)
- **Icons**: Bootstrap Icons CDN
- **Fonts**: Google Fonts (Space Mono, Anton SC)
- **Videos**: AWS CloudFront

---

## Project Structure

```
src/
├── components/
│   ├── Animations.tsx          # ScrambleIn, ScrambleText, SquashHamburger
│   ├── Navigation.tsx          # Fixed navbar with expandable menu
│   ├── Hero.tsx                # Full-viewport hero with video scrubbing
│   ├── About.tsx               # About section with 3D scroll effects
│   ├── Experience.tsx          # Experience cards grid
│   ├── Projects.tsx            # Featured projects showcase
│   ├── SkillsEducation.tsx     # Skills, education, and certificates
│   └── Footer.tsx              # Footer with contact info
├── App.tsx                     # Main app component
├── App.css                     # App styles (empty, uses tailwind)
├── index.css                   # Global styles, fonts, animations
└── main.tsx                    # React entry point

public/
├── resume.pdf                  # Resume download file
├── favicon.svg
└── icons.svg

Config files:
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn

### Install Dependencies
```bash
npm install
```

This installs:
- React and React DOM
- Framer Motion (animations)
- Lenis (smooth scrolling)
- Tailwind CSS 4
- PostCSS and Autoprefixer

### Development Server
```bash
npm run dev
```

Opens the site at `http://localhost:5173/`

### Production Build
```bash
npm run build
```

Outputs optimized files to `dist/` directory.

### Preview Built Site
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## Key Components Breakdown

### Navigation Component
- **Fixed positioning** with z-50
- **Desktop**: Logo pill + expandable menu pill + Resume button
- **Mobile**: Compact hamburger menu that expands full-width
- **Smooth animations**: Menu expansion uses spring physics (stiffness 350, damping 28)
- **Smooth scroll links**: Clicking nav items scrolls to corresponding sections

### Hero Section
- **Video background**: CloudFront video with mouse-based scrubbing
- **Entrance animations**: Staggered ScrambleIn animations for text
- **Dot grid overlay**: Subtle radial-gradient pattern
- **Watermark**: Large "HUSNAIN" text using Anton SC font with gradient effect
- **Responsive layout**: Flex column on mobile, flex row on desktop

### About Section
- **3D perspective**: Scroll-triggered rotateX and translateZ transforms
- **Spring physics**: useTransform with spring stiffness 15, damping 32
- **Gradient overlay**: Top 180px linear gradient fade from black to transparent
- **Centered content**: Large paragraph text with scroll-based opacity

### Experience Section
- **3-column grid**: Staggered fade-up animations on cards
- **Card design**: Glass morphism with white/5 background and white/10 borders
- **Content structure**: Company name, position, duration, and bullet points
- **Video background**: Continuous autoplay muted loop

### Projects Section
- **Featured layout**: Large heading + description + 3-column project grid
- **Project cards**: Minimal design with title and description
- **Animations**: Staggered fade-up with offset timing
- **Full viewport**: Flexbox column with spacer for centering

### Skills & Education Section
- **Skills grid**: 2-column layout on desktop, 1 on mobile
- **Skill tags**: Chip-style badges with borders and opacity
- **Education list**: Compact rows with school and marks
- **Certifications**: Grid of certification tags
- **No video**: Pure black background

### Footer Section
- **Two-column layout**: Video on left, content on right (stacked on mobile)
- **Contact info**: Email, phone, location with Bootstrap icons
- **Bio text**: Brief introduction with call-to-action
- **Copyright**: Dynamic year with © symbol

---

## Customization Guide

### Update Resume Link
Edit the Resume button href in [Navigation.tsx](src/components/Navigation.tsx#L100):
```typescript
href="/your-resume.pdf"
```

### Change Video URLs
The five CloudFront video URLs are defined in each section component:
- **Hero**: `VIDEO_1_URL` in [Hero.tsx](src/components/Hero.tsx#L5)
- **About**: `VIDEO_2_URL` in [About.tsx](src/components/About.tsx#L3)
- **Experience**: `VIDEO_3_URL` in [Experience.tsx](src/components/Experience.tsx#L3)
- **Projects**: `VIDEO_4_URL` in [Projects.tsx](src/components/Projects.tsx#L3)
- **Footer**: `VIDEO_5_URL` in [Footer.tsx](src/components/Footer.tsx#L3)

### Modify Content
All portfolio content is stored in component files:
- **Experience**: Edit array in [Experience.tsx](src/components/Experience.tsx#L8-L34)
- **Projects**: Edit array in [Projects.tsx](src/components/Projects.tsx#L5-L25)
- **Skills**: Edit categories in [SkillsEducation.tsx](src/components/SkillsEducation.tsx#L3-L30)
- **Education**: Edit array in [SkillsEducation.tsx](src/components/SkillsEducation.tsx#L32-L41)
- **Contact**: Edit in [Footer.tsx](src/components/Footer.tsx#L30-L55)

### Adjust Colors & Spacing
Tailwind classes control all styling:
- Background colors: `bg-black`, `bg-white/5`, `bg-white/15`, etc.
- Text colors: `text-white`, `text-white/60`, `text-white/40`, etc.
- Spacing: `px-6`, `py-32`, `gap-8`, etc.
- Responsive breakpoints: `sm:`, `md:`, `lg:` prefixes

### Animation Customization
Framer Motion animations in each section:
- **Duration**: Adjust `transition={{ duration: 1.0 }}` values
- **Delays**: Change `delay` values for stagger effects
- **Easing**: Modify cubic-bezier values `[0.215, 0.610, 0.355, 1.000]`
- **Spring physics**: Adjust `stiffness`, `damping`, `mass` in useTransform

---

## Performance Optimization

✅ **Already Optimized**
- Code splitting via Vite
- Modern CSS with Tailwind
- Lazy-loaded Framer Motion animations
- Video streaming from CloudFront CDN
- Gzip compression (~104KB gzipped JavaScript)

📝 **Additional Optimizations**
- Enable image optimization for project thumbnails
- Use lazy-loading iframes for embedded content
- Consider Lenis for true smooth scrolling
- Implement intersection observers for viewport-based loading

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### AWS S3 + CloudFront
```bash
npm run build
# Upload dist/ to S3 bucket
# Configure CloudFront distribution
```

---

## Font Families

- **Space Mono**: Applied globally for all text via CSS variables
  - Imported from Google Fonts in [index.css](src/index.css#L1)
  - Overrides Tailwind's sans, serif, mono families
  
- **Anton SC**: Used exclusively for watermark text
  - Large display font (clamp 120px-521px)
  - Gradient effect with -4px letter-spacing

---

## Animation Utilities

### ScrambleIn Component
Entrance animation with staggered delays:
```typescript
<ScrambleIn delay={0.2} duration={0.8}>
  <h1>Text here</h1>
</ScrambleIn>
```

### ScrambleText Component
Hover effect with opacity and scale:
```typescript
<ScrambleText onHover={true}>
  Hoverable text
</ScrambleText>
```

### SquashHamburger Component
Animated hamburger icon:
```typescript
<SquashHamburger isOpen={isMenuOpen} size={24} />
```

---

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard-navigable links and buttons
- ✅ Color contrast ratios meet WCAG AA standards
- ✅ Focus states on all interactive elements
- ✅ Alt text on images and icons

---

## Known Limitations & Future Enhancements

### Current Limitations
- Video scrubbing only works on desktop (mouse-based)
- Lenis smooth scroll not yet integrated
- No mobile video scrubbing

### Future Enhancements
- Integrate Lenis for smooth scrolling
- Add touch-based video scrubbing for mobile
- Light/dark theme toggle
- Blog section with MDX
- Contact form with email integration
- Analytics with Vercel Analytics
- SEO optimization with meta tags

---

## Troubleshooting

### Videos Not Loading
- Verify CloudFront URLs are correct
- Check network tab for failed requests
- Ensure CORS headers are set on CloudFront

### Animations Jumpy
- Clear cache: `npm run build && npm run preview`
- Check browser hardware acceleration
- Reduce animation duration values

### Mobile Layout Issues
- Clear viewport cache
- Check responsive breakpoints in tailwind.config.js
- Test in Chrome DevTools mobile view

### Build Errors
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install

# Clear vite cache
rm -rf .vite

# Rebuild
npm run build
```

---

## License

Personal portfolio project. All content and design © 2026 Husnain Akhtar.

---

## Contact

- 📧 Email: husnainakhtar06@gmail.com
- 📱 Phone: +92 347 6293398
- 📍 Location: Islamabad, Pakistan
- 🔗 GitHub: [Your GitHub Profile]
- 💼 LinkedIn: [Your LinkedIn Profile]

---

## Credits

- **Framework**: React & Vite communities
- **Animations**: Framer Motion by Framer
- **Styling**: Tailwind CSS team
- **Icons**: Bootstrap Icons project
- **Fonts**: Google Fonts
- **Videos**: AWS CloudFront
- **Design Inspiration**: Modern SPA portfolios

---

**Last Updated**: August 6, 2026
