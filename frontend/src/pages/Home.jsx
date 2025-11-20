import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('foryou');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center gap-8 py-4 bg-white border-b sticky top-16 z-40">
        <button
          onClick={() => setActiveTab('foryou')}
          className={`pb-2 px-4 font-semibold transition-all ${
            activeTab === 'foryou'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Para Você
        </button>
        <button
          onClick={() => setActiveTab('following')}
          className={`pb-2 px-4 font-semibold transition-all ${
            activeTab === 'following'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Seguindo
        </button>
      </div>

      <div className="flex flex-col items-center py-8">
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Nenhum vídeo ainda</p>
          <p className="text-gray-400 text-sm mt-2">
            Comece fazendo upload para ver conteúdo aqui!
          </p>
        </div>
      </div>
    </div>
  );
}