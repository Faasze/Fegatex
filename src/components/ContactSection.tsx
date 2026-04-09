import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { contactSchema, ContactFormData } from "@/lib/schemas/contactSchema";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      gdprConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (!endpoint) throw new Error("Formspree endpoint nie je nakonfigurovaný");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || "",
          message: data.message || "",
          _subject: `Nový dopyt od ${data.name} – ${data.company}`,
        }),
      });

      if (!res.ok) throw new Error("Chyba pri odosielaní");

      toast({ title: "Ďakujeme!", description: "Vašu správu sme prijali. Ozveme sa vám do 24 hodín." });
      form.reset();
    } catch {
      toast({ title: "Chyba", description: "Správu sa nepodarilo odoslať. Skúste to prosím znova.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="lg:col-span-3 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Meno a priezvisko" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Firma" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="E-mail" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="tel" placeholder="Telefón" className="bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Vaša správa alebo požiadavky..." rows={5} className="bg-background" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gdprConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <label className="text-sm text-muted-foreground cursor-pointer">
                        Súhlasím so spracovaním osobných údajov v súlade s{" "}
                        <a href="#" className="underline hover:text-foreground">zásadami ochrany súkromia</a>.
                      </label>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto px-10"
                disabled={loading || !form.formState.isValid}
              >
                {loading ? "Odosielam..." : "Odoslať dopyt"}
              </Button>
            </form>
          </Form>

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
                  <a href="mailto:p.feco@fegatex.sk" className="text-primary-foreground/80 text-sm hover:text-primary-foreground">
                    p.feco@fegatex.sk
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
