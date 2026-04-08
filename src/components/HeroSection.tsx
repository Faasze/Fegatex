import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 hero-gradient opacity-85" />
    <div className="relative container text-center py-32 md:py-40">
      <p className="text-accent font-semibold text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-up opacity-0">
        Servisný prenájom pracovných odevov
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 animate-delay-100">
        Pracovné odevy bez starostí.
        <br />
        <span className="text-gradient">Kompletný servis</span> pre vašu firmu.
      </h1>
      <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animate-delay-200">
        Prenajmite si pracovné odevy a textil s kompletným servisom — pranie, opravy, skladovanie a pravidelné dodávky. Šetríme váš čas aj rozpočet.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animate-delay-300">
        <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
          <a href="#kontakt">Získajte cenovú ponuku</a>
        </Button>
        <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
          <a href="#sluzby">Naše služby</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
