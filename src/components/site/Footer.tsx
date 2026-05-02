import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-primary font-display font-bold">T</div>
            <span className="font-display text-lg">Taruchi Logistics</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">Moving Africa and beyond. Trusted freight, customs and project cargo across Zimbabwe, Zambia, South Africa & China.</p>
        </div>
        <div>
          <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/fleet" className="hover:text-gold">Fleet & Coverage</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/quote" className="hover:text-gold">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Branches</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>🇿🇼 Zimbabwe (HQ)</li>
            <li>🇿🇲 Zambia</li>
            <li>🇿🇦 South Africa</li>
            <li>🇨🇳 China</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" /><a href="mailto:info@taruchilogistics.com" className="hover:text-gold break-all">info@taruchilogistics.com</a></li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" /><a href="tel:+263774136153" className="hover:text-gold">+263 77 413 6153</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />Headquarters, Zimbabwe</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="container mx-auto px-4 py-5 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Taruchi Logistics. All rights reserved.</span>
          <span>Engineered for global trade.</span>
        </div>
      </div>
    </footer>
  );
}
