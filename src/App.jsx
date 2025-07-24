import React, { useEffect } from 'react';
import { RxSwitch } from 'react-icons/rx';
import { useTheme } from './contexts/ContextProvider';

export default function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const extraOffset = id === 'Historia' ? -60 : 10; 

      const offset = element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2) - headerHeight / 2 + extraOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      // "      console.warn(`Elemento com o ID "${id}" não encontrado.`);"
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white font-poppins min-h-screen overflow-x-hidden">
      {/* Cabeçalho */}
      <header className="w-full py-4 fixed top-0 left-0 bg-white dark:bg-black z-50 shadow-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <img
            src={theme === 'dark' ? '/qhunt.png' : '/qhunt.png'}
            alt="Logo"
            className="h-12"
          />
          <nav className="hidden md:flex space-x-6">
            <a
              href="#historia"
              className="hover:text-green-600"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('historia');
              }}
            >
              História 
            </a>
            <a
              href="#time"
              className="hover:text-green-600"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('time');
              }}
            >
              Time
            </a>

          </nav>
          <button type="button" onClick={toggleTheme} className="scale-x-100 dark:-scale-x-100">
            <RxSwitch className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-start h-auto md:h-screen max-w-7xl mx-auto px-8 pt-20 md:pt-0 md:px-8 md:pt-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug mb-6 text-center md:text-left">
          Intuitivo na jogabilidade, pesado na qualidade.
          </h1>

          <p className="mt-6 text-lg md:text-2xl mb-8">
            Conheça o  <span className="text-green-600 font-semibold">QHUNT</span> e tenha sempre a{' '}
            <span className="text-yellow-500 font-semibold">qualidade</span> que você precisa.
          </p>
          <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <img
              src="/dona.png"
              alt="Personagem Dona"
              className="w-24 h-auto object-contain"
            />
            <img
              src="/croda.png"
              alt="Personagem Croda"
              className="w-20 h-auto object-contain"
            />
          </div>
          <p className="text-center text-lg font-semibold text-gray-900 dark:text-white">
            Personagens intuitivos e criativos
          </p>
        </div>

         </div>
        <div className="hidden md:flex w-full md:w-1/2 justify-end items-center ml-10">
          <img
            src="/qhuntpc.png"
            alt="Laptop"
            className="w-[110%] md:scale-150 object-contain"
          />
        </div>
      </div>
     

      {/* Seção Funcionalidades - Sempre visível */}
      <div
        id="funcionalidades"
        className="flex flex-col items-center bg-white dark:bg-black py-12 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center sm:text-3xl">
          História QHUNT
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-12">
          
        </p>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
            <img
              src="/historia.png"
              alt="Ilustração do QHunt"
              className="w-full max-w-full lg:w-2/3 rounded-lg object-contain"
            />
            <p className="text-base text-gray-900 dark:text-white text-justify mt-4 lg:mt-0 lg:w-1/3">
              No primeiro semestre, durante o Desafio da Qualidade, desenvolvemos o QHunt e o entregamos em apenas um mês. Todos os personagens e itens foram criados manualmente, junto com uma trilha sonora original, resultando em um jogo único, criativo e imersivo.
            </p>
          </div>
        </div>





      </div>

      {/* Seção Time */}
      <div
        id="time"
        className="flex flex-col items-center justify-center py-8 mt-4"
      >
        <h3 className="text-5xl font-bold mb-4">Time</h3>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mb-8">

        </p>
        <div className="w-full flex justify-center">
          <img
            src="/time.png"
            alt="Time"
            className="w-full max-w-3xl h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full flex" style={{ height: '5px' }}>
        <div className="flex-1 bg-[#22b2ab]" />
        <div className="flex-1 bg-yellow-500" />
        <div className="flex-1 bg-[#18837e]" />
      </div>

    </div>
  );
}
