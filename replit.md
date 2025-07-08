# Portfolio Web Application

## Overview

This is a modern frontend-only portfolio web application showcasing AI-powered projects and developer skills. The application is built with React and features a clean, responsive design using shadcn/ui components and Tailwind CSS. It's configured as a static site ready for deployment to platforms like Netlify, Vercel, or GitHub Pages.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: React Router for client-side navigation
- **State Management**: React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Theme**: Dark/light mode support with system preference detection

### Architecture
- **Type**: Frontend-only static application
- **Development**: Vite development server with hot reload
- **Build**: Vite build system for optimized production bundles
- **Deployment**: Static site deployment ready

## Key Components

### Data Management
- **Project Data**: Hardcoded project information within components
- **Contact Form**: Frontend-only form with simulated submission
- **No Backend**: All functionality runs entirely in the browser

### UI Components
- **Component Library**: shadcn/ui with Radix UI primitives
- **Design System**: Consistent styling with CSS variables and Tailwind
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Accessibility**: Built-in accessibility features from Radix UI

### Portfolio Features
- **Project Showcase**: Display of AI-powered projects with detailed descriptions
- **Skills Section**: Technical skills organized by categories
- **Contact Form**: Interactive contact form with toast notifications
- **Theme Switching**: Dark/light mode toggle with persistence

## Data Flow

1. **Client Navigation**: Wouter handles client-side routing
2. **State Management**: React hooks manage local component state
3. **Static Data**: Project information stored within components
4. **User Interactions**: Form submissions show toast notifications
5. **Theme Management**: Local storage persistence for dark/light mode

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router
- **UI Framework**: Radix UI components for accessibility
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation

### Core Dependencies
- **Routing**: Wouter for client-side navigation
- **State Management**: React hooks for local state
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner for toast notifications

### Development Tools
- **Build**: Vite with React plugin and error overlay
- **TypeScript**: Full TypeScript support with strict configuration
- **Linting**: ESLint and TypeScript compiler for code quality
- **Package Management**: npm with lockfile for dependency management

## Deployment Strategy

### Development Environment
- **Server**: Vite development server with hot reload
- **Port**: 5000 (configurable)
- **Assets**: Served directly by Vite dev server

### Production Build
- **Build Output**: Static files in `dist/` directory
- **Assets**: Optimized and bundled by Vite
- **Routing**: Client-side routing with fallback to index.html

### Static Site Deployment
- **Netlify**: Ready with netlify.toml configuration
- **Vercel**: Compatible with default settings
- **GitHub Pages**: Can be deployed as static site
- **Any CDN**: Standard static file hosting

## Changelog

Changelog:
- July 08, 2025. Initial setup and successful migration from Lovable to Replit
- July 08, 2025. Fixed CSS import order and font configuration for Poppins font family
- July 08, 2025. Installed missing dependencies: react-router-dom, sonner
- July 08, 2025. Converted to frontend-only application, removed backend dependencies

## User Preferences

Preferred communication style: Simple, everyday language.
Font preference: Poppins font family throughout the application.