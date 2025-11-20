import { useParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Settings, Grid, Heart } from 'lucide-react';

export default function Profile() {
  const { username } = useParams();
  const { user } = useAuthStore();
  const isOwnProfile = user?.username === username;

  const profileData = {
    username: username,
    full_name: user?.full_name || 'Nome do Usuário',
    bio: user?.bio || 'Esta é uma bio de descrição',
    followers_count: 0,
    following_count: 0,
    likes_count: 0,
    videos: []
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl font-bold">
          {profileData.username[0].toUpperCase()}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold">{profileData.username}</h1>
            {isOwnProfile && (
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
            )}
          </div>

          <p className="text-gray-600 mb-4">{profileData.full_name}</p>
          
          {profileData.bio && (
            <p className="text-gray-700 mb-6">{profileData.bio}</p>
          )}

          <div className="flex gap-8 mb-6">
            <div className="text-center">
              <p className="font-bold text-xl">{profileData.following_count}</p>
              <p className="text-gray-600 text-sm">Seguindo</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">{profileData.followers_count}</p>
              <p className="text-gray-600 text-sm">Seguidores</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">{profileData.likes_count}</p>
              <p className="text-gray-600 text-sm">Curtidas</p>
            </div>
          </div>

          {!isOwnProfile && (
            <div className="flex gap-4">
              <button className="px-8 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                Seguir
              </button>
              <button className="px-8 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition">
                Mensagem
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="border-b mb-6">
        <div className="flex gap-8">
          <button className="pb-4 px-2 border-b-2 border-green-600 font-semibold flex items-center gap-2">
            <Grid className="w-4 h-4" />
            Vídeos
          </button>
          <button className="pb-4 px-2 text-gray-500 hover:text-gray-700 font-semibold flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Curtidas
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-3 text-center py-20">
          <p className="text-gray-500 text-lg">Nenhum vídeo ainda</p>
        </div>
      </div>
    </div>
  );
}