# Portfolio Web Application

## Overview

This is a modern full-stack portfolio web application showcasing AI-powered projects and developer skills. The application features a React-based frontend with a clean, responsive design using shadcn/ui components and Tailwind CSS. The backend is built with Express.js and includes database integration using Drizzle ORM with PostgreSQL.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: React Router for client-side navigation
- **State Management**: React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Theme**: Dark/light mode support with system preference detection

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL session store
- **Development**: Hot reload with Vite middleware integration
- **Build**: ESBuild for production bundling

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Defined in `shared/schema.ts` with users table including id, username, and password fields
- **Migrations**: Managed through Drizzle Kit with migrations stored in `./migrations`
- **Database Provider**: Neon Database for serverless PostgreSQL

### Storage Interface
- **Abstraction**: IStorage interface for CRUD operations
- **Implementation**: Memory storage for development (MemStorage class)
- **User Management**: Basic user creation and retrieval functionality

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

1. **Client Requests**: React Router handles client-side navigation
2. **API Communication**: React Query manages server state and caching
3. **Server Processing**: Express.js routes handle API requests
4. **Data Access**: Storage interface abstracts database operations
5. **Database Operations**: Drizzle ORM executes type-safe queries
6. **Response Handling**: JSON responses with appropriate error handling

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router
- **UI Framework**: Radix UI components for accessibility
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with Zod integration
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, various development tools

### Development Tools
- **Build**: Vite with React plugin and error overlay
- **TypeScript**: Full TypeScript support with strict configuration
- **Linting**: ESLint and TypeScript compiler for code quality
- **Package Management**: npm with lockfile for dependency management

## Deployment Strategy

### Development Environment
- **Server**: Express.js with Vite middleware for hot reload
- **Database**: PostgreSQL database with environment-based configuration
- **Assets**: Vite dev server for frontend assets
- **Environment**: NODE_ENV=development with appropriate logging

### Production Build
- **Frontend**: Vite build generates optimized static assets
- **Backend**: ESBuild bundles server code for Node.js execution
- **Assets**: Static files served from dist/public directory
- **Database**: Production PostgreSQL with connection pooling

### Environment Configuration
- **Database URL**: Required environment variable for database connection
- **Session Storage**: PostgreSQL-based session management
- **Asset Serving**: Conditional static file serving based on environment

## Changelog

Changelog:
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.