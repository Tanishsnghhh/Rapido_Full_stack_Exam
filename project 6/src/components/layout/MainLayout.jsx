import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { SideMenu } from '../navigation/SideMenu';
import { useAuth } from '../../context/AuthContext';

export function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();

  if (!user) return children;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}