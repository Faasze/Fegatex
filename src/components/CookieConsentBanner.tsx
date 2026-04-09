import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_KEY = "fegatex_cookie_consent";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-primary text-primary-foreground shadow-2xl border-t border-primary-foreground/20">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-5xl">
        <div className="flex-1 text-sm text-primary-foreground/90">
          <p className="font-semibold mb-1">Používame cookies</p>
          <p>
            Táto stránka používa cookies na zlepšenie vášho zážitku a analýzu návštevnosti.{" "}
            <a href="#" className="underline hover:text-primary-foreground">
              Viac informácií
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={decline}
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Odmietnuť
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Prijať všetky
          </Button>
          <button
            onClick={decline}
            className="text-primary-foreground/60 hover:text-primary-foreground ml-1"
            aria-label="Zavrieť"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
