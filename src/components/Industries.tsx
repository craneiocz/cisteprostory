import { Pill, HeartPulse, Eye, Cpu, UtensilsCrossed, Building2 } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Pill,
      title: 'Farmacie',
      description: 'Farmaceutický průmysl klade nejvyšší nároky na čistotu výrobního prostředí. Realizujeme čisté prostory třídy A, B, C a D podle EU GMP Annex 1 pro výrobu sterilních léčivých přípravků, očních kapek, injekcí a infuzních roztoků. Zajišťujeme kompletní validace včetně kvalifikací DQ, IQ, OQ a PQ, které jsou nezbytné pro schválení SÚKL. Naše řešení zahrnují izolátory pro aseptické plnění, RABS systémy a kompletní vzduchotechniku s HEPA filtrací.',
      alt: 'čisté prostory pro farmaceutickou výrobu'
    },
    {
      icon: HeartPulse,
      title: 'Zdravotnictví',
      description: 'Pro nemocnice a zdravotnická zařízení dodáváme čisté prostory pro operační sály, JIP, sterilizační centrály a lékárny s přípravnou individuálně připravovaných léčivých přípravků (IPLP). Specializujeme se na izolátory pro přípravu cytostatik a bariérové systémy pro aseptickou přípravu parenterální výživy. Všechna řešení splňují vyhlášku č. 92/2012 Sb. a doporučení SÚKL pro čisté prostory ve zdravotnictví.',
      alt: 'čisté prostory pro nemocnice a operační sály'
    },
    {
      icon: Eye,
      title: 'Optika a přesná mechanika',
      description: 'Optický průmysl vyžaduje maximální kontrolu nad částicemi ve vzduchu, které mohou poškodit citlivé optické povrchy. Navrhujeme a realizujeme čisté prostory třídy ISO 5 až ISO 8 pro výrobu optických prvků, laserových systémů a přesných mechanických komponent. Zajišťujeme laminární proudění vzduchu nad kritickými pracovišti a antistatické vybavení pro práci s citlivými materiály.',
      alt: 'čisté prostory pro optický průmysl'
    },
    {
      icon: Cpu,
      title: 'Mikroelektronika',
      description: 'Výroba polovodičů a elektronických součástek vyžaduje extrémně čisté prostředí. Dodáváme čisté prostory třídy ISO 3 až ISO 6 s kontrolou molekulární kontaminace (AMC). Naše řešení zahrnují ULPA filtraci, chemickou filtraci pro odstranění organických a anorganických kontaminantů a přesnou kontrolu teploty a vlhkosti pro stabilitu výrobních procesů. Provádíme měření počtu částic pomocí kondenzačních počítadel.',
      alt: 'čisté prostory pro výrobu elektroniky a polovodičů'
    },
    {
      icon: UtensilsCrossed,
      title: 'Potravinářství',
      description: 'Potravinářský průmysl využívá čisté prostory pro balení citlivých produktů, výrobu dětské výživy a doplňků stravy. Realizujeme hygienické zóny s pozitivním tlakem, které brání vstupu kontaminantů z okolního prostředí. Naše vzduchotechnické systémy zahrnují HEPA filtraci, UV-C dezinfekci vzduchu a systémy pro kontrolu teploty a vlhkosti. Řešení splňují standardy HACCP a IFS.',
      alt: 'čisté prostory pro potravinářský průmysl'
    },
    {
      icon: Building2,
      title: 'Automotive a aerospace',
      description: 'Automobilový a letecký průmysl vyžaduje čisté prostory pro lakování, montáž citlivých elektronických systémů a výrobu kompozitních materiálů. Dodáváme čisté prostory s kontrolovanou teplotou a vlhkostí pro aplikaci barev a laků bez prachových inkluzí. Pro aerospace průmysl zajišťujeme prostory splňující standardy AS9100 a NASA pro výrobu komponent kosmických systémů.',
      alt: 'čisté prostory pro automobilový a letecký průmysl'
    }
  ];

  return (
    <section id="odvetvi" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Kde <span className="text-primary">působíme</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Naše <strong>čisté prostory a vzduchotechnické systémy</strong> slouží široké škále průmyslových odvětví. 
            Od farmaceutické výroby přes zdravotnictví až po high-tech průmysl – všude, kde je vyžadována 
            kontrolovaná čistota prostředí a dodržování přísných norem ISO 14644 a EU GMP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <industry.icon className="h-7 w-7 text-primary" aria-label={industry.alt} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
