import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Štarter",
    subtitle: "Pre malé firmy",
    price: "Od 8 €",
    unit: "/ zamestnanec / mesiac",
    description: "Ideálne pre firmy do 20 zamestnancov",
    features: [
      "Prenájom pracovných odevov",
      "Profesionálne pranie",
      "Základné opravy",
      "Mesačná dodávka",
      "Osobná konzultácia",
    ],
    cta: "Získať ponuku",
    highlight: false,
  },
  {
    name: "Business",
    subtitle: "Najpopulárnejší",
    price: "Od 6 €",
    unit: "/ zamestnanec / mesiac",
    description: "Pre firmy s 20–100 zamestnancami",
    features: [
      "Všetko zo Štartera",
      "Logo a potlač odevov",
      "Prioritný servis",
      "Týždenná dodávka",
      "Online správa objednávok",
      "Dedikovaný kontakt",
    ],
    cta: "Získať ponuku",
    highlight: true,
  },
  {
    name: "Enterprise",
    subtitle: "Pre veľké firmy",
    price: "Na dopyt",
    unit: "",
    description: "Pre firmy s 100+ zamestnancami",
    features: [
      "Všetko z Business",
      "Account manager",
      "SLA zmluva",
      "Vlastný sklad",
      "Denná dodávka",
      "API integrácia",
      "Ročná revízia",
    ],
    cta: "Kontaktujte nás",
    highlight: false,
  },
];

const Pricing = () => {
  useEffect(() => {
    document.title = "Cenník | FeGa-Tex";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Cenník služieb
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparentné ceny pre každú veľkosť firmy. Všetky balíky zahŕňajú
              kompletný servis odevov — od prenájmu po dodávku.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={[
                  "relative rounded-2xl border bg-card p-8 shadow-sm flex flex-col transition-transform",
                  plan.highlight
                    ? "border-accent md:scale-105 shadow-lg ring-2 ring-accent"
                    : "border-border",
                ].join(" ")}
              >
                {/* Highlight badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                      Najpopulárnejší
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                  {plan.unit && (
                    <span className="text-sm text-muted-foreground ml-1">{plan.unit}</span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlight ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href={`/#kontakt?plan=${plan.name.toLowerCase()}`}>
                    {plan.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-muted-foreground mt-12">
            Ceny sú orientačné a bez DPH. Presná ponuka závisí od počtu zamestnancov,
            typu odevov a frekvencie dodávok.{" "}
            <a href="/#kontakt" className="text-accent underline underline-offset-2 hover:opacity-80">
              Kontaktujte nás
            </a>{" "}
            pre individuálnu kalkuláciu.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
