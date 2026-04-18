// src/components/OurStory.jsx
import React from 'react';
import { ourStory } from '../../constants';

const OurStory = () => {
  return (
    <section
      id="story"
      className="relative pt-16 pb-16"

    >
      {/* #bcccae/20 */}
      {/* лёгкий рустик-слой как в Hero */}
      <div className="absolute inset-0 bg-[#b0c7c7]/20" />

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-3">
          <div className="md:w-1/2">
            <img
              src="/polaroid_photo_1.svg"
              alt="Наша история"
              className="-rotate-2"
            />
          </div>
          <div className="md:w-1/2 md:pt-0 text-center">
           <h2 className="text-5xl text-center items-baseline big-text mb-10">Наша история</h2>
            {ourStory.map(cv =>  <p className="mb-4 low-text text-lg md:text-xl">{cv}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;