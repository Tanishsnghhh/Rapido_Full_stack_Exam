import React from 'react';
import { Menu, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME, ROUTES } from '../../utils/constants';

export function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to={ROUTES.HOME} className="ml-4 font-bold text-xl text-purple-600">
              {APP_NAME}
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="/notifications"
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Bell className="h-6 w-6" />
            </Link>
            <Link
              to={ROUTES.PROFILE}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}