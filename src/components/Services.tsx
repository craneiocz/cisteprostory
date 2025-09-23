import { Shield, Wind, Gauge, Settings, Thermometer, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Farmaceutické čisté prostory',
      description: 'Specializujeme se na kompletní realizaci čistých prostorů pro farmaceutický průmysl podle norem EU GMP, WHO GMP a ISO 14644. Dodáváme a instalujeme vzduchotechniku, HEPA filtry H13/H14, včetně atypických filtrů na míru podle specifických požadavků zákazníka.',
      features: ['HEPA filtry H13/H14 na míru', 'Certifikace EU GMP, WHO GMP', 'ISO 14644 compliance', 'Kompletní dokumentace']
    },
    {
      icon: Thermometer,
      title: 'HVAC systémy a klimatizace',
      description: 'Navrhujeme, dodáváme a uvádíme do provozu pokročilé HVAC systémy pro kontrolované prostředí. Zajišťujeme zpracování příslušných dokladů pro kolaudaci, validaci a dlouhodobý provoz klimatizačních jednotek v souladu s platnými normami.',
      features: ['Návrh HVAC systémů', 'Uvedení do provozu', 'Kolaudační dokumentace', 'Preventivní údržba', 'Energetická optimalizace']
    },
    {
      icon: Users,
      title: 'Odborné poradenství a konzultace',
      description: 'Poskytujeme expertní poradenskou činnost v oblasti čistých prostorů, vzduchotechniky a klimatizace s důrazem na compliance s mezinárodními normami. Naši specialisté pomáhají s optimalizací provozu a energetickou efektivností.',
      features: ['GMP compliance poradenství', 'Energetické audity', 'Optimalizace provozu', 'Školení personálu', 'Technická podpora 24/7']
    },
    {
      icon: Settings,
      title: 'Komplexní servis a údržba',
      description: 'Poskytujeme komplexní servisní služby zahrnující pravidelnou údržbu vzduchotechnických zařízení, výměnu HEPA filtrů, jejich testování a certifikaci. Zajišťujeme rychlou odezvu při poruchách a preventivní servisní programy.',
      features: ['Pravidelná údržba VZT', 'Výměna HEPA filtrů', 'Certifikace a testování', 'Pohotovostní služba', 'Servisní smlouvy']
    },
    {
      icon: Gauge,
      title: 'Validace, měření a kalibrace',
      description: 'Provádíme validaci čistých prostorů podle mezinárodních norms včetně DQ, IQ, OQ, PQ kvalifikací. Měření provádíme certifikovanými přístroji s akreditovanou kalibrací. Zajišťujeme kompletní dokumentaci pro regulatorní orgány.',
      features: ['DQ/IQ/OQ/PQ kvalifikace', 'Akreditované měření', 'Certifikované přístroje', 'Regulatorní dokumentace', 'Revalidace a údržba']
    },
    {
      icon: Wind,
      title: 'Vzduchotechnika pro čisté prostory',
      description: 'Komplexní řešení vzduchotechniky pro farmaceutické provozy, nemocnice a laboratoře. Specializujeme se na návrh, dodávku a montáž vzduchotechnických systémů s důrazem na energetickou efektivnost, spolehlivost a soulad s GMP normami.',
      features: ['Návrh VZT systémů', 'GMP compliance', 'Energetická efektivnost', 'Laminar air flow', 'Diferenční tlaky']
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
            vzduchotechniky, HEPA filtrů, validace a servisu v souladu s normami EU GMP, WHO GMP a ISO 14644
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