// src/components/Wishes.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
const Wishes = () => {
   const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.8     // 20% элемента видно
  })
  return (
    <section id="wishes" className="py-16  bg-[#b0c7c7]/20">
      <div className={`container mx-auto px-6 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>

        {/* Заголовок */}
        <h2 className="text-5xl text-center mb-10 big-text">
          Пожелания
        </h2>

        {/* Текстовый блок */}
        <p className="text-center text-[#5c6f64] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed low-text">
          Ваше присутствие на нашей свадьбе — уже самый ценный подарок! <br />
          Если вы захотите порадовать нас дополнительно, мы будем благодарны за любой комфортный для вас вклад в бюджет нашей семьи :)
        </p>

        {/* При желании можно добавить иконки/SVG под текстом, например подарки */}
        {/* <div className="flex justify-center gap-6 mt-12">
          <img src="/gift1.svg" alt="Подарок 1" className="w-16 h-16 md:w-20 md:h-20" />
          <img src="/gift2.svg" alt="Подарок 2" className="w-16 h-16 md:w-20 md:h-20" />
          <img src="/gift3.svg" alt="Подарок 3" className="w-16 h-16 md:w-20 md:h-20" />
        </div> */}

      </div>
    </section>
  );
};

export default Wishes;