import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Prečo my", href: "#benefity" },
  { label: "Služby", href: "#sluzby" },
  { label: "Ako to funguje", href: "#proces" },
  { label: "Pre koho", href: "#odvetvia" },
  { label: "Predaj odevov", href: "#predaj-odevov" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 36" width="56" height="36">
            <rect width="56" height="36" rx="7" fill="white" fillOpacity="0.15"/>
            <text x="28" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="2">FGT</text>
          </svg>
          <span className="text-xl font-bold text-primary-foreground tracking-tight">FeGa<span className="text-gradient">-Tex</span></span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#kontakt">Cenová ponuka</a>
          </Button>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-primary-foreground/70 hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button variant="hero" size="sm" className="w-full" asChild>
              <a href="#kontakt" onClick={() => setOpen(false)}>Cenová ponuka</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
