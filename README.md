# 🚀 Your Name - Portfolio

A modern, responsive portfolio website showcasing projects, skills, and experience as a Software Engineer. Built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Mode**: Persistent theme toggle with localStorage
- **Smooth Navigation**: IntersectionObserver-based scroll spy for active section tracking
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Performance Optimized**: Lazy loading images, optimized assets
- **Modern UI/UX**: Clean design with gradient accents and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 3
- **Icons**: React Icons, Font Awesome
- **Animations**: CSS transitions and transforms
- **Utilities**: react-scroll, react-countup

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/[your-repo-name].git
   cd [your-repo-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your Web3Forms API key
   ```

4. **Add your content**
   - Replace `profile.jpg` in `public/` with your photo
   - Add your CV as `Your_Name_CV.pdf` in `public/`
   - Update personal information (see [SETUP.md](SETUP.md) for detailed guide)

5. **Start development**
   ```bash
   npm run dev
   ```

> 📖 **Need help customizing?** Check out the detailed [SETUP.md](SETUP.md) guide!

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🚀 Deployment

Ready to deploy? Check out the [DEPLOYMENT.md](DEPLOYMENT.md) guide for detailed instructions on deploying to:
- Netlify (recommended)
- Vercel
- GitHub Pages
- Firebase Hosting

Quick deploy to Netlify:
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables
6. Deploy! 🎉

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets (images, favicon, CV)
├── src/
│   ├── components/      # Reusable components (Navbar, Footer, etc.)
│   ├── sections/        # Page sections (Home, About, Projects, etc.)
│   ├── Ui/             # UI components (NavLink)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env.example        # Environment variables template
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Customization

### Colors
The primary accent color is blue gradient (`#3B82F6` to `#8B5CF6`). To change it, search and replace these hex values throughout the codebase.

### Sections
- **Home**: Hero section with introduction
- **About**: Personal story and background  
- **Skills**: Core competencies with progress bars
- **Projects**: Portfolio projects with descriptions
- **Contact**: Contact form and social links

### Dark Mode
Dark mode is automatically detected from system preferences and persists in localStorage. Users can toggle it manually via the theme button in the navbar.

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: [your-email]@example.com
- **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- **GitHub**: [github.com/your-username](https://github.com/your-username)
- **Twitter**: [@your-handle](https://twitter.com/your-handle)

---

Built with ❤️ by [Your Name]
