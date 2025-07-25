import { Link } from "wouter";
import { Phone, MapPin, Shield } from "lucide-react";
import BotanicalLogo from "@/components/ui/botanical-logo";

export default function Footer() {
  return (
    <footer className="bg-slate-deep text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BotanicalLogo className="w-6 h-6 text-white" />
              <div>
                <div className="font-playfair text-lg font-semibold">
                  Grow Integrative Health
                </div>
                <div className="text-stone-light text-sm">
                  Dr. Camella (Mia) Potter, ND
                </div>
              </div>
            </div>
            <p className="text-stone-light">
              Combining LENS neurofeedback with naturopathic medicine for 
              comprehensive healing in Redmond, Oregon.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-stone-light">
              <li>
                <Link href="/about" className="hover:text-sage-warm transition-colors">
                  About Dr. Potter
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sage-warm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-sage-warm transition-colors">
                  Conditions We Treat
                </Link>
              </li>
              <li>
                <Link href="/parents" className="hover:text-sage-warm transition-colors">
                  For Parents
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sage-warm transition-colors">
                  Schedule Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-stone-light">
              <li>LENS Neurofeedback</li>
              <li>Naturopathic Medicine</li>
              <li>Nutritional Therapy</li>
              <li>Hormone Balance</li>
              <li>Digestive Health</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-stone-light">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sage-warm" />
                <a 
                  href="tel:4582198915" 
                  className="hover:text-sage-warm transition-colors"
                >503-856-2488</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-sage-warm mt-1" />
                <div>
                  1655 SW Highland Ave, Suite 5<br />
                  Redmond, OR 97756
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-sage-warm" />
                <span>Oregon License #1959</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-light mt-8 pt-8 text-center text-stone-light">
          <p>&copy; 2024 Grow Integrative Health. All rights reserved. | HIPAA Compliant Practice</p>
        </div>
      </div>
    </footer>
  );
}
