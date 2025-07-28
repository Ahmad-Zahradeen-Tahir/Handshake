# Handshake Engineering Website

## Overview

This is a static React website for Handshake Engineering Limited, an ICT and engineering solutions company based in Nigeria. The application is built with React, TypeScript, and Tailwind CSS to create a modern, professional company website optimized for easy deployment to GitHub Pages, Vercel, or Netlify.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

### Static Site Architecture
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: Configured for Vercel, Netlify, and GitHub Pages
- **Contact Form**: Static implementation with user notification to call/email directly
- **Performance**: Optimized for fast loading and SEO

## Key Components

### Frontend Structure
- **Pages**: Home, About, Services, Partners, Contact with 404 handling
- **Components**: Reusable UI components, Navigation, Footer
- **Styling**: CSS modules with Tailwind integration
- **Forms**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with breakpoint utilities

### Static Site Features
- **Contact Form**: Displays helpful contact information with direct action prompts
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **SEO Optimization**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized assets and modern build pipeline

### UI Design System
- **Theme**: Custom "Handshake Engineering" color palette
- **Typography**: Consistent font sizing and spacing
- **Components**: Comprehensive set of accessible UI components
- **Icons**: Lucide React icon library
- **Animations**: CSS transitions and hover effects

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using Zod schema
3. API request sent to `/api/contact` endpoint
4. Backend validates data and stores submission
5. Success/error response sent back to frontend
6. Toast notification displayed to user

### Page Navigation
1. User clicks navigation links
2. Wouter router handles client-side routing
3. Components render with shared layout (Navigation + Footer)
4. CSS modules provide scoped styling

### API Communication
1. TanStack Query manages HTTP requests
2. Centralized API client handles authentication and error responses
3. Loading states and error boundaries provide user feedback

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem (React, ReactDOM)
- **Routing**: Wouter for lightweight routing
- **Styling**: Tailwind CSS with PostCSS
- **Forms**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for schema validation
- **HTTP Client**: TanStack Query for data fetching
- **UI Components**: Radix UI primitives and shadcn/ui
- **Database**: Drizzle ORM with Neon Database connector
- **Icons**: Lucide React

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **TypeScript**: Full TypeScript support
- **Development Server**: Express with Vite middleware integration
- **Process Management**: tsx for TypeScript execution

### Third-Party Services
- **Database**: Neon Database (serverless PostgreSQL)
- **Deployment**: Configured for production deployment
- **Development**: Replit integration with error overlay

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Assets**: Static assets served from build directory
4. **Environment**: Environment variables for database connection

### Production Configuration
- **Server**: Express serves both API and static files
- **Database**: PostgreSQL connection via environment variables
- **Sessions**: PostgreSQL session store for user sessions
- **Security**: CORS and security middleware configured

### Development Workflow
- **Hot Reloading**: Vite provides instant feedback for frontend changes
- **API Development**: Express server restarts on backend changes
- **Database**: Drizzle migrations for schema changes
- **Type Safety**: Shared TypeScript schemas between frontend and backend

### Scalability Considerations
- **Storage Interface**: Abstracted to support different backends
- **Session Management**: Configurable session store
- **API Design**: RESTful structure for easy expansion
- **Component Architecture**: Reusable UI components for consistency