const Footer = () => (
  <footer className="hero-gradient py-10 border-t border-primary-foreground/10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="text-lg font-bold text-primary-foreground tracking-tight">
        FeGa<span className="text-gradient">-Tex</span>
      </a>
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} FeGa-Tex s.r.o. Všetky práva vyhradené.
      </p>
    </div>
  </footer>
);

export default Footer;
