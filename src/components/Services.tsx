import { Shield, Wind, Gauge, Settings, Thermometer, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Čisté prostory',
      description: 'Provádíme kompletní dodávky a montáž vzduchotechniky, vzduchotechnických filtrů včetně filtrů atypických dělaných na míru dle potřeb zákazníka.',
      features: ['HEPA filtry na míru', 'Kompletní montáž', 'Certifikace ISO']
    },
    {
      icon: Thermometer,
      title: 'Klimatizace',
      description: 'Uvedení zařízení do provozu včetně zpracování příslušných dokladů pro kolaudaci a následnou validaci všechny opravy stávajících vzduchotechnických rozvodů.',
      features: ['Uvedení do provozu', 'Kolaudační doklady', 'Opravy rozvodů']
    },
    {
      icon: Users,
      title: 'Poradenská činnost',
      description: 'Naše společnost zajišťuje servis vzduchotechniky včetně dodávek HEPA filtrů, jejich výměn a atestu.',
      features: ['Odborné poradenství', 'Servis HEPA filtrů', 'Atestace zařízení']
    },
    {
      icon: Settings,
      title: 'Služby',
      description: 'Uvedení zařízení do provozu včetně zpracování příslušných dokladů pro kolaudaci a následnou validaci všechny opravy stávajících vzduchotechnických rozvodů.',
      features: ['Komplexní servis', 'Preventivní údržba', 'Rychlá reakce']
    },
    {
      icon: Gauge,
      title: 'Validace a měření',
      description: 'Zajišťujeme měření, validace a servis čistého prostoru. Veškeré měření je prováděno špičkovými certifikovanými přístroji s pravidelným servisem a kalibrací.',
      features: ['Certifikované přístroje', 'Pravidelná kalibrace', 'Kompletní dokumentace']
    },
    {
      icon: Wind,
      title: 'Vzduchotechnika',
      description: 'Kompletní poradenskou činnost ohledně vzduchotechniky a klimatizace s důrazem na energetickou efektivnost a spolehlivost provozu.',
      features: ['Energetická efektivnost', 'Spolehlivý provoz', 'Odborné poradenství']
    }
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Naše <span className="text-primary">služby</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Poskytujeme komplexní řešení pro čisté prostory s důrazem na kvalitu, 
            přesnost a dlouhodobou spolehlivost
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