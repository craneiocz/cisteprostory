import { Award, FileCheck, Shield, BookOpen } from 'lucide-react';

const Standards = () => {
  const standards = [
    {
      icon: FileCheck,
      code: 'ISO 14644-1',
      title: 'Klasifikace čistoty vzduchu',
      description: 'Mezinárodní norma definující třídy čistoty vzduchu od ISO 1 do ISO 9 na základě koncentrace částic. Stanovuje maximální povolené počty částic o velikosti 0,1 µm až 5 µm na kubický metr vzduchu. Tato norma je základem pro návrh a klasifikaci všech čistých prostorů.',
      alt: 'ISO 14644-1 klasifikace čistých prostorů'
    },
    {
      icon: FileCheck,
      code: 'ISO 14644-2',
      title: 'Monitoring čistých prostorů',
      description: 'Norma specifikující požadavky na průběžné ověřování a monitoring čistých prostorů pro udržení shody s klasifikací. Definuje metody a intervaly testování včetně měření počtu částic, tlakových rozdílů, objemu dodávaného vzduchu a dalších parametrů.',
      alt: 'ISO 14644-2 monitoring a testování'
    },
    {
      icon: Shield,
      code: 'EU GMP Annex 1',
      title: 'Výroba sterilních léčiv',
      description: 'Evropský předpis pro správnou výrobní praxi sterilních léčivých přípravků. Definuje požadavky na čisté prostory třídy A, B, C a D, limity pro počty částic a mikroorganismů, požadavky na personál, oblečení a monitoring. Platná verze z roku 2022 zpřísňuje požadavky na kontaminační kontrolní strategii.',
      alt: 'EU GMP Annex 1 farmaceutické čisté prostory'
    },
    {
      icon: Award,
      code: 'EN 1822 / ISO 29463',
      title: 'Klasifikace HEPA a ULPA filtrů',
      description: 'Normy definující klasifikaci vysoce účinných filtrů pro vzduch. HEPA filtry třídy H13 mají účinnost min. 99,95%, H14 min. 99,995%. ULPA filtry třídy U15 dosahují účinnosti 99,9995%. Norma také stanovuje metody testování integrity filtrů pomocí aerosol photometru a DOP testu.',
      alt: 'EN 1822 HEPA ULPA filtry klasifikace'
    }
  ];

  return (
    <section id="normy" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Normy a <span className="text-primary">standardy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Všechny naše realizace <strong>čistých prostorů, vzduchotechniky a validací</strong> jsou prováděny 
            v souladu s platnými mezinárodními normami a předpisy. Dodržování těchto standardů 
            garantuje kvalitu, bezpečnost a shodu s regulačními požadavky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((standard, index) => (
            <div 
              key={index}
              className="bg-muted/30 rounded-2xl p-8 hover:shadow-card transition-all duration-300 group border border-border/50"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <standard.icon className="h-8 w-8 text-primary" aria-label={standard.alt} />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                    {standard.code}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {standard.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional standards mention */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Další relevantní normy: <strong>ISO 14644-3</strong> (testovací metody), <strong>ISO 14644-4</strong> (návrh a výstavba), 
            <strong> ISO 14644-5</strong> (provoz čistých prostorů), <strong>WHO GMP</strong>, <strong>FDA 21 CFR Part 211</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Standards;
