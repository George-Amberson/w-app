// src/components/OurStory.jsx
import { useInView } from 'react-intersection-observer'
const OurStory = ({invite}) => {
   const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.5     // 20% элемента видно
  })
  return (
    <section
      id="story"
      className="relative py-16"

    >
      {/* #bcccae/20 */}
      {/* лёгкий рустик-слой как в Hero */}
      <div className="absolute inset-0 bg-[#b0c7c7]/20" />

      {/* Контент */}
      <div className={`relative z-10 container mx-auto px-4 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>
        <h2 className={`text-5xl text-center items-baseline big-text mb-2`} >{invite.greeting}!</h2>
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