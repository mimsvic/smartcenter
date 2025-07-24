import React, { useState } from 'react';
import MenuIcon from '../assets/menu.svg';
import ContactIcon from '../assets/chat.svg';
import Qhunt from '../assets/qhunt.png';
import HamburgerIcon from '../assets/menu.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="bg-white">
        <nav className="container relative mx-auto px-6 py-3 flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <img src={Qhunt} alt="Qhunt Logo" className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-6 text-gray-700">
            <a href="#" className="flex items-center space-x-2 hover:text-gray-800 transition-colors">
              <img src={MenuIcon} alt="Menu" className="h-5 w-5" />
              <span className="font-medium">Menu</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-800 transition-colors">
              <img src={ContactIcon} alt="Contact" className="h-5 w-5" />
              <span className="font-medium">Contact</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Menu Principal"
            >
              <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 md:hidden bg-white rounded-lg z-20">
              <div className="py-1">
                <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <img src={MenuIcon} alt="Menu" className="h-5 w-5" />
                  <span>Menu</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <img src={ContactIcon} alt="Contact" className="h-5 w-5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
