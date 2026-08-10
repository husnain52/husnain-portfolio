# Quick Start Guide - Husnain Akhtar Portfolio

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

### Step 3: Make Changes & Customize

See [PORTFOLIO_GUIDE.md](PORTFOLIO_GUIDE.md) for detailed customization instructions.

---

## 📝 Quick Customization Checklist

- [ ] **Update your resume**: Replace `/public/resume.pdf`
- [ ] **Verify video URLs**: Check CloudFront URLs in each section component
- [ ] **Update contact info**: Edit Footer component with your details
- [ ] **Personalize content**: Modify experience, projects, and skills
- [ ] **Test on mobile**: Use Chrome DevTools mobile view
- [ ] **Build for production**: Run `npm run build`

---

## 🎯 Common Tasks

### Add a New Experience
Edit [src/components/Experience.tsx](src/components/Experience.tsx#L8-L34):
```typescript
{
  company: 'Company Name',
  position: 'Job Title',
  duration: 'MM/YYYY – MM/YYYY',
  bullets: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
}
```

### Add a New Project
Edit [src/components/Projects.tsx](src/components/Projects.tsx#L5-L25):
```typescript
{
  title: 'Project Name',
  subtitle: 'Short description',
  description: 'Detailed description of the project and technologies used.',
}
```

### Add a New Skill
Edit [src/components/SkillsEducation.tsx](src/components/SkillsEducation.tsx#L3-L30):
```typescript
{
  category: 'Category Name',
  skills: ['Skill1', 'Skill2', 'Skill3'],
}
```

### Change Navigation Links
Edit [src/components/Navigation.tsx](src/components/Navigation.tsx#L19-L24):
```typescript
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  // Add more links...
];
```

---

## 📊 Build & Deploy

### Create Production Build
```bash
npm run build
```

Output: `dist/` folder ready for deployment

### Deploy to Vercel (Free)
1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Deploy with one click

### Deploy to Netlify (Free)
```bash
npm run build
# Drag & drop `dist/` folder to Netlify
```

### Deploy to GitHub Pages
```bash
# Configure in vite.config.ts
npm run build
# Push dist/ to gh-pages branch
```

---

## 🎨 Styling Tips

### Change Color Scheme
All colors use Tailwind utilities. Edit classes like:
- `bg-white/15` → `bg-white/20` (more opaque)
- `text-white/60` → `text-white/80` (lighter text)
- `border-white/10` → `border-white/20` (more visible borders)

### Adjust Spacing
Use Tailwind spacing scale:
- `px-6` = 24px horizontal padding
- `py-32` = 128px vertical padding
- `gap-8` = 32px gap between items
- `mb-20` = 80px margin bottom

### Modify Font Sizes
All typography uses Space Mono. Adjust with:
- `text-[16px]` = custom exact size
- `text-sm` = small
- `text-base` = default
- `text-lg` = large
- `text-[clamp(36px,8vw,72px)]` = responsive sizing

---

## 🔧 Environment Variables

Create `.env` file for sensitive data:
```bash
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GITHUB_URL=https://github.com/yourprofile
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
```

Use in components:
```typescript
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

---

## 🐛 Debugging Tips

### Check Console for Errors
- F12 → Console tab
- Look for red error messages
- Check Network tab for failed video loads

### Test Responsive Design
- F12 → Device toolbar (Ctrl+Shift+M)
- Test at different breakpoints: 375px, 768px, 1024px

### Debug Animations
- Slow down in DevTools: Settings → Animations → Slow
- Check Framer Motion props in React DevTools
- Verify transition values are numbers, not strings

### Profile Performance
- F12 → Performance tab → Record
- Look for jank in frame rate
- Check for unnecessary re-renders

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🆘 Getting Help

1. **Check logs**: `npm run build` shows detailed errors
2. **Clear cache**: `rm -rf node_modules dist .vite` then `npm install`
3. **Restart server**: Stop (Ctrl+C) and run `npm run dev` again
4. **Check dependencies**: `npm outdated` to see version updates

---

## ✅ Pre-Launch Checklist

- [ ] All experience and projects updated with your info
- [ ] Resume PDF uploaded to `/public/resume.pdf`
- [ ] Contact email and phone number verified
- [ ] All videos loading correctly
- [ ] Navigation links working smoothly
- [ ] Mobile layout looks good
- [ ] No console errors
- [ ] SEO meta tags updated (if needed)
- [ ] Build succeeds: `npm run build`
- [ ] Production build tested: `npm run preview`

---

## 🎉 You're Ready!

Your professional portfolio is now ready to showcase your skills to the world.

**Next Steps:**
1. Customize with your content
2. Test thoroughly
3. Deploy to production
4. Share your portfolio link

**Good luck! 🚀**
