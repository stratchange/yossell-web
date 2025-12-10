# YosSell Landing Page

🛍️ **L'univers du e-commerce dans votre poche** - A modern, responsive landing page for the YosSell e-commerce mobile application.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Loading Screen**: Beautiful Apple-style loading animation with progress bar
- **Interactive Sections**: Hero, Features, Value Propositions, and more
- **Smooth Scrolling**: Enhanced user experience with smooth page transitions
- **Performance Optimized**: Built with Next.js 15 and Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** (optional, for version control)

## 🛠️ Installation

### 1. Clone or Download the Project

```bash
# If using Git
git clone <repository-url>
cd yossell-landing

# Or download and extract the ZIP file, then navigate to the project folder
```

### 2. Install Dependencies

```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

## 🚀 Getting Started

### Development Server

Start the development server to run the project locally:

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev
```

The application will be available at:
- **Local**: [http://localhost:3000](http://localhost:3000)
- **Network**: [http://localhost:3001](http://localhost:3001) (if port 3000 is busy)

### Building for Production

To create an optimized production build:

```bash
# Build the project
npm run build

# Start the production server
npm run start
```

### Code Quality

Check and fix code formatting:

```bash
# Run ESLint to check for code issues
npm run lint

# Fix auto-fixable ESLint issues
npm run lint -- --fix
```

## 📁 Project Structure

```
yossell-landing/
├── public/
│   └── assets/           # Static images and assets
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Home page with loading screen
│   └── components/
│       ├── Header.tsx              # Navigation header
│       ├── Footer.tsx              # Footer with app store links
│       ├── SmoothScrollProvider.tsx # Smooth scrolling context
│       └── sections/
│           ├── Hero.tsx                 # Hero section
│           ├── Features.tsx             # Features showcase
│           ├── ValuePropositions.tsx    # Value propositions
│           └── AspirationalSection.tsx  # Call-to-action section
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Images and Assets

- Place your images in the `public/assets/` directory
- Update image references in components to match your asset names
- Supported formats: PNG, JPG, JPEG, SVG

### Styling

- Global styles: `src/app/globals.css`
- Component-specific styles: Use Tailwind CSS classes
- Colors and themes: Modify `tailwind.config.ts`

### Content

- Update text content directly in the component files
- Modify metadata in `src/app/layout.tsx`
- Change app store links in `src/components/Footer.tsx`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code checks |

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed on any platform that supports Node.js:
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS Amplify**: Build settings: `npm run build`
- **Digital Ocean**: Use their App Platform
- **Heroku**: Add a `Procfile` with `web: npm start`

## 📱 Mobile App Store Integration

The landing page includes direct links to:
- **Apple App Store**: Update the link in `Footer.tsx`
- **Google Play Store**: Update the link in `Footer.tsx`

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: The dev server will automatically try port 3001 if 3000 is busy
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **Build errors**: Check that all imported files exist and are properly exported

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Open an issue in the project repository

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with ❤️ using Next.js, Tailwind CSS, and TypeScript**
