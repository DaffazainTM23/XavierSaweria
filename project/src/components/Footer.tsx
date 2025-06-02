import React from 'react';
import { Instagram, Music } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/xaviisyaa?igsh=MWpqcXp1Zm42cmU2ZQ==',
    icon: <Instagram className="h-6 w-6" />
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@xavier_racinggp1?_t=ZS-8wrzKUdlcFY&_r=1',
    icon: <Music className="h-6 w-6" />
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-ml-blue-dark border-t border-ml-blue/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-white">XAVIER</span>
              <span className="text-gradient ml-2">Saweria</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Terima kasih atas dukungan kamu untuk perjalanan Mobile Legends kami.
              Mari bertemu di Land of Dawn!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} XAVIER Saweria. All rights reserved.
              </p>
              <p className="text-sm text-ml-gold mt-2">
                Created by SKYZEN DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;