# SQA Engineer Portfolio

A modern, professional SQA Engineer portfolio built with React, Tailwind CSS, and Framer Motion. Features beautiful animations, dark/light mode toggle, QA-specific content sections, and a professional engineer photo.

## 🚀 Live Demo

**Deployed URL:** https://ryomvtzy.manus.space

## ✨ Features

- **QA-Focused Design**: Tailored specifically for Software Quality Assurance professionals
- **Professional Engineer Photo**: High-quality professional headshot integrated into the About section
- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **QA-Specific Sections**: 
  - Testing Skills & Expertise (Testing Types, Tools & Frameworks, Methodologies, Analytics & Reporting)
  - Testing Projects with metrics (Test Cases, Defects Found, Coverage)
  - Professional Experience timeline
  - QA Certifications & Training
  - Contact Form
- **Performance Optimized**: Built with Vite for fast loading times

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
sqa-engineer-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── engineer-photo.jpg    # Professional engineer photo
│   ├── components/
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Global styles
│   ├── index.css                 # Base styles
│   └── main.jsx                  # Application entry point
├── dist/                         # Production build
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sqa-engineer-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and visit `http://localhost:5174`

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Personal Information

Edit the following sections in `src/App.jsx`:

1. **Hero Section**: Update name, title, and description
2. **About Section**: Modify bio, location, and professional photo
3. **Testing Skills**: Add/remove QA methodologies, tools, and technologies
4. **Testing Projects**: Update project details, metrics, and technologies
5. **Experience**: Modify work history, achievements, and technologies
6. **Certifications**: Update QA certifications and training
7. **Contact**: Update contact information

### Professional Photo

Replace `src/assets/engineer-photo.jpg` with your own professional headshot. The image should be:
- High resolution (recommended: 800x800px or higher)
- Professional quality
- Square aspect ratio for best results
- Format: JPG, PNG, or WebP

### Styling

- **Colors**: Modify the color scheme in `src/App.css`
- **Animations**: Adjust animation settings in the Framer Motion components
- **Layout**: Customize spacing and layout in the component JSX

### Adding New Sections

1. Create a new section in `src/App.jsx`
2. Add navigation link to the header
3. Include the section ID in the navigation array
4. Add intersection observer for scroll detection

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The portfolio includes a dark/light mode toggle with:
- Automatic theme detection
- Smooth transitions between themes
- Persistent theme selection
- System preference detection

## 🧪 QA-Specific Features

### Testing Skills Categories
- **Testing Types**: Manual, Automated, API, Performance, Security Testing
- **Tools & Frameworks**: Selenium, Cypress, Jest, Postman, JMeter
- **Methodologies**: Agile, Scrum, TDD, BDD, Risk-Based Testing
- **Analytics & Reporting**: Test Metrics, Defect Tracking, JIRA, TestRail, Allure Reports

### Project Metrics
Each testing project displays:
- Number of test cases created
- Defects found and reported
- Test coverage percentage
- Technologies and tools used

### Professional Experience
Timeline format showing:
- QA roles and responsibilities
- Key achievements and improvements
- Technologies and tools mastered
- Team leadership experience

### Certifications
Display of relevant QA certifications:
- ISTQB certifications
- Tool-specific certifications
- Agile/Scrum certifications
- Continuous learning achievements

## 📧 Contact Form

The contact form includes:
- Form validation
- Responsive design
- Hover and focus effects
- Professional QA-focused messaging

## 🔧 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Built with ❤️ for QA professionals using React and Tailwind CSS

