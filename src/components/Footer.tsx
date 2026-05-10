import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/40">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Industrial sticker & label manufacturing experts since 2001. Trusted by
              India's leading enterprises.
            </p>
            <div className="flex gap-3 pt-2">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-9 w-9 rounded-md glass flex items-center justify-center text-muted-foreground hover:text-cyan transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", "Home"], ["/about", "About"], ["/products", "Products"],
                ["/industries", "Industries"], ["/quality", "Quality"], ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-cyan transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Polycarbonate Stickers</li>
              <li>PVC & Vinyl Stickers</li>
              <li>Security Stickers</li>
              <li>Barcode Labels</li>
              <li>Acrylic Labels</li>
              <li>Paper Gaskets & Washers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-cyan shrink-0" />
                <span>RL-40A, Opp. L&T Gate No. 4A, Nimblak Road, M.I.D.C., Ahilyanagar - 414111, Maharashtra</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-cyan shrink-0" />
                <div>
                  <a href="tel:+919370147921" className="block hover:text-cyan">+91 93701 47921</a>
                  <a href="tel:+917219674324" className="block hover:text-cyan">+91 7219674324</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-cyan shrink-0" />
                <a href="mailto:contact@rekhagraphics.com" className="hover:text-cyan break-all">
                  contact@rekhagraphics.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Rekha Graphics — Industrial Sticker Manufacturing Company. All rights reserved.</div>
          <div>Proprietor: Vinayak Dharmaji Myana</div>
        </div>
      </div>
    </footer>
  );
}
