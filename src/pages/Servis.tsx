import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Users, Calendar, Award } from 'lucide-react';

const Servis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Servis</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Profesionální servis a údržba vzduchotechnických systémů a čistých prostorů
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Spolupracujeme výhradně se specialisty, kteří mají s instalací daného typu systému rozsáhlé zkušenosti 
              a jsou pro montáž patřičně proškoleni a vybaveni. Vše probíhá dle dohodnutého harmonogramu prací 
              s maximálním ohledem na stanovený termín dokončení díla a majetek investora.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Po montáži zajistíme odborné zaregulování celého systému a zaškolení obsluhy s vysvětlením 
              servisních požadavků zařízení.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-accent/30 p-8 rounded-lg">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Zkušení specialisté</h3>
                <p className="text-muted-foreground">
                  Náš tým tvoří vysoce kvalifikovaní specialisté s rozsáhlými zkušenostmi 
                  v oblasti vzduchotechniky a čistých prostorů. Každý člen týmu je řádně 
                  vyškolen a certifikován pro práci s nejmodernějšími technologiemi.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Plánovaná údržba</h3>
                <p className="text-muted-foreground">
                  Vše probíhá dle dohodnutého harmonogramu prací s maximálním ohledem 
                  na stanovený termín dokončení díla. Respektujeme provozní požadavky 
                  vašeho zařízení a minimalizujeme prostoje.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Kompletní servis</h3>
                <p className="text-muted-foreground">
                  Po montáži zajistíme odborné zaregulování celého systému, provedeme 
                  všechny potřebné testy a měření. Systém předáváme plně funkční 
                  a optimalizovaný pro váš provoz.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Zaškolení obsluhy</h3>
                <p className="text-muted-foreground">
                  Poskytujeme komplexní zaškolení obsluhy s vysvětlením servisních 
                  požadavků zařízení. Vaši zaměstnanci budou schopni systém správně 
                  obsluhovat a provádět základní údržbu.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Naše servisní služby zahrnují</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Pravidelnou údržbu vzduchotechnických systémů</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Výměnu a servis HEPA a ULPA filtrů</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Kontrolu a zaregulování vzduchotechnických jednotek</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Opravy a úpravy stávajících systémů</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Preventivní prohlídky a diagnostiku</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Pohotovostní servis</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Dodávku náhradních dílů</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Zaškolení personálu</span>
              </li>
            </ul>

            <div className="bg-primary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Maximální ochrana vašeho majetku</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Při všech pracích dbáme na maximální ochranu majetku investora. Naši technici 
                používají ochranné pomůcky a postupy, které minimalizují riziko poškození 
                okolního vybavení a zajišťují bezpečnost provozu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servis;
