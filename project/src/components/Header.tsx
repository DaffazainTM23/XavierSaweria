import React from 'react';
import { Shield, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative py-6 px-4 sm:px-6 lg:px-8 border-b border-ml-blue/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="bg-ml-blue rounded-full p-2 mr-3">
            <Shield className="h-6 w-6 text-ml-gold" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-white">XAVIER</span>
            <span className="text-gradient ml-2">Saweria</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1">
            <Star className="h-4 w-4 text-ml-gold" />
            <Star className="h-4 w-4 text-ml-gold" />
            <Star className="h-4 w-4 text-ml-gold" />
            <Star className="h-4 w-4 text-ml-gold" />
            <Star className="h-4 w-4 text-ml-gold" />
          </div>
          <a 
            href="#donate" 
            className="ml-button-gold"
          >
            Donasi Sekarang
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;