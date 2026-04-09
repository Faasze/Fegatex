import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const imageModules = import.meta.glob("../assets/oblecenie/*", { eager: true, as: "url" });

const items = Object.entries(imageModules).map(([path, src]) => {
  const filename = path.split("/").pop() ?? path;
  const name = filename.replace(/\.[^.]+$/, "").replace(/Screenshot \d{4}-\d{2}-\d{2} \d+/i, "Pracovný odev");
  return { src: src as string, name };
});

const ClothingSalesSection = () => (
  <section id="predaj-odevov" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Predaj odevov</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Čo ponúkame na predaj
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Kvalitné pracovné odevy a ochranné oblečenie dostupné na okamžitý nákup.
        </p>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.src}
              className="rounded-2xl overflow-hidden border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-4">
          <ShoppingBag className="w-12 h-12 opacity-30" />
          <p className="text-sm">Obrázky produktov čoskoro pribúdajú.</p>
        </div>
      )}

      <div className="text-center mt-10">
        <Button variant="default" asChild>
          <a href="#kontakt">Mám záujem o kúpu</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ClothingSalesSection;
