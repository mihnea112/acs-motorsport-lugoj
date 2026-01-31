import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary' : 'text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary';
  };

  return (
    <nav className="fixed w-full z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm shadow-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="tricolor-border-bottom absolute bottom-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
                {logoOk ? (
                  <img
                    src="/logo.png"
                    alt="ACS Motorsport Lugoj - Logo"
                    className="relative z-10 w-20 h-20 object-contain"
                    loading="eager"
                    decoding="async"
                    onError={() => setLogoOk(false)}
                  />
                ) : (
                  <span className="font-display font-bold text-white text-sm z-10">ACS</span>
                )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-display font-medium text-lg tracking-wide transition-colors ${isActive('/')}`}>
              ACASĂ
            </Link>
            <Link to="/events" className={`font-display font-medium text-lg tracking-wide transition-colors ${isActive('/events')}`}>
              EVENIMENTE
            </Link>
            <Link to="/archive" className={`font-display font-medium text-lg tracking-wide transition-colors ${isActive('/archive')}`}>
              ARHIVĂ
            </Link>
            <Link to="/about" className={`font-display font-medium text-lg tracking-wide transition-colors ${isActive('/about')}`}>
              DESPRE
            </Link>
            <Link to="/contact" className={`font-display font-medium text-lg tracking-wide transition-colors ${isActive('/contact')}`}>
              CONTACT
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
             <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            >
              {darkMode ? (
                <span className="material-icons-round text-accent">light_mode</span>
              ) : (
                <span className="material-icons-round text-gray-600">dark_mode</span>
              )}
            </button>
            <Link to="/contact" className="bg-primary hover:bg-red-700 text-white font-display font-semibold text-lg tracking-wide py-1.5 px-6 rounded skew-x-[-10deg] inline-block transition-transform hover:scale-105 shadow-lg shadow-primary/30">
              <span className="skew-x-[10deg] inline-block">ÎNSCRIE-TE</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
              >
                {darkMode ? (
                  <span className="material-icons-round text-accent">light_mode</span>
                ) : (
                  <span className="material-icons-round text-gray-600">dark_mode</span>
                )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white p-2 focus:outline-none"
            >
              <span className="material-icons-round text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium font-display tracking-wide ${location.pathname === '/' ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              ACASĂ
            </Link>
            <Link 
              to="/events" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium font-display tracking-wide ${location.pathname === '/events' ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              EVENIMENTE
            </Link>
             <Link 
              to="/archive" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium font-display tracking-wide ${location.pathname === '/archive' ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              ARHIVĂ
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium font-display tracking-wide ${location.pathname === '/about' ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              DESPRE
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium font-display tracking-wide ${location.pathname === '/contact' ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;