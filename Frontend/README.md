# EZ-Project Frontend

This is the frontend of the EZ-Project, a modern, interactive web application built with React and Vite. It features smooth animations, responsive design, and an engaging user experience.

## Live Demo

Check out the live version of the application: [https://ez-project.onrender.com/](https://ez-project.onrender.com/)

## Technologies Used

- **React 19**: Modern JavaScript library for building user interfaces
- **Vite**: Next-generation frontend build tool for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Production-ready motion library for animations
- **React Router DOM**: Declarative routing for React applications
- **Lucide React**: Beautifully simple, consistent icons

## Project Structure

```
Frontend/
├── public/
│   ├── vite.svg
│   └── underline-asset.svg
├── src/
│   ├── assets/             # Static assets like images and SVGs
│   ├── component/          # Reusable UI components
│   │   ├── AboutSection/   # About section component
│   │   ├── AboutTeam.jsx   # Team information component
│   │   ├── AllServices.jsx # Services showcase component
│   │   ├── ContactForm.jsx # Contact form component
│   │   ├── HeroSection.jsx # Hero section component
│   │   ├── NavBar.jsx      # Navigation bar component
│   │   ├── Portfolio.jsx   # Portfolio showcase component
│   │   └── Services.jsx    # Individual service details component
│   ├── App.jsx            # Main application component with routing
│   ├── App.css            # Global styles
│   ├── index.css          # CSS reset and base styles
│   └── main.jsx           # Entry point of the application
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # This file
```

## Components Overview

- **NavBar**: Responsive navigation bar with smooth transitions
- **HeroSection**: Eye-catching hero section with animated elements
- **AllServices**: Interactive grid of services with hover/click functionality
- **Services**: Detailed service information with back functionality
- **AboutSection**: Information about the project/team
- **Portfolio**: Portfolio showcase with highlight reel
- **AboutTeam**: Team information and details
- **ContactForm**: Contact form for user interaction

## Features

- Animated page transitions using Framer Motion
- Interactive polaroid-style service cards with hover and click effects
- Loading screen with animated spinner
- Responsive design that works on all device sizes
- Smooth scrolling navigation
- Modern UI with attractive color schemes and backgrounds

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the Frontend directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be available in the `dist/` directory.

### Additional Scripts

- `npm run lint`: Lint JavaScript files
- `npm run preview`: Preview the production build locally

## Environment Variables

No environment variables are required for the frontend application.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](../LICENSE).