// src/App.jsx

// 1. Importe o componente que você acabou de criar
import Header from './components/Header';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 2. Use o componente aqui, como uma tag! */}
      <Header />

      {/* Container Principal para o conteúdo da sua página */}
      <main className="container mx-auto mt-10 px-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Sobre o Meu Projeto
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Agora meu header é um componente reutilizável! Isso deixa o código principal
            muito mais limpo e fácil de entender. A lógica do header está toda
            encapsulada em seu próprio arquivo.
          </p>
        </div>
      </main>
      
    </div>
  );
}

export default App;