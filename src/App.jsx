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
      "Despite the growth of clean energy sources, most energy still comes from polluting sources, while global demand continues to rise.",
    overviewText2: "In this scenario, ",
    overviewText3: "technologies that harness human movement",
    overviewText4: ", such as Power Walk, emerge as a sustainable and promising alternative.",
    feature1: "Applicable in high-traffic areas",
    feature2: "Use of urban space",
    feature3: "Clean Energy Generation",
    solutionTitle: "SOLUTION",
    solutionText:
      "Power Walk transforms previously underutilized urban spaces into clean energy sources. The technology harnesses everyday movements, such as walking, to generate electricity, reducing dependence on polluting sources and contributing to environmental preservation.",
    developmentTitle: "Development",
    teamTitle: "TEAM",
  },
  pt: {
    overviewTitle: "VISÃO GERAL",
    overviewText1:
      "Apesar do crescimento das fontes de energia limpa, a maior parte da energia ainda provém de fontes poluentes, enquanto a demanda global continua a aumentar.",
    overviewText2: "Nesse cenário, ",
    overviewText3: "tecnologias que aproveitam o movimento humano",
    overviewText4: ", como a Power Walk, surgem como uma alternativa sustentável e promissora.",
    feature1: "Aplicável em áreas de grande circulação",
    feature2: "Aproveitamento do espaço urbano",
    feature3: "Geração de Energia Limpa",
    solutionTitle: "SOLUÇÃO",
    solutionText:
      "A Power Walk transforma espaços urbanos antes subutilizados em fontes de energia limpa. A tecnologia aproveita movimentos cotidianos, como o caminhar, para gerar eletricidade, reduzindo a dependência de fontes poluentes e contribuindo para a preservação ambiental.",
    developmentTitle: "Desenvolvimento",
    teamTitle: "EQUIPE",
  },
};

export default function App() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  const t = translations[language];

  return (
    <div className="bg-[#00242D] text-white font-poppins min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="relative w-full py-4 fixed top-0 left-0 bg-[#00242D] z-50">
        <img
          src="/vector2.png"
          alt="Fundo"
          className="absolute top-0 left-0 w-60 md:w-[400px] lg:w-[500px] max-h-[90vh] object-contain z-0 opacity-50"
        />
        <img
          src="/efeito.png"
          alt="Brilho"
          className="absolute top-0 left-0 w-[500px] h-auto object-contain opacity-40 z-0"
        />
        <img
          src="/mockup.png"
          alt="Mockup"
          className="absolute top-16 left-0 w-48 md:top-24 md:left-4 md:w-64 object-contain z-0"
        />
        <img
          src="/logo.png"
          alt="Logo"
          className="absolute top-10 left-1/2 -translate-x-1/2 w-48 max-w-[200px] md:top-16 md:max-w-[300px] object-contain z-0"
        />
        <div className="max-w-7xl mx-auto flex items-center justify-end px-4 sm:px-6 relative z-10">
          <button
            onClick={toggleLanguage}
            className="bg-[#2AE8D9]/20 border border-[#2AE8D9] text-white font-semibold p-3 rounded-lg hover:bg-[#2AE8D9]/40 transition-colors duration-300 flex items-center justify-center"
          >
            <TranslateIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto px-4 sm:px-6 min-h-screen pt-40 md:pt-24 gap-12">
        {/* Espaço para imagem esquerda (colada no topo) */}
        {/* Aqui você pode adicionar a imagem */}

        {/* Texto - direita, descendo um pouco */}
        <div className="w-full md:w-1/2 text-left mt-48 md:mt-56">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">{t.overviewTitle}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">{t.overviewText1}</p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            {t.overviewText2}
            <strong className="font-semibold text-teal-300">{t.overviewText3}</strong>
            {t.overviewText4}
          </p>
        </div>
      </div>

      {/* Destaques */}
      <div className="py-8 bg-[#00242D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4 md:gap-6 text-center">
          <div className="bg-gray-800/20 border border-gray-600 rounded-2xl p-4 md:p-8 w-full sm:w-1/3 flex flex-col items-center justify-center">
            <LocationIcon className="text-white mb-2 md:mb-4 h-8 w-8 md:h-12 md:w-12" />
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">{t.feature1}</p> {/* Adicionei px-2 */}
          </div>
          <div className="bg-[#2AE8D9]/20 border border-[#2AE8D9] rounded-2xl p-4 md:p-8 w-full sm:w-1/3 flex flex-col justify-center">
            <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2AE8D9] mb-2">70%</p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">{t.feature2}</p> {/* Adicionei px-2 */}
          </div>
          <div className="bg-[#2AE8D9]/20 border border-[#2AE8D9] rounded-2xl p-4 md:p-8 w-full sm:w-1/3 flex flex-col justify-center">
            <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2AE8D9] mb-2">100%</p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">{t.feature3}</p> {/* Adicionei px-2 */}
          </div>
        </div>
      </div>
    </div>


      {/* Solução */}
      <div className="py-16 bg-[#00242D] px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">{t.solutionTitle}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed text-white/80">{t.solutionText}</p>
        </div>
      </div>

      {/* Ferramentas */}
      <div className="flex flex-col items-center py-16 bg-[#00242D] px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-center">{t.developmentTitle}</h2>
        <img
          src="/tools.png"
          alt="Ferramentas utilizadas"
          className="w-full max-w-[90%] sm:max-w-2xl md:max-w-4xl h-auto object-contain"
        />
      </div>

      {/* Rodapé */}
      <footer className="relative bg-[#00242D] pt-10 overflow-hidden px-4 sm:px-6">
        <img
          src="/efeito.png"
          alt="Brilho"
          className="absolute top-0 left-0 w-[500px] h-auto object-contain opacity-40 z-0"
        />
        <img
          src="/vector3.png"
          alt="Decorativo"
          className="absolute top-0 right-0 h-full w-auto object-cover opacity-30 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="border-t border-white/20"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 text-center">
            <div className="flex items-center gap-6 justify-center">
              <img src="/65anos.png" alt="65 anos" className="h-16" />
              <img src="/bosch.png" alt="Bosch" className="h-12" />
            </div>

            <div className="w-px h-12 bg-white/30 hidden md:block"></div>

            <div>
              <p className="font-bold tracking-wider text-white mb-1">{t.teamTitle}</p>
              <p className="text-white/80">Caio Santos, Cláudio Araujo, Leandro Castro, Miguel Socha</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
