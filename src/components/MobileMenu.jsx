// src/components/MobileMenu.jsx
import React from 'react';
import { links } from '../../constants';
const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40 p-4">
      <div className="flex flex-col space-y-4 items-center">
          {links.map(cv => <><img scr='/leaf.svg'></img><a href={cv.href} className="low-text-link transition" onClick={onClose}>{cv.title}</a></>)}
      </div>
    </div>
  );
};

export default MobileMenu;