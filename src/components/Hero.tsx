import { ArrowRight, Shield, Wind, Gauge, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Čisté prostory
            <br />
            <span className="text-primary-light">na míru</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Specializujeme se na vzduchotechniku, měření, validaci a servis čistých prostorů 
            pro farmaceutický a technologický průmysl
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-6"
            >
              Nezávazná poptávka
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Naše služby
            </Button>
          </div>

          {/* Services Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Čisté prostory</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Vzduchotechnika</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Měření & validace</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Servis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;