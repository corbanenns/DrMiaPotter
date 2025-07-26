# Replit.md

## Overview

This is a medical website for Dr. Camella (Mia) Potter, ND - Grow Integrative Health, a naturopathic practice in Redmond, Oregon. The website combines LENS neurofeedback and naturopathic medicine services with a focus on treating complex conditions where mental/emotional and physical symptoms intertwine.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build process
- **Routing**: Wouter for client-side routing
- **UI Library**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with custom color palette matching Dr. Potter's brand
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture  
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js server
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **API**: RESTful endpoints with comprehensive error handling

### Design System
- **Color Palette**: 
  - Primary: `#515a5f` (slate-deep) for headers and primary text
  - Secondary: `#c5bc9b` (sage-warm) for accents and CTAs  
  - Background: `#faeede` (cream-soft) for main background
  - Borders: `#c1bcb3` (stone-light) for subtle elements
- **Typography**: Playfair Display for headers, Inter for body text
- **Theme**: Botanical/organic design reflecting natural healing approach

## Key Components

### Pages Structure
- **Home**: Hero section with value proposition, GROW philosophy, conditions treated, about Dr. Potter, testimonials
- **About**: Detailed information about Dr. Potter's credentials and approach
- **Services**: LENS neurofeedback and naturopathic medicine offerings
- **Conditions**: Categorized treatment areas (mental/emotional, digestive, hormonal, autoimmune)
- **For Parents**: Specialized pediatric care section (ages 6+)
- **New Patients**: Process, forms, investment information
- **Contact**: Consultation request form with HIPAA considerations

### UI Components
- **Header**: Sticky navigation with contact information and scheduling CTA
- **Footer**: Practice information, quick links, compliance details
- **Forms**: Contact/consultation request forms with validation
- **Cards**: Condition categories, service descriptions, testimonials
- **Sections**: Modular homepage sections for different content areas

### Custom Components
- **BotanicalLogo**: SVG logo reflecting the natural health brand
- **Responsive Design**: Mobile-first approach with breakpoint considerations

## Data Flow

### Contact Form Submission
1. Frontend form validation using Zod schemas
2. POST request to `/api/contact` endpoint
3. Server-side validation and logging
4. SendGrid email delivery to drmiapotter@gmail.com
5. Confirmation email sent to patient
6. Success response with reference ID
7. Toast notification to user
8. Form reset on successful submission

### Database Schema
- **Users Table**: Basic user authentication (currently minimal implementation)
- **Future Expansion**: Patient records, appointment scheduling, form submissions

### API Endpoints
- `POST /api/contact`: Handles consultation request submissions
- Future endpoints for patient portal, scheduling integration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon Database connectivity
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form handling
- **zod**: Runtime type validation
- **@sendgrid/mail**: HIPAA-compliant email delivery service

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Fast development and build tooling
- **Tailwind CSS**: Utility-first styling
- **ESBuild**: Fast JavaScript bundling for production

### Medical/Compliance Considerations
- HIPAA-compliant form handling with SendGrid email delivery
- Secure contact form submissions sent directly to Dr. Potter (drmiapotter@gmail.com)
- Automatic confirmation emails to patients
- Professional medical website standards
- Accessibility features through Radix UI components

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Compiled JavaScript execution
- **Database**: Neon Database connection via `DATABASE_URL`

### File Structure
- `client/`: Frontend React application
- `server/`: Backend Express application  
- `shared/`: Shared types and schemas
- `components.json`: shadcn/ui configuration
- `drizzle.config.ts`: Database configuration

### Replit-Specific Features
- Runtime error overlay for development
- Cartographer plugin for enhanced development experience
- Replit banner integration for external access

The architecture supports a professional medical website with room for future expansion into patient portals, appointment scheduling, and secure document handling while maintaining HIPAA compliance considerations.