import { ClipboardList, Truck, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Analýza potrieb",
    desc: "Zmapujeme vaše požiadavky, počty zamestnancov a typ pracovného prostredia.",
  },
  {
    icon: Truck,
    num: "02",
    title: "Dodanie odevov",
    desc: "Pripravíme a doručíme odevy presne podľa vašich potrieb, vrátane loga a úprav.",
  },
  {
    icon: RotateCcw,
    num: "03",
    title: "Pravidelný servis",
    desc: "Zabezpečíme pravidelné pranie, výmenu a opravy. Vy sa nemusíte o nič starať.",
  },
];

const ProcessSection = () => (
  <section id="proces" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Proces</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Ako to funguje
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((s, i) => (
          <div key={s.num} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
            )}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full hero-gradient mb-6 relative">
              <s.icon className="w-8 h-8 text-primary-foreground" />
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full accent-gradient flex items-center justify-center text-xs font-bold text-accent-foreground">
                {s.num}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
