// src/components/OurStory.jsx
import React from 'react';
import { ourStory } from '../../constants';
import { useInView } from 'react-intersection-observer';
import StoryPart from './StoryPart';
import polaroid from '@/assets/pictures/polaroid.webp'
const OurStory = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.2     // 20% элемента видно
  })
  return (
    <section
      id="story"
      className="relative pt-16 pb-16"

    >
      {/* #bcccae/20 */}
      {/* лёгкий рустик-слой как в Hero */}
      <div className="absolute inset-0 bg-[#b0c7c7]/20" />

      {/* Контент */}
      <div className={`relative z-10 container mx-auto px-4`}  ref={ref}>
        <div className="flex flex-col md:flex-row items-start gap-3">
          <div className="md:w-1/2">
            <img
              src={polaroid}
              alt="Наша история"
              className={`-rotate-2 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
              ref={ref}
            />
          </div>
          <div className="md:w-1/2 md:pt-0 text-center">
           <h2 className="text-5xl text-center items-baseline big-text mb-10">Наша история</h2>
            {ourStory.map((cv, index) =>  <StoryPart key={index} className={'mb-4 low-text text-lg md:text-xl'} text={cv}></StoryPart>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;