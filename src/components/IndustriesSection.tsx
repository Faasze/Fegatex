import { Factory, UtensilsCrossed, HeartPulse, Hotel, Apple, Wrench } from "lucide-react";

const industries = [
  { icon: Factory, label: "Výroba a priemysel" },
  { icon: UtensilsCrossed, label: "Gastronómia" },
  { icon: HeartPulse, label: "Zdravotníctvo" },
  { icon: Hotel, label: "Hotely a wellness" },
  { icon: Apple, label: "Potravinárstvo" },
  { icon: Wrench, label: "Technické služby" },
];

const IndustriesSection = () => (
  <section id="odvetvia" className="py-20 md:py-28 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Odvetvia</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Pre koho sú naše služby
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Obsluhujeme firmy naprieč odvetviami, kde je pracovný odev nevyhnutnosťou.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map((ind) => (
          <div
            key={ind.label}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <ind.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground text-center">{ind.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
