import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BotanicalLogo from "@/components/ui/botanical-logo";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Conditions", href: "/conditions" },
    { name: "For Parents", href: "/parents" },
    { name: "New Patients", href: "/new-patients" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-deep text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              1655 SW Highland Ave, Suite 5, Redmond, OR 97756
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Mon-Thu: 9AM-5PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:5038562488" 
              className="hover:text-sage-warm transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              (503) 856-2488
            </a>
            <Button 
              size="sm" 
              className="bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-4 py-1 rounded-full text-sm font-medium"
              onClick={() => window.open('/schedule', '_self')}
            >
              Schedule Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <BotanicalLogo className="w-8 h-8 text-slate-deep" />
            <div>
              <div className="font-playfair text-xl font-semibold text-slate-deep">
                Grow Integrative Health
              </div>
              <div className="text-sm text-stone-medium">
                Dr. Camella (Mia) Potter, ND
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-sage-warm"
                    : "text-slate-deep hover:text-sage-warm"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              className="hidden sm:block bg-sage-warm text-slate-deep hover:bg-sage-warm/90 px-6 py-2 rounded-full font-medium"
              onClick={() => window.open('https://accounts.charmtracker.com/signin?hide_signup=true&hide_secure=true&hide_gsignup=true&servicename=charmphr&serviceurl=https%3A%2F%2Fphr2.charmtracker.com%2Fmain.do', '_blank')}
            >
              Patient Portal
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-slate-deep"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-stone-light pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-sage-warm"
                      : "text-slate-deep hover:text-sage-warm"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="sm:hidden bg-sage-warm text-slate-deep hover:bg-sage-warm/90 w-full rounded-full font-medium mt-4"
                onClick={() => window.open('https://accounts.charmtracker.com/signin?hide_signup=true&hide_secure=true&hide_gsignup=true&servicename=charmphr&serviceurl=https%3A%2F%2Fphr2.charmtracker.com%2Fmain.do', '_blank')}
              >
                Patient Portal
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
