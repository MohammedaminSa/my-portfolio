# 🚀 Portfolio Setup Guide

This guide will help you customize this portfolio template with your personal information.

## 📋 Quick Setup Checklist

### 1. **Clone and Install**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### 2. **Environment Variables**
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your Web3Forms API key
# Get free API key from: https://web3forms.com/
```

### 3. **Replace Images**
- [ ] Add your `profile.jpg` to `public/` folder
- [ ] Add your CV as `Your_Name_CV.pdf` to `public/` folder  
- [ ] Replace project images in `public/` folder
- [ ] Update image references in components

### 4. **Update Personal Information**

#### Contact Information (`src/sections/Contact.jsx`):
- [ ] Email address (line 89)
- [ ] Phone number (line 99)
- [ ] Location (line 109)
- [ ] Social media links (lines 125-145)

#### Home Section (`src/sections/Home.jsx`):
- [ ] Your name (line 12)
- [ ] CV download link (line 25)
- [ ] Social media links (lines 45-55)
- [ ] Profile image alt text (line 75)

#### Footer (`src/components/Footer.jsx`):
- [ ] Brand name (line 11)
- [ ] Your name (line 12)
- [ ] Social media links (lines 35-75)
- [ ] Copyright text (line 85)

### 5. **Customize Content**
- [ ] Update `src/sections/About.jsx` with your story
- [ ] Modify `src/sections/Skills.jsx` with your skills
- [ ] Update `src/sections/Project.jsx` with your projects
- [ ] Customize `src/sections/TechStack.jsx` with your technologies

### 6. **Update Package.json**
- [ ] Repository URL
- [ ] Author information
- [ ] Homepage URL

### 7. **Test Everything**
```bash
# Start development server
npm run dev

# Test contact form (requires Web3Forms API key)
# Test all links and navigation
# Test responsive design on different screen sizes
```

### 8. **Deploy**
```bash
# Build for production
npm run build

# Deploy to your preferred platform:
# - Netlify: Connect GitHub repo
# - Vercel: Connect GitHub repo  
# - GitHub Pages: Enable in repository settings
```

## 🎨 Customization Tips

### Colors
- Primary gradient: `#3B82F6` to `#8B5CF6` (blue)
- Search and replace these hex codes to change the theme

### Fonts
- Main font: System fonts (Inter, Segoe UI, etc.)
- Brand font: Pacifico (Google Fonts)

### Animations
- Hover effects on buttons and links
- Smooth scrolling between sections
- CountUp animations for statistics

## 🔧 Common Issues

### Contact Form Not Working
- Ensure you have a valid Web3Forms API key in `.env`
- Check browser console for errors
- Verify internet connection

### Images Not Loading
- Ensure images are in the `public/` folder
- Check file names match exactly (case-sensitive)
- Verify image paths in components

### Build Errors
- Run `npm run lint` to check for code issues
- Ensure all imports are correct
- Check for missing dependencies

## 📱 Testing Checklist

- [ ] Desktop responsiveness (1920px+)
- [ ] Tablet responsiveness (768px-1024px)
- [ ] Mobile responsiveness (320px-767px)
- [ ] Dark mode toggle functionality
- [ ] Contact form submission
- [ ] All navigation links work
- [ ] Social media links open correctly
- [ ] CV download works
- [ ] Images load properly
- [ ] Smooth scrolling between sections

## 🚀 Ready to Deploy?

Once you've completed all the above steps:

1. **Final Test**: Run `npm run build` and `npm run preview`
2. **Commit Changes**: `git add . && git commit -m "Customize portfolio with personal information"`
3. **Push to GitHub**: `git push origin main`
4. **Deploy**: Choose your deployment platform and connect your repository

Your portfolio is now ready to showcase your work! 🎉