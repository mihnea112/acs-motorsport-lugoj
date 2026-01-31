import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [logoOk, setLogoOk] = React.useState(true);
  return (
    <footer className="bg-surface-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-black rounded flex items-center justify-center overflow-hidden relative shadow-md">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-1/3 w-full bg-[#002B7F]"></div>
                  <div className="h-1/3 w-full bg-[#FCD116]"></div>
                  <div className="h-1/3 w-full bg-[#CE1126]"></div>
                </div>
                {logoOk ? (
                  <img
                    src="/logo.png"
                    alt="ACS Motorsport Lugoj - Logo"
                    className="relative z-10 w-6 h-6 object-contain"
                    loading="eager"
                    decoding="async"
                    onError={() => setLogoOk(false)}
                  />
                ) : (
                  <span className="font-display font-bold text-white text-xs z-10">ACS</span>
                )}
              </div>
              <span className="font-display font-bold text-2xl tracking-wide">ACS MOTORSPORT</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Promovăm sportul cu motor în Lugoj și în vestul României din 2014. Pasiune, adrenalină și fair-play.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <span className="font-display font-bold text-sm">FB</span>
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <span className="font-display font-bold text-sm">IG</span>
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <span className="font-display font-bold text-sm">YT</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-xl uppercase mb-4 text-gray-200">Navigare</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Acasă</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Evenimente</Link></li>
              <li><Link to="/archive" className="hover:text-primary transition-colors">Rezultate</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Despre Noi</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-xl uppercase mb-4 text-gray-200">Legal & Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Termeni și condiții</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politica de confidențialitate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Regulament cadru</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-xl uppercase mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <span className="material-icons-round text-primary text-base">location_on</span>
                <span>Str. Victoriei, Nr. 15,<br />Lugoj, Timiș</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-round text-primary text-base">phone</span>
                <span>+40 700 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="material-icons-round text-primary text-base">email</span>
                <span>contact@acsmotorsport.ro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 ACS Motorsport Lugoj. Toate drepturile rezervate.</p>
          <div className="mt-2 md:mt-0 flex items-center space-x-1">
            <span>Design inspired by Romanian Motorsport</span>
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;