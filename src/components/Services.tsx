import { Shield, Wind, Gauge, Settings, Thermometer, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Farmaceutické čisté prostory',
      description: 'Zajišťujeme kompletní realizaci a údržbu čistých prostorů pro farmaceutický průmysl v souladu s ISO 14644-1, ISO 14644-2, EU GMP Annex 1 a EN 1822. Naše čisté prostory splňují nejpřísnější požadavky na kontrolu kontaminace a jsou navrženy tak, aby minimalizovaly riziko křížové kontaminace při výrobě léčiv. Specializujeme se na klasifikované prostory třídy A, B, C a D podle EU GMP, kde zajišťujeme správné tlakové kaskády, teplotní a vlhkostní parametry. Každý projekt je doprovázen kompletní dokumentací zahrnující DQ, IQ, OQ a PQ kvalifikace, které jsou nezbytné pro schválení regulačními orgány. Provádíme také pravidelné revalidace a roční testování čistých prostorů včetně měření počtu částic, testů integrity HEPA filtrů a mikrobiologického monitoringu.',
      features: ['Návrh a realizace podle ISO 14644 a EU GMP požadavků', 'Validace čistých prostor', 'Certifikace a dokumentace', 'DQ, IQ, OQ, PQ kvalifikace', 'Pravidelné revalidace a roční testování']
    },
    {
      icon: Wind,
      title: 'Vzduchotechnika pro čisté prostory',
      description: 'Projektujeme, dodáváme a instalujeme specializované vzduchotechnické systémy s HEPA a ULPA filtrací pro maximální čistotu vzduchu v souladu s normami ISO 14644-1, ISO 14644-2 a EN 1822. Vzduchotechnika čistých prostor je klíčovým prvkem pro dosažení požadované třídy čistoty. Naše řešení zahrnují kompletní návrh distribuce vzduchu, výpočty výměny vzduchu a dimenzování filtračních systémů. Dodáváme HEPA filtry třídy H13 a H14 s účinností 99,95% až 99,995% a ULPA filtry třídy U15 pro nejnáročnější aplikace. Zajišťujeme montáž laminárních boxů, izolátorů pro práci s cytostatikami a bariérových systémů. Každá instalace je zakončena kompletním měřením a uvedením do provozu včetně ověření správné funkce všech komponent systému vzduchotechniky.',
      features: ['HEPA filtry H13, H14 s účinností 99,95–99,995%', 'ULPA filtry U15 pro nejnáročnější aplikace', 'Laminární boxy a izolátory', 'Klimatizační jednotky s přesnou regulací', 'Kompletní projektová dokumentace']
    },
    {
      icon: Gauge,
      title: 'Validace a měření čistých prostorů',
      description: 'Provádíme profesionální měření čistoty vzduchu a validace čistých prostorů podle ISO 14644-1, ISO 14644-2, EU GMP Annex 1 a EN 1822. Validace dle ISO 14644 je nezbytná pro prokázání shody vašeho čistého prostoru s požadovanou třídou čistoty. Naši technici jsou vybaveni kalibrovými částicovými počítadly a dalšími měřicími přístroji pro komplexní hodnocení čistých prostorů. Provádíme měření počtu částic ve vzduchu, recovery testy, testy integrity HEPA filtrů metodou aerosol photometer, měření tlakových rozdílů, teploty, relativní vlhkosti a rychlosti proudění vzduchu. Součástí našich služeb je také mikrobiologický monitoring pomocí sedimentačních misek a aktivního vzorkování. Veškerá měření jsou dokumentována v protokolech, které splňují požadavky kontrolních orgánů.',
      features: ['Měření počtu částic certifikovanými přístroji', 'Kvalifikace IQ, OQ, PQ', 'Testy integrity HEPA filtrů', 'Měření teploty, vlhkosti a tlakových rozdílů', 'Mikrobiologický monitoring']
    },
    {
      icon: Settings,
      title: 'Komplexní servis a údržba',
      description: 'Nabízíme pravidelný servis, údržbu a výměnu HEPA filtrů včetně kompletního technického zázemí a havarijní služby. Provádíme servis laminárních boxů, izolátorů, digestoří a dalších laboratorních zařízení. Pravidelná údržba vzduchotechnických systémů je klíčová pro udržení požadované třídy čistoty a prodloužení životnosti zařízení. Naše servisní smlouvy zahrnují pravidelné kontroly, čištění a výměnu prefiltračních i HEPA filtrů v intervalech podle zatížení systému. Vedeme kompletní servisní dokumentaci pro potřeby auditů a inspekcí. V případě poruchy zajišťujeme pohotovostní servis 24/7 s rychlou odezvou po celé České republice a Slovensku. Specializujeme se také na servis izolátorů pro přípravu cytostatik a bariérových systémů pro aseptickou výrobu.',
      features: ['Pravidelná údržba HEPA systémů', 'Výměna HEPA a ULPA filtrů', 'Servis laminárních boxů a izolátorů', 'Pohotovostní servis 24/7', 'Kompletní servisní dokumentace']
    },
    {
      icon: BookOpen,
      title: 'Odborné poradenství a konzultace',
      description: 'Poskytujeme expertní poradenství při návrhu, optimalizaci a provozu čistých prostorů pro různá průmyslová odvětví v souladu s ISO 14644-1, ISO 14644-2 a EU GMP Annex 1. Naši konzultanti mají dlouholeté zkušenosti s realizací čistých prostorů ve farmacii, zdravotnictví, elektronice i potravinářství. Pomáháme s přípravou User Requirement Specification (URS), výběrem vhodného dodavatele a dozorem nad realizací. Provádíme analýzy rizik (FMEA) a gap analýzy stávajících prostor vůči aktuálním předpisům. Nabízíme školení personálu v oblasti správného chování v čistých prostorech, oblékání do speciálních oděvů a hygienických postupů. Naše služby zahrnují také přípravu na audity a inspekce regulačních orgánů.',
      features: ['Konzultace pro ISO a EU GMP compliance', 'Příprava URS a výběrová řízení', 'Analýzy rizik a gap analýzy', 'Školení personálu', 'Příprava na audity a inspekce']
    },
    {
      icon: Thermometer,
      title: 'HVAC systémy a klimatizace',
      description: 'Dodáváme a servisujeme komplexní HVAC systémy s přesnou kontrolou teploty, vlhkosti a čistoty vzduchu pro kritické prostory podle ISO 14644-1 a ISO 14644-2. Systémy vzduchotechniky, topení a chlazení jsou páteří každého čistého prostoru a jejich správný návrh je zásadní pro dosažení požadovaných parametrů. Navrhujeme systémy s přesnou regulací teploty v rozmezí ±0,5°C a relativní vlhkosti ±5%. Zajišťujeme správné nastavení tlakových kaskád mezi jednotlivými zónami pro zabránění křížové kontaminace. Naše řešení zahrnují energeticky efektivní rekuperační jednotky a systémy automatického řízení (BMS) pro monitoring a záznam všech kritických parametrů. Provádíme také mapování teplotních a vlhkostních profilů pro skladovací prostory.',
      features: ['Klimatizační systémy s řízenou vlhkostí', 'Přesná regulace teploty ±0,5°C', 'Tlakové kaskády mezi zónami', 'Energeticky efektivní rekuperace', 'BMS monitoring a automatizace']
    }
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO optimized section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Komplexní <span className="text-primary">služby pro čisté prostory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Poskytujeme <strong>kompletní řešení vzduchotechniky čistých prostorů</strong> včetně návrhu, realizace, 
            <a href="/mereni-a-validace" className="text-primary hover:underline"> validace dle ISO 14644</a>, dodávky 
            <a href="/vzduchotechnika" className="text-primary hover:underline"> HEPA filtrů H13/H14</a> a 
            <a href="/servis" className="text-primary hover:underline"> komplexního servisu</a>. Naše služby splňují normy ISO 14644, EU GMP Annex 1 a EN 1822.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
