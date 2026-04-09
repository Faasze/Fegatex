import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  open: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ open, onClose }: Props) => (
  <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Zásady ochrany osobných údajov</DialogTitle>
      </DialogHeader>
      <ScrollArea className="max-h-[70vh] pr-4">
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h3 className="font-bold text-foreground mb-2">1. Kto spracúva údaje</h3>
            <p><strong className="text-foreground">Prevádzkovateľ:</strong> FeGa-Tex s.r.o.</p>
            <p>Priemyselná 123, 091 01 Stropkov, Slovenská republika</p>
            <p>IČO: (doplniť)</p>
            <p>Kontakt: <a href="mailto:p.feco@fegatex.sk" className="underline hover:text-foreground">p.feco@fegatex.sk</a></p>
            <p className="mt-1">Zodpovedná osoba (DPO): nie je menovaná (spoločnosť nespĺňa kritériá povinného menovania DPO podľa čl. 37 GDPR).</p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-2">2. Aké údaje zbierame</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Meno a priezvisko</li>
              <li>Názov firmy</li>
              <li>E-mailová adresa</li>
              <li>Telefónne číslo (voliteľné)</li>
              <li>Obsah správy / dopytu</li>
              <li>Technické údaje: IP adresa, typ prehliadača, cookies (analytické)</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-2">3. Na aký účel</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Vybavenie vášho obchodného dopytu a komunikácia s vami</li>
              <li>Zasielanie cenovej ponuky a obchodných informácií</li>
              <li>Zákaznícka podpora a plnenie zmluvy</li>
              <li>Analýza návštevnosti webu (len s vaším súhlasom na cookies)</li>
            </ul>
            <p className="mt-2">Právny základ: plnenie zmluvy / predzmluvné rokovania (čl. 6 ods. 1 písm. b GDPR) a váš súhlas (čl. 6 ods. 1 písm. a GDPR).</p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-2">4. Ako dlho uchovávame údaje</h3>
            <p>Osobné údaje uchovávame po dobu nevyhnutnú na vybavenie dopytu, najdlhšie však <strong className="text-foreground">3 roky</strong> od posledného kontaktu, pokiaľ neuplynie dlhšia zákonom stanovená lehota (napr. účtovné doklady 10 rokov).</p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-2">5. Komu poskytujeme údaje</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Formspree Inc. – sprostredkovateľ formulárových podaní (servery v USA, zabezpečené štandardnými zmluvnými doložkami EÚ)</li>
              <li>Analytické nástroje (Google Analytics) – len pri prijatí cookies</li>
            </ul>
            <p className="mt-2">Údaje <strong className="text-foreground">nepredávame</strong> tretím stranám na marketingové účely.</p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-2">6. Prenos mimo EÚ</h3>
            <p>Niektorí sprostredkovatelia (Formspree) sídlia v USA. Prenos je zabezpečený Štandardnými zmluvnými doložkami schválenými Európskou komisiou.</p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-2">7. Vaše práva (GDPR)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Právo na prístup</strong> – môžete požiadať o kópiu vašich údajov</li>
              <li><strong className="text-foreground">Právo na opravu</strong> – môžete požiadať o opravu nesprávnych údajov</li>
              <li><strong className="text-foreground">Právo na vymazanie</strong> („právo byť zabudnutý")</li>
              <li><strong className="text-foreground">Právo na prenosnosť</strong> – získanie údajov v strojovo čitateľnom formáte</li>
              <li><strong className="text-foreground">Právo namietať</strong> spracovanie na základe oprávneného záujmu</li>
              <li><strong className="text-foreground">Právo odvolať súhlas</strong> kedykoľvek bez vplyvu na zákonnosť predchádzajúceho spracovania</li>
              <li><strong className="text-foreground">Právo podať sťažnosť</strong> na Úrad na ochranu osobných údajov SR (<a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">dataprotection.gov.sk</a>)</li>
            </ul>
            <p className="mt-2">Žiadosti zasielajte na: <a href="mailto:p.feco@fegatex.sk" className="underline hover:text-foreground">p.feco@fegatex.sk</a></p>
          </section>

          <section>
            <h3 className="font-bold text-foreground mb-2">8. Cookies</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť webu (bez súhlasu)</li>
              <li><strong className="text-foreground">Analytické cookies</strong> – Google Analytics, sledovanie návštevnosti (len so súhlasom)</li>
            </ul>
            <p className="mt-2">Súhlas s cookies môžete kedykoľvek odvolať vymazaním cookies v nastaveniach prehliadača.</p>
          </section>

          <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">Posledná aktualizácia: apríl 2026</p>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export default PrivacyPolicyModal;
