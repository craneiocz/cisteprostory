import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section className="py-20 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Spojte se s <span className="text-primary">námi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rádi zodpovíme vaše otázky a připravíme nabídku na míru vašim potřebám
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground">+420 123 456 789</p>
                <p className="text-muted-foreground">Pondělí - Pátek: 8:00 - 17:00</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground">info@cisteprostory.eu</p>
                <p className="text-muted-foreground">Odpovídáme do 24 hodin</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  Adresa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground">Česká republika</p>
                <p className="text-muted-foreground">Působíme po celé ČR</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  Pracovní doba
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-foreground"><span className="font-medium">Po-Pá:</span> 8:00 - 17:00</p>
                  <p className="text-foreground"><span className="font-medium">So-Ne:</span> Pohotovost</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <Card className="bg-gradient-hero text-white border-0 shadow-elegant">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Potřebujete rychlou nabídku?
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Kontaktujte nás ještě dnes a získejte nezávaznou cenovou nabídku 
                  na míru vašim požadavkům. Naši specialisté vám rádi poradí.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 w-full text-lg py-6"
                  >
                    Získat cenovou nabídku
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary w-full text-lg py-6"
                  >
                    Zavolat nyní
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;