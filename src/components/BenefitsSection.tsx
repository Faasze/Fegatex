import { Banknote, ShieldCheck, Palette, Clock } from "lucide-react";

const benefits = [
  {
    icon: Banknote,
    title: "Bez viazania kapitálu",
    desc: "Nemusíte investovať do nákupu odevov. Platíte len za prenájom a servis.",
  },
  {
    icon: ShieldCheck,
    title: "Garantovaná hygiena",
    desc: "Profesionálne pranie podľa hygienických noriem a certifikovaných postupov.",
  },
  {
    icon: Palette,
    title: "Individualizácia",
    desc: "Odevy prispôsobíme vašej firemnej identite — logo, farby, strih.",
  },
  {
    icon: Clock,
    title: "Úspora času",
    desc: "Kompletný servis od A po Z. Vy sa sústredíte na svoje podnikanie.",
  },
];

const BenefitsSection = () => (
  <section id="benefity" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Výhody</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Prečo si vybrať FeGa-Tex?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="group text-center p-8 rounded-2xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 bg-card"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl accent-gradient mb-5 group-hover:scale-110 transition-transform">
              <b.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
