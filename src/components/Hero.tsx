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
          {/* SEO optimized main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Čisté prostory
            <br />
            <span className="text-primary-light">pro váš průmysl</span>
          </h1>

          {/* SEO enhanced subtitle with key services */}
          <p className="text-xl md:text-2xl mb-16 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Specializujeme se na <strong>vzduchotechniku čistých prostorů, HEPA filtry, měření čistoty vzduchu, validaci</strong> a komplexní servis pro farmacie, nemocnice, laboratoře, elektroniku, automotive a vesmírný průmysl v České republice a na Slovensku
          </p>

          {/* Services Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Farmaceutické čisté prostory</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">HVAC &amp; klimatizace</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Validace &amp; kalibrace</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Servis HEPA filtrů</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;