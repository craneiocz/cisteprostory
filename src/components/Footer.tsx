import logoImage from '@/assets/cisteprostory-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Čisté Prostory - Vzduchotechnika, HEPA filtry, validace" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-md leading-relaxed">
              Specializujeme se na vzduchotechniku, měření, validaci a servis čistých prostorů 
              pro farmaceutický a technologický průmysl.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Služby</h3>
            <ul className="space-y-2">
              <li><a href="#ciste-prostory" className="text-white/80 hover:text-primary transition-colors duration-200">Čisté prostory</a></li>
              <li><a href="#vzduchotechnika" className="text-white/80 hover:text-primary transition-colors duration-200">Vzduchotechnika</a></li>
              <li><a href="#mereni-validace" className="text-white/80 hover:text-primary transition-colors duration-200">Měření a validace</a></li>
              <li><a href="#servis" className="text-white/80 hover:text-primary transition-colors duration-200">Servis</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-white/80">info@cisteprostory.eu</li>
              <li className="text-white/80">Česká republika</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Čisté Prostory. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
              Ochrana údajů
            </a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
              Obchodní podmínky
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
