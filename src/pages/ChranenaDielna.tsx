import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Banknote,
  Heart,
  FileCheck,
  Users,
  Percent,
  Calendar,
  Check,
  ShoppingBag,
} from "lucide-react";

const CELKOVA_CENA_PRACE = 1646.16; // € / mesiac (2024)
const ODVOD_NASOBOK = 0.9;
const ODVOD_ZA_OSOBU = Math.round(CELKOVA_CENA_PRACE * ODVOD_NASOBOK * 100) / 100; // 1 481.54 €
const NAHRADNE_PLNENIE_MIN = 1000; // € za každého chýbajúceho ZPS
const POVINNY_PODIEL = 3.2; // %
const PRAH_ZAMESTNANCOV = 20;

const infoKarty = [
  {
    icon: Users,
    title: `${PRAH_ZAMESTNANCOV}+ zamestnancov`,
    desc: "Povinnosť sa vzťahuje na každého zamestnávateľa s 20 a viac zamestnancami",
  },
  {
    icon: Percent,
    title: `${POVINNY_PODIEL} % podiel ZPS`,
    desc: "Z celkového priemerného počtu zamestnancov za kalendárny rok",
  },
  {
    icon: Calendar,
    title: "Do 31. marca",
    desc: "Výkaz sa predkladá raz ročne, vždy do 31. marca nasledujúceho roka",
  },
];

const vyhody = [
  {
    icon: Banknote,
    title: "Ušetríte peniaze",
    desc: "Namiesto odvodu štátu investujete rovnakú sumu do tovaru alebo služby, ktorú skutočne využijete.",
  },
  {
    icon: ShoppingBag,
    title: "Dostanete reálne plnenie",
    desc: "Pracovné odevy, potlač, textil — naše portfólio výrobkov a služieb je k dispozícii.",
  },
  {
    icon: Heart,
    title: "Pomáhate ľuďom",
    desc: "Každá objednávka priamo podporuje zamestnanosť osôb so zdravotným postihnutím.",
  },
  {
    icon: FileCheck,
    title: "Jednoduché vybavenie",
    desc: "Postaráme sa o všetku dokumentáciu — potvrdenie o realizácii objednávky dostanete automaticky.",
  },
];

const ChranenaDielna = () => {
  useEffect(() => {
    document.title = "Chránená dielňa | FeGa-Tex";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero sekcia */}
        <section className="bg-primary text-primary-foreground pt-32 pb-20">
          <div className="container max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              CHRÁNENÁ DIELŇA
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              FeGa-Tex – Chránená dielňa
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Pri vzniku chránenej dielne FeGa-Tex s.r.o. stála myšlienka integrovať osoby so
              zdravotným postihnutím do bežného pracovného života — dať im prácu, ktorá naplní
              ich zmysel bytia.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Naši zamestnanci sa venujú práci, ktorá ich baví a ktorú by na otvorenom trhu
              práce len ťažko získali.
            </p>
          </div>
        </section>

        {/* 2. Zákonná povinnosť sekcia */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Zákonná povinnosť zamestnávateľov
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Zákon č. 5/2004 Z.z. o službách zamestnanosti (§63) ukladá zamestnávateľom
                s 20 a viac zamestnancami povinnosť zamestnávať osoby so zdravotným
                postihnutím (ZPS) v podiele 3,2 % z celkového priemerného počtu zamestnancov.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {infoKarty.map((karta) => (
                <div
                  key={karta.title}
                  className="group text-center p-8 rounded-2xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl accent-gradient mb-5 group-hover:scale-110 transition-transform">
                    <karta.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{karta.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{karta.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Pozn.: Do povinného podielu sa počítajú len zamestnanci so ZPS, ktorí u
              zamestnávateľa odpracovali v danom roku aspoň 6 mesiacov.
            </p>
          </div>
        </section>

        {/* 3. Náhradné plnenie sekcia */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ako splniť povinnosť?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ak nemáte dostatok ZPS zamestnancov, máte dve možnosti:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Karta 1 — Odvod */}
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
                    <Banknote className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Odvod na Úrad práce</h3>
                </div>

                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-foreground">
                    {ODVOD_ZA_OSOBU.toLocaleString("sk-SK")} €
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  za každého chýbajúceho ZPS zamestnanca
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  0,9-násobok celkovej ceny práce (1 646,16 €/mesiac) za každého chýbajúceho
                  ZPS zamestnanca. Odvod predkladáte Úradu práce do 31. marca.
                </p>
                <span className="inline-block self-start bg-destructive/10 text-destructive text-xs font-semibold px-3 py-1 rounded-full">
                  Nevýhodné — platíte bez protiplnenia
                </span>
              </div>

              {/* Karta 2 — Náhradné plnenie */}
              <div className="relative rounded-2xl border border-accent ring-2 ring-accent bg-card p-8 shadow-lg flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                    Odporúčame
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl accent-gradient">
                    <ShieldCheck className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Náhradné plnenie u nás</h3>
                </div>

                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-accent">
                    od {NAHRADNE_PLNENIE_MIN.toLocaleString("sk-SK")} €
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  za každého chýbajúceho ZPS zamestnanca
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Zadajte nám objednávku na výrobu alebo služby. Dostanete reálny tovar alebo
                  službu a zároveň splníte zákonnú povinnosť.
                </p>

                <span className="inline-block self-start bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  Výhodné — dostanete tovar alebo službu
                </span>

                <ul className="space-y-2 flex-1">
                  {[
                    `Zadáte objednávku na min. ${NAHRADNE_PLNENIE_MIN.toLocaleString("sk-SK")} € za každého chýbajúceho ZPS zamestnanca`,
                    "Po úhrade faktúry dostanete potvrdenie o realizácii",
                    "Potvrdenie + fotokópiu faktúry a dokladu o úhrade priložíte k výkazu",
                  ].map((krok) => (
                    <li key={krok} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                      {krok}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Výhody sekcia */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Prečo zvoliť náhradné plnenie cez FeGa-Tex?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {vyhody.map((v) => (
                <div
                  key={v.title}
                  className="group text-center p-8 rounded-2xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl accent-gradient mb-5 group-hover:scale-110 transition-transform">
                    <v.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA sekcia */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zaujíma vás náhradné plnenie?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Kontaktujte nás a spoločne nájdeme riešenie, ktoré vyhovuje vašej firme.
            </p>
            <Button variant="hero" asChild>
              <a href="/#kontakt">Kontaktovať nás</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChranenaDielna;
