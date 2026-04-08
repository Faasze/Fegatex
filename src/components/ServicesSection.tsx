import { Shirt, WashingMachine, Warehouse, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Prenájom odevov",
    desc: "Široký sortiment pracovných odevov pre všetky odvetvia — od výroby po gastro a zdravotníctvo.",
  },
  {
    icon: WashingMachine,
    title: "Pranie a servis",
    desc: "Profesionálne pranie, dezinfekcia a opravy odevov podľa najprísnejších hygienických štandardov.",
  },
  {
    icon: Warehouse,
    title: "Skladovanie a logistika",
    desc: "Kompletná logistika — uskladnenie, výmena a pravidelné dodávky priamo k vám.",
  },
  {
    icon: MessageSquare,
    title: "Poradenstvo",
    desc: "Pomôžeme vám vybrať správne odevy a nastaviť optimálny servisný cyklus pre vašu firmu.",
  },
];

const ServicesSection = () => (
  <section id="sluzby" className="py-20 md:py-28 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Služby</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Čo pre vás zabezpečíme
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex gap-5 p-7 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
