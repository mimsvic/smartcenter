// src/components/Header.jsx

import React, { useState } from 'react';

// Imports dos seus assets
import BoschLogo from '../assets/bosch.svg';
import MenuIcon from '../assets/menu.svg';
import ContactIcon from '../assets/chat.svg';
import Qhunt from '../assets/qhunt.svg';
import HamburgerIcon from '../assets/menu.svg';

// Componente da barra de cores no topo
const TopColorBar = () => {
  const colors = [
    '#942331', '#B12638', '#AF1917', '#D51317',
    '#6E368C', '#14387F', '#312A6F', '#283587',
    '#174290', '#3E9AC9', '#009AD2', '#00B5DD',
    '#00A24C', '#94BD55', '#62B16E', '#1D893A'
  ];

  return (
    <div className="flex w-full h-[4px]">
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className="flex-1"
        />
      ))}
    </div>
  );
};

// Componente Header principal
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <TopColorBar />
      <div className="bg-white shadow-sm border-b border-gray-200">
        <nav className="container relative mx-auto px-6 py-3 flex justify-between items-center h-16">
          {/* Lado Esquerdo: Logos */}
          <div className="flex items-center space-x-6">
            <img src={BoschLogo} alt="Bosch Logo" className="h-8 w-auto" />
            <img src={Qhunt} alt="Qhunt Logo" className="h-16 w-auto" />
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700">
            <a href="#" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <img src={MenuIcon} alt="Menu" className="h-5 w-5" />
              <span className="font-medium">Menu</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <img src={ContactIcon} alt="Contact" className="h-5 w-5" />
              <span className="font-medium">Contact</span>
            </a>
          </div>

          {/* Botão Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Menu Principal"
            >
              <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Dropdown Mobile */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 md:hidden bg-white rounded-lg shadow-xl border z-20">
              <div className="py-1">
                <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <img src={MenuIcon} alt="Menu" className="h-5 w-5" />
                  <span>Menu</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
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
