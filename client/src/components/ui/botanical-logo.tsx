export default function BotanicalLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Grow Integrative Health Botanical Logo"
    >
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Central flower/leaf motif */}
        <path d="M100 100 C80 80, 60 90, 70 120 C80 140, 100 130, 100 100" />
        <path d="M100 100 C120 80, 140 90, 130 120 C120 140, 100 130, 100 100" />
        <path d="M100 100 C110 70, 100 50, 80 60 C60 70, 70 100, 100 100" />
        <path d="M100 100 C90 70, 100 50, 120 60 C140 70, 130 100, 100 100" />
        <path d="M100 100 C80 120, 60 110, 70 80 C80 60, 100 70, 100 100" />
        <path d="M100 100 C120 120, 140 110, 130 80 C120 60, 100 70, 100 100" />
        <path d="M100 100 C90 130, 100 150, 120 140 C140 130, 130 100, 100 100" />
        <path d="M100 100 C110 130, 100 150, 80 140 C60 130, 70 100, 100 100" />
        
        {/* Center circle */}
        <circle cx="100" cy="100" r="8" fill="currentColor" />
      </g>
    </svg>
  );
}
