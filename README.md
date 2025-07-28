# Handshake Engineering Ltd Website

A modern, responsive website for Handshake Engineering Limited - a leading provider of ICT, communication systems, energy solutions, and security equipment in Nigeria.

## 🚀 Live Site

The website is deployed and live at: [Your Live URL Here]

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS Modules
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: Wouter (lightweight React router)
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Home, About, etc.)
│   │   ├── styles/         # CSS modules for styling
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── index.html          # HTML entry point
├── public/                 # Static assets
└── dist/                   # Build output
```

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Optimized build with Vite for quick loading
- **SEO Friendly**: Proper meta tags and structure
- **Accessible**: Built with accessibility best practices

## 📄 Pages

1. **Home** - Hero section, company overview, featured services
2. **About** - Company history, values, timeline, and statistics
3. **Services** - Detailed service offerings across four main areas:
   - Communication Systems (HF/VHF/UHF radios, PoC)
   - IT Infrastructure (servers, laptops, networking)
   - Solar Energy (renewable energy solutions)
   - Security Systems (CCTV, access control)
4. **Partners** - Global technology partnerships with major brands
5. **Contact** - Contact form, business information, and hours

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd handshake-engineering-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/public` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌍 Deployment

This project is configured for easy deployment to:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/public`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist/public"
   ```
3. Run: `npm run build && npm run deploy`

## 🎨 Customization

### Colors

The color scheme is defined in `client/src/index.css` using CSS custom properties:

- Primary: Blue (#3B82F6)
- Secondary: Gray (#6B7280)
- Accent: Yellow (#F59E0B)

### Content

All content can be easily updated by modifying the respective page components in `client/src/pages/`.

## 📞 Contact Information

- **Phone**: +234 802 342 3369
- **Email**: info@handshakeengineering.com
- **Location**: Abuja, Nigeria

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Handshake Engineering Ltd** - Engineering Excellence in ICT & Energy Solutions