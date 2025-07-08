# Deployment Instructions

This is a frontend-only React portfolio application ready for static site deployment.

## Quick Deploy to Netlify

1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
3. **Deploy**: Netlify will automatically build and deploy

## Alternative Deployment Options

### Vercel
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

### GitHub Pages
```bash
npm run build
# Upload dist/ folder contents to GitHub Pages
```

### Manual Static Hosting
```bash
npm run build
# Upload dist/ folder to any static hosting service
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or use the frontend-only script
./dev-frontend.sh
```

## Features Included

- ✅ Responsive design
- ✅ Dark/light theme toggle
- ✅ Project showcase with routing
- ✅ Contact form (frontend-only)
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Client-side routing configured