const Footer = () => (
  <footer className="hero-gradient py-10 border-t border-primary-foreground/10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 36" width="48" height="31">
          <rect width="56" height="36" rx="7" fill="white" fillOpacity="0.15"/>
          <text x="28" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="2">FGT</text>
        </svg>
        <span className="text-lg font-bold text-primary-foreground tracking-tight">FeGa<span className="text-gradient">-Tex</span></span>
      </a>
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} FeGa-Tex s.r.o. Všetky práva vyhradené.
      </p>
    </div>
  </footer>
);

export default Footer;
