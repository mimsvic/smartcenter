import React, { useState } from 'react';

// Ícone de localização
const LocationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
    <line x1="12" y1="7" x2="12" y2="13" />
    <line x1="9" y1="10" x2="15" y2="10" />
  </svg>
);

// Ícone de tradução
const TranslateIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12" />
    <path d="M7 2v3" />
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);

// Traduções
const translations = {
  en: {
    overviewTitle: "OVERVIEW",
    overviewText1:
      "Power Solutions (PS), the area responsible for the production of fuel supply and transmission systems for vehicles within Bosch, needs to ensure efficiency in testing the fuel pump flange terminals.",
    card1Text: "Cycle time reduction from <strong>4 hours to 38 seconds</strong>",
    card2Text: "Reduced monthly waste from <strong>40 hours</strong> to just <strong>6 minutes</strong>",
    card3Text: "Reduction <strong>from 9 operators to 3</strong>",
    solutionTitle: "SOLUTION",
    solutionText:
      "As an effective solution, after an incident involving the arrival of a defective product to the customer, we developed a machine with an automated system to perform product tests, the Smart Tester. The Smart Tester also features monitoring software that allows data visualization for future analysis. Along with the machine, we created a training manual for employees and to facilitate the implementation of the new methodology.",
    developmentTitle: "DEVELOPMENT",
    teamTitle: "TEAM",
  },
  pt: {
    overviewTitle: "VISÃO GERAL",
    overviewText1:
      "A Power Solutions (PS), área responsável pela produção de sistemas de alimentação e transmissão de combustível para veículos dentro da Bosch, precisa garantir a eficiência nos testes dos terminais da flange da bomba de combustível.",
    card1Text: "Redução do tempo de ciclo de <strong>4 horas para 38 segundos</strong>",
    card2Text: "Redução do desperdício mensal de <strong>40 horas</strong> para apenas <strong>6 minutos</strong>",
    card3Text: "Redução de <strong>9 operadores para 3</strong>",
    solutionTitle: "SOLUÇÃO",
    solutionText:
      "Como solução eficaz, após um incidente envolvendo a chegada de um produto defeituoso ao cliente, desenvolvemos uma máquina com sistema automatizado para realizar testes nos produtos, o Smart Tester. O Smart Tester também possui um software de monitoramento que permite a visualização de dados para análises futuras. Juntamente com a máquina, criamos um manual de treinamento para os colaboradores e para facilitar a implementação da nova metodologia.",
    developmentTitle: "DESENVOLVIMENTO",
    teamTitle: "EQUIPE",
  },
};

export default function App() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  const t = translations[language];

  return (
    <div className="bg-[linear-gradient(to_bottom,_white_20%,_#66be83,_#50a4d5)] text-gray-800 font-poppins min-h-screen overflow-x-hidden relative">
      <img
        src="/mockup.png"
        alt="Mockup"
        className="absolute top-0 left-0 w-full h-[450px] object-cover z-0 opacity-40"
      />
      {/* Header */}
      <header className="relative w-full py-4 fixed top-0 left-0 z-50">
        <h1
          className="absolute top-4 left-4 text-xl md:text-2xl font-semibold z-10 whitespace-nowrap"
        >
          <span style={{ color: '#007A42' }}>SMART</span>{' '}
          <span style={{ color: '#0067A5' }}>CENTER</span>
        </h1>

        <div className="max-w-7xl mx-auto flex items-center justify-end px-4 sm:px-6 relative z-10">
          <button
            onClick={toggleLanguage}
            className="text-[#0067A5] p-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <TranslateIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="relative flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 pt-[470px] gap-12">
        {/* Texto */}
        <div className="w-full md:w-3/4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">
            {t.overviewTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-black">
            {t.overviewText1}
          </p>
        </div>
      </div>

      {/* Destaques */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 md:gap-6 text-center">
            {/* Card 1 */}
            <div className="bg-[#E4EDFB] p-6 md:p-8 w-full sm:w-1/3 flex flex-col items-center justify-center text-lg md:text-xl">
              <p dangerouslySetInnerHTML={{ __html: t.card1Text }} />
            </div>
            {/* Card 2 */}
            <div className="bg-[#E4EDFB] p-6 md:p-8 w-full sm:w-1/3 flex flex-col items-center justify-center text-lg md:text-xl">
              <p dangerouslySetInnerHTML={{ __html: t.card2Text }} />
            </div>
            {/* Card 3 */}
            <div className="bg-[#E4EDFB] p-6 md:p-8 w-full sm:w-1/3 flex flex-col items-center justify-center text-lg md:text-xl">
              <p dangerouslySetInnerHTML={{ __html: t.card3Text }} />
              <img src="/bonequinhos.png" alt="Ícone de operadores" className="mt-4 h-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Solução */}
      <div className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">{t.solutionTitle}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-gray-800">{t.solutionText}</p>
        </div>
      </div>

      {/* Ferramentas */}
      <div className="flex flex-col items-center py-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black text-center">{t.developmentTitle}</h2>
        <img
          src="/tools.png"
          alt="Ferramentas utilizadas"
          className="w-full max-w-[90%] sm:max-w-2xl md:max-w-4xl h-auto object-contain"
        />
      </div>

      {/* Rodapé */}
      <footer className="relative pt-10 overflow-hidden px-4 sm:px-6">
        <img
          src="/decoração.png"
          alt="Decorativo"
          className="absolute top-0 right-0 h-full w-auto object-cover opacity-30 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="border-t border-black/20"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 text-center">
            <div className="flex items-center gap-6 justify-center">
              <img src="/65anos.png" alt="65 anos" className="h-16" />
              <img src="/bosch.png" alt="Bosch" className="h-12" />
            </div>

            <div className="w-px h-12 bg-black/30 hidden md:block"></div>

            <div>
              <p className="font-bold tracking-wider text-black mb-1">{t.teamTitle}</p>
              <p className="text-black">Alisson Ribeiro, Matheus Belline, Pedro Lucas e Pedro Pereira</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
