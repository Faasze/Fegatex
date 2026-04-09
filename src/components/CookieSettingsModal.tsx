import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export interface CookieConsent {
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  validity: string;
  type: string;
}

interface Category {
  id: keyof CookieConsent | "necessary";
  label: string;
  description: string;
  required: boolean;
  cookies: CookieRow[];
}

const categories: Category[] = [
  {
    id: "necessary",
    label: "Nevyhnutné",
    description: "Bez týchto cookies stránka nefunguje. Nie je možné ich vypnúť.",
    required: true,
    cookies: [
      { name: "fegatex_cookie_consent", provider: "FeGa-Tex", purpose: "Uloženie vašich nastavení súhlasu s cookies", validity: "1 rok", type: "Vlastná" },
    ],
  },
  {
    id: "analytics",
    label: "Analytické",
    description: "Pomáhajú nám pochopiť, ako návštevníci používajú stránku. Všetky dáta sú anonymizované.",
    required: false,
    cookies: [
      { name: "_ga", provider: "Google Analytics", purpose: "Rozlíšenie unikátnych používateľov", validity: "2 roky", type: "Tretia strana" },
      { name: "_gid", provider: "Google Analytics", purpose: "Rozlíšenie používateľov", validity: "24 hodín", type: "Tretia strana" },
      { name: "_ga_*", provider: "Google Analytics", purpose: "Udržanie stavu relácie", validity: "2 roky", type: "Tretia strana" },
    ],
  },
  {
    id: "functional",
    label: "Funkčné",
    description: "Umožňujú stránke zapamätať si vaše preferencie (napr. jazyk, región).",
    required: false,
    cookies: [
      { name: "fegatex_lang", provider: "FeGa-Tex", purpose: "Zapamätanie jazykových preferencií", validity: "1 rok", type: "Vlastná" },
    ],
  },
  {
    id: "marketing",
    label: "Marketingové",
    description: "V súčasnosti nepoužívame žiadne marketingové ani reklamné cookies.",
    required: false,
    cookies: [],
  },
];

interface Props {
  open: boolean;
  onSave: (consent: CookieConsent) => void;
  onAcceptAll: () => void;
  onDeclineAll: () => void;
}

const CookieSettingsModal = ({ open, onSave, onAcceptAll, onDeclineAll }: Props) => {
  const [consent, setConsent] = useState<CookieConsent>({
    analytics: false,
    functional: false,
    marketing: false,
  });

  const toggle = (key: keyof CookieConsent) =>
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Nastavenia cookies</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[65vh] pr-4">
          <div className="space-y-6 text-sm">

            {categories.map((cat) => (
              <div key={cat.id} className="border border-border rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-foreground">{cat.label}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{cat.description}</p>
                  </div>
                  {cat.required ? (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">Vždy zapnuté</span>
                  ) : (
                    <Switch
                      checked={consent[cat.id as keyof CookieConsent]}
                      onCheckedChange={() => toggle(cat.id as keyof CookieConsent)}
                    />
                  )}
                </div>

                {cat.cookies.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-border text-muted-foreground">
                          <th className="text-left py-1.5 pr-3 font-medium">Názov</th>
                          <th className="text-left py-1.5 pr-3 font-medium">Poskytovateľ</th>
                          <th className="text-left py-1.5 pr-3 font-medium">Účel</th>
                          <th className="text-left py-1.5 pr-3 font-medium">Platnosť</th>
                          <th className="text-left py-1.5 font-medium">Typ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.cookies.map((c) => (
                          <tr key={c.name} className="border-b border-border/50 last:border-0">
                            <td className="py-1.5 pr-3 font-mono text-foreground">{c.name}</td>
                            <td className="py-1.5 pr-3 text-muted-foreground">{c.provider}</td>
                            <td className="py-1.5 pr-3 text-muted-foreground">{c.purpose}</td>
                            <td className="py-1.5 pr-3 text-muted-foreground whitespace-nowrap">{c.validity}</td>
                            <td className="py-1.5 text-muted-foreground whitespace-nowrap">{c.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {cat.cookies.length === 0 && (
                  <p className="text-xs text-muted-foreground/60 italic">Žiadne cookies v tejto kategórii.</p>
                )}
              </div>
            ))}

          </div>
        </ScrollArea>

        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-border">
          <Button variant="outline" size="sm" onClick={onDeclineAll} className="flex-1">
            Zamietnuť všetky
          </Button>
          <Button variant="outline" size="sm" onClick={() => onSave(consent)} className="flex-1">
            Uložiť moje nastavenia
          </Button>
          <Button size="sm" onClick={onAcceptAll} className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
            Prijať všetky
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettingsModal;
