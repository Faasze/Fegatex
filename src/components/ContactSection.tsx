import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Ďakujeme!", description: "Vašu správu sme prijali. Ozveme sa vám čo najskôr." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Kontakt</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Získajte nezáväznú cenovú ponuku
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Vyplňte formulár a my vás budeme kontaktovať do 24 hodín s ponukou na mieru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Meno a priezvisko" required className="bg-background" />
              <Input placeholder="Firma" required className="bg-background" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="E-mail" required className="bg-background" />
              <Input type="tel" placeholder="Telefón" className="bg-background" />
            </div>
            <Textarea placeholder="Vaša správa alebo požiadavky..." rows={5} className="bg-background" />
            <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto px-10" disabled={loading}>
              {loading ? "Odosielam..." : "Odoslať dopyt"}
            </Button>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl hero-gradient">
              <h3 className="text-lg font-bold text-primary-foreground mb-5">Kontaktné údaje</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-primary-foreground/80 text-sm">
                    <p>FeGa-Tex s.r.o.</p>
                    <p>Priemyselná 123</p>
                    <p>091 01 Stropkov</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="tel:+421900123456" className="text-primary-foreground/80 text-sm hover:text-primary-foreground">
                    +421 900 123 456
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="mailto:info@fegatex.sk" className="text-primary-foreground/80 text-sm hover:text-primary-foreground">
                    info@fegatex.sk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
