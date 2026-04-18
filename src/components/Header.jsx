// src/components/Header.jsx
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import {weddingName} from '../../constants'
import { links } from '../../constants';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-4xl big-text">
             {weddingName}
            </div>
            <div className="hidden md:flex space-x-8">
              {links.map(cv => <a href={cv.href} className="low-text-link transition">{cv.title}</a>)}
              
            </div>
            <button 
              className="md:hidden text-2xl low-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;