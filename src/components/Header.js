import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    'ТЕЛЕКАНАЛИ',
    'ФІЛЬМИ',
    'МУЛЬТФІЛЬМИ',
    'СЕРІАЛИ',
    'ШОУ',
    'СПОРТ',
    'ОСВІТА'
  ];

  return (
    <header className="bg-megogo-dark border-b border-megogo-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold tracking-wider">
              MEGOGO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="btn-secondary hidden md:block">
              Тарифи
            </button>
            
            <button className="text-megogo-text-gray hover:text-white transition-colors">
              <Search size={20} />
            </button>
            
            <div className="text-megogo-text-gray text-sm hidden md:block">
              UA
            </div>
            
            <button className="text-megogo-text-gray hover:text-white transition-colors hidden md:block">
              УВІЙТИ
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-megogo-gray border-t border-megogo-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a key={item} href="#" className="block px-4 py-2 nav-link">
                  {item}
                </a>
              ))}
              <div className="px-4 py-2 border-t border-megogo-border mt-4 pt-4">
                <button className="btn-secondary w-full mb-2">
                  Тарифи
                </button>
                <button className="text-megogo-text-gray hover:text-white transition-colors">
                  УВІЙТИ
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;