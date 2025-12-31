# 🚀 Deployment Guide

This guide covers different ways to deploy your portfolio website.

## 🌐 Deployment Options

### 1. Netlify (Recommended)

**Pros**: Free tier, automatic deployments, custom domains, form handling
**Best for**: Most users, especially with contact forms

#### Steps:
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables in Netlify dashboard
7. Deploy!

#### Environment Variables:
```
VITE_WEB3FORMS_ACCESS_KEY=your_api_key_here
VITE_SITE_URL=https://your-site.netlify.app
```

### 2. Vercel

**Pros**: Excellent performance, automatic deployments, free tier
**Best for**: React applications, global CDN

#### Steps:
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Add environment variables
6. Deploy!

### 3. GitHub Pages

**Pros**: Free, integrated with GitHub
**Cons**: Static hosting only, no server-side features

#### Steps:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://your-username.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository settings

### 4. Firebase Hosting

**Pros**: Google infrastructure, free tier, custom domains
**Best for**: Integration with other Firebase services

#### Steps:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## ⚙️ Build Configuration

### Vite Configuration
Your `vite.config.js` should include:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change if deploying to subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true for debugging
  }
})
```

### Environment Variables

Create production environment variables:
- `VITE_WEB3FORMS_ACCESS_KEY`: Your Web3Forms API key
- `VITE_GA_TRACKING_ID`: Google Analytics ID (optional)
- `VITE_SITE_URL`: Your site's URL

## 🔧 Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - builds successfully
- [ ] Test production build with `npm run preview`
- [ ] All images optimized and compressed
- [ ] Remove console.log statements
- [ ] Update meta tags in `index.html`

### Content Review
- [ ] All personal information updated
- [ ] Contact form working with real API key
- [ ] All links functional
- [ ] CV/resume file uploaded
- [ ] Project images and descriptions current
- [ ] Social media links correct

### Performance
- [ ] Images compressed (use tools like TinyPNG)
- [ ] Unused dependencies removed
- [ ] Bundle size reasonable (<1MB)
- [ ] Lighthouse score >90

### SEO & Meta Tags
Update `index.html` with:
```html
<title>Your Name - Software Engineer Portfolio</title>
<meta name="description" content="Portfolio of Your Name, Software Engineer specializing in React, Node.js, and modern web development.">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Software Engineer Portfolio">
<meta property="og:image" content="/profile.jpg">
<meta property="og:url" content="https://your-domain.com">
```

## 🚨 Common Deployment Issues

### Build Failures
- **Node version**: Ensure using Node 16+
- **Dependencies**: Run `npm ci` for clean install
- **Environment variables**: Check all required vars are set
- **Import paths**: Verify all imports are correct case

### Runtime Errors
- **API keys**: Ensure environment variables are properly set
- **CORS issues**: Check API endpoints allow your domain
- **404 errors**: Configure routing for SPA
- **Images not loading**: Verify paths and file names

### Performance Issues
- **Large bundle size**: Analyze with `npm run build -- --analyze`
- **Slow loading**: Optimize images and enable compression
- **Poor Lighthouse scores**: Follow web vitals best practices

## 📊 Monitoring & Analytics

### Google Analytics
1. Create GA4 property
2. Add tracking ID to environment variables
3. Implement in your app or use gtag

### Performance Monitoring
- Use Lighthouse CI for automated testing
- Monitor Core Web Vitals
- Set up error tracking (Sentry, LogRocket)

## 🔄 Continuous Deployment

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🎉 Post-Deployment

After successful deployment:
1. **Test thoroughly** on the live site
2. **Submit to search engines** (Google Search Console)
3. **Share your portfolio** on social media
4. **Monitor performance** and user feedback
5. **Keep content updated** regularly

Your portfolio is now live and ready to showcase your work! 🚀