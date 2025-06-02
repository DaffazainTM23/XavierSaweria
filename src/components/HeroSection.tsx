import React from 'react';
import { ArrowRight, Sword, Shield, Zap } from 'lucide-react';

interface HeroData {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  favoriteHero: string;
  playerName: string;
  speciality: string;
  icon: React.ReactNode;
}

const heroes: HeroData[] = [
  {
    id: 1,
    name: 'YU SHIN SHIN',
    role: 'HYPER CARRY',
    imageUrl: 'https://res.cloudinary.com/dcil8l2im/image/upload/v1748867117/YU_SHIN_SHIN_a85gta.png',
    description: 'LONE DESTRUCTOR',
    favoriteHero: 'YU SHIN SHIN',
    playerName: 'XAVIER',
    speciality: 'HYPER / JUNGLER',
    icon: <Sword className="h-5 w-5" />
  },
  {
    id: 2,
    name: 'JULIAN',
    role: 'MAGE',
    imageUrl: 'https://res.cloudinary.com/dcil8l2im/image/upload/v1748867117/JULIAN_hgrhl0.png',
    description: 'HUNTER X HUNTER',
    favoriteHero: 'JULIAN',
    playerName: 'SKYZEN',
    speciality: 'MID LANER',
    icon: <Zap className="h-5 w-5" />
  },
  {
    id: 3,
    name: 'BENEDETTA',
    role: 'ASSASSIN',
    imageUrl: 'https://res.cloudinary.com/dcil8l2im/image/upload/v1748867117/BENEDETA_erfsow.png',
    description: ' BENEDETTA DEATH OATH',
    favoriteHero: 'BENEDETTA',
    playerName: 'DIYAS',
    speciality: 'EXP LANER',
    icon: <Shield className="h-5 w-5" />
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="section">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-gradient">Push Rank</span> bersama 
          <span className="text-ml-blue ml-2">Pro Player</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Dukung perjuangan kami dengan donasi untuk streaming dan push rank Mobile Legends Bang Bang.
          Nikmati gameplay spektakuler dan ketemu di Land of Dawn!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {heroes.map((hero) => (
          <div key={hero.id} className="hero-card group">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
              <img 
                src={hero.imageUrl} 
                alt={`${hero.playerName} - ${hero.favoriteHero}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{hero.playerName}</h3>
                      <p className="text-ml-gold font-medium">{hero.speciality}</p>
                    </div>
                    <span className="bg-ml-blue/30 backdrop-blur-sm text-white p-2 rounded-full">
                      {hero.icon}
                    </span>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm text-gray-300">Favorite Hero</div>
                    <div className="text-lg font-bold text-white">{hero.favoriteHero}</div>
                    <div className="text-sm text-ml-gold">{hero.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="#donate" 
          className="inline-flex items-center ml-button-primary"
        >
          Donasi Sekarang
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;