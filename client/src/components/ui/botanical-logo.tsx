import logoImage from "@assets/image_1753474930773.png";

export default function BotanicalLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img 
      src={logoImage}
      alt="Grow Integrative Health Logo"
      className={className}
    />
  );
}
