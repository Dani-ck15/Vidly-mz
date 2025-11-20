import { Upload as UploadIcon } from 'lucide-react';

export default function Upload() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upload de Vídeo</h1>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
        <div className="flex flex-col items-center">
          <UploadIcon className="w-16 h-16 text-gray-400 mb-4" />
          <span className="text-lg font-semibold text-gray-700 mb-2">
            Selecione um vídeo para fazer upload
          </span>
          <span className="text-sm text-gray-500 mb-4">
            Ou arraste e solte um arquivo
          </span>
          <span className="text-xs text-gray-400">
            MP4, MOV ou WEBM • Máx 50MB • Até 60 segundos
          </span>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Selecionar Arquivo
          </button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-800">
          ℹ️ O upload de vídeos será implementado na próxima fase
        </p>
      </div>
    </div>
  );
}