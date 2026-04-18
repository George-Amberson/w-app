// src/components/OurStory.jsx
import React from 'react';
import { inviteText } from '../../constants';

const OurStory = ({invite}) => {
  console.log(invite)
  return (
    <section
      id="story"
      className="relative py-16"

    >
      {/* #bcccae/20 */}
      {/* лёгкий рустик-слой как в Hero */}
      <div className="absolute inset-0 bg-[#b0c7c7]/20" />

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className={`text-5xl text-center items-baseline big-text mb-2 opacity-0 animate-fade-up`} >{invite.greeting}!</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-center">
            <p className="mb-4 mt-8 low-text px-10 text-lg md:text-xl">{`Приглашаем ${invite.pronoun} разделить с нами радость особого дня - дня нашей свадьбы!`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;