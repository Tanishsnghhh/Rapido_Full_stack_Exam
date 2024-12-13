import React from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  CreditCard,
  Settings,
  Share2,
  Bell,
  LogOut,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { APP_NAME, ROUTES } from '../../utils/constants';

export function SideMenu({ isOpen, onClose }) {
  const { logout } = useAuth();
  
  const menuItems = [
    { icon: <User />, label: 'Profile', path: ROUTES.PROFILE },
    { icon: <CreditCard />, label: 'Payments', path: '/payments' },
    { icon: <Settings />, label: 'Settings', path: '/settings' },
    { icon: <Share2 />, label: 'Refer & Earn', path: '/refer' },
    { icon: <Bell />, label: 'Notifications', path: '/notifications' },
  ];

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-xl">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-purple-600">{APP_NAME}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg text-red-600 mt-4"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </div>
  );
}