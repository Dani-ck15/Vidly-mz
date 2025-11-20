import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Home, PlusCircle, User, LogOut } from 'lucide-react';
import VidlyLogo from './VidlyLogo';

export default function Layout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 w-full z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/">
            <VidlyLogo size="sm" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/upload" 
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition shadow-md"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Criar</span>
            </Link>

            <Link 
              to={`/profile/${user?.username}`} 
              className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold">
                {user?.username?.[0]?.toUpperCase()}
              </div>
              <span className="font-medium text-gray-700">
                {user?.username}
              </span>
            </Link>

            <button 
              onClick={handleLogout}
              className="p-2 hover:bg-red-50 rounded-full transition"
            >
              <LogOut className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-20 md:pb-8">
        <Outlet />
      </main>

      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center h-16 px-2">
          <Link 
            to="/" 
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
              isActive('/') ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <Home className={`w-6 h-6 ${isActive('/') ? 'fill-current' : ''}`} />
            <span className="text-xs font-medium">Início</span>
          </Link>
          
          <Link to="/upload" className="flex flex-col items-center">
            <div className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition -mt-6">
              <PlusCircle className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs font-medium text-gray-600 mt-1">Criar</span>
          </Link>
          
          <Link 
            to={`/profile/${user?.username}`}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition ${
              location.pathname.includes('/profile') ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <User className={`w-6 h-6 ${location.pathname.includes('/profile') ? 'fill-current' : ''}`} />
            <span className="text-xs font-medium">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}