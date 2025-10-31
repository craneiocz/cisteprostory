import { Shield, Wind, Gauge, Settings, Thermometer, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Farmaceutické čisté prostory',
      description: 'Zajišťujeme kompletní realizaci a údržbu čistých prostorů pro farmaceutický průmysl v souladu s ISO 14644-1, ISO 14644-2, EU GMP Annex 1 a EN 1822.',
      features: ['Návrh a realizace podle ISO 14644 a EU GMP požadavků', 'Validace čistých prostor', 'Certifikace a dokumentace']
    },
    {
      icon: Wind,
      title: 'Vzduchotechnika pro čisté prostory',
      description: 'Projektujeme, dodáváme a instalujeme specializované vzduchotechnické systémy s HEPA a ULPA filtrací pro maximální čistotu vzduchu v souladu s normami ISO 14644-1, ISO 14644-2 a EN 1822.',
      features: ['HEPA a ULPA filtry třídy H13, H14, U15', 'Laminární boxy a izolátory', 'Klimatizační jednotky s regulací']
    },
    {
      icon: Gauge,
      title: 'Validace a měření',
      description: 'Provádíme profesionální měření čistoty vzduchu a validace čistých prostorů podle ISO 14644-1, ISO 14644-2, EU GMP Annex 1 a EN 1822.',
      features: ['Měření počtu částic a mikrobiologické kontroly', 'Kvalifikace IQ, OQ, PQ', 'Testy integrity filtrů a systémů', 'Měření teploty a vlhkosti', 'Měření objemu vzduchu a vzduchového výkonu (výkon VZT)']
    },
    {
      icon: Settings,
      title: 'Komplexní servis a údržba',
      description: 'Nabízíme pravidelný servis, údržbu a výměnu HEPA filtrů včetně kompletního technického zázemí a havarijní služby. Provádíme servis laminárních boxů, izolátorů, digestoří a dalších laboratorních zařízení.',
      features: ['Pravidelná údržba HEPA systémů', 'Výměna HEPA filtrů', 'Pohotovostní servis 24/7']
    },
    {
      icon: BookOpen,
      title: 'Odborné poradenství a konzultace',
      description: 'Poskytujeme expertní poradenství při návrhu, optimalizaci a provozu čistých prostorů pro různá průmyslová odvětví v souladu s ISO 14644-1, ISO 14644-2 a EU GMP Annex 1.',
      features: ['Konzultace pro ISO a EU GMP compliance', 'Optimalizace provozu a nákladů', 'Školení personálu']
    },
    {
      icon: Thermometer,
      title: 'HVAC systémy (vzduchotechnika, topení a chlazení) a klimatizace',
      description: 'Dodáváme a servisujeme komplexní HVAC systémy s přesnou kontrolou teploty, vlhkosti a čistoty vzduchu pro kritické prostory podle ISO 14644-1 a ISO 14644-2.',
      features: ['Klimatizační systémy s řízenou vlhkostí', 'Regulace tlakových gradientů', 'Monitoring a automatizace']
    }
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO optimized section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Profesionální <span className="text-primary">služby pro čisté prostory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Poskytujeme <strong>komplexní řešení čistých prostorů pro farmaceutický průmysl, nemocnice a laboratoře</strong> včetně 
            vzduchotechniky, HEPA filtrů, validace a servisu v souladu s normami ISO 14644 – Čisté prostory a související řízená prostředí, EU GMP a příslušnými normami pro filtry
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