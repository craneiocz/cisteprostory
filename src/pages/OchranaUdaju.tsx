import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OchranaUdaju = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Ochrana osobních údajů</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Správce osobních údajů</h2>
              <p>
                Správcem osobních údajů je společnost <strong>BRNO CREATIVE s.r.o.</strong>, 
                se sídlem Lidická 700/19, 602 00 Brno, IČO: 07367066, DIČ: CZ07367066 
                (dále jen „správce").
              </p>
              <p>
                Kontaktní údaje správce: <a href="mailto:info@brnocreative.cz" className="text-primary hover:underline">info@brnocreative.cz</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Rozsah zpracování osobních údajů</h2>
              <p>
                Zpracováváme pouze osobní údaje, které nám sami poskytnete v rámci komunikace s námi, 
                zejména prostřednictvím kontaktního formuláře nebo e-mailu. Jedná se především o:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Jméno a příjmení</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo (pokud ho uvedete)</li>
                <li>Název společnosti (pokud ho uvedete)</li>
                <li>Obsah vaší zprávy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Účel zpracování</h2>
              <p>Vaše osobní údaje zpracováváme za účelem:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Odpovědi na vaše dotazy a požadavky</li>
                <li>Poskytování informací o našich službách</li>
                <li>Přípravy cenových nabídek</li>
                <li>Plnění smluvních závazků</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Právní základ zpracování</h2>
              <p>
                Právním základem pro zpracování vašich osobních údajů je váš souhlas udělený 
                odesláním kontaktního formuláře nebo e-mailu, případně plnění smlouvy nebo 
                jednání o uzavření smlouvy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Doba uchovávání údajů</h2>
              <p>
                Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění účelu jejich zpracování, 
                maximálně však po dobu 3 let od posledního kontaktu, pokud zákon nestanoví delší 
                dobu uchovávání.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Vaše práva</h2>
              <p>V souvislosti se zpracováním vašich osobních údajů máte následující práva:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Právo na přístup</strong> – máte právo získat informace o tom, jaké údaje o vás zpracováváme</li>
                <li><strong>Právo na opravu</strong> – můžete požádat o opravu nepřesných údajů</li>
                <li><strong>Právo na výmaz</strong> – můžete požádat o smazání vašich údajů</li>
                <li><strong>Právo na omezení zpracování</strong> – můžete požádat o omezení zpracování vašich údajů</li>
                <li><strong>Právo na přenositelnost</strong> – máte právo získat své údaje ve strukturovaném formátu</li>
                <li><strong>Právo odvolat souhlas</strong> – svůj souhlas můžete kdykoliv odvolat</li>
                <li><strong>Právo podat stížnost</strong> – máte právo podat stížnost u Úřadu pro ochranu osobních údajů</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Zabezpečení údajů</h2>
              <p>
                Přijali jsme vhodná technická a organizační opatření k ochraně vašich osobních údajů 
                před neoprávněným přístupem, ztrátou, zničením nebo pozměněním.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies</h2>
              <p>
                Naše webové stránky mohou používat cookies pro zajištění správné funkčnosti 
                a zlepšení uživatelského zážitku. Cookies jsou malé textové soubory ukládané 
                ve vašem prohlížeči.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Kontakt</h2>
              <p>
                V případě jakýchkoliv dotazů ohledně zpracování vašich osobních údajů 
                nás kontaktujte na e-mailu: <a href="mailto:info@brnocreative.cz" className="text-primary hover:underline">info@brnocreative.cz</a>
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">
              Tyto zásady ochrany osobních údajů jsou platné od 1. 1. 2025.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OchranaUdaju;
