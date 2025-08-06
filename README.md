# Dr. Mia Potter - Grow Integrative Health Website

A modern, responsive website for Dr. Camella (Mia) Potter's naturopathic practice in Redmond, Oregon.

## Features

- **Modern React Frontend**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Accessible UI**: Built with Radix UI primitives
- **Contact Forms**: Integrated with Web3Forms for reliable form submissions
- **Patient Portal**: Direct links to ChARM patient portal
- **Online Scheduling**: Embedded ChARM scheduling system

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run check
```

## Deployment

This project is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. The build command is `npm run build`
4. The output directory is `dist`

### Environment Variables

No environment variables are required for this static site.

## Contact Forms

The website uses Web3Forms for contact form submissions:
- Home page consultation form
- Contact page detailed form
- Both forms submit to the same Web3Forms endpoint
- Access key is embedded in the forms

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
│   └── index.html
├── attached_assets/        # Static assets (images, PDFs)
├── dist/                   # Build output
├── public/                 # Public static files
└── vercel.json            # Vercel deployment configuration
```

## License

MIT License
