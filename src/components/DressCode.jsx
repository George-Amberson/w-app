// src/components/Timeline.jsx
import React from "react";
import StoryPart from './StoryPart';
import { useInView } from "react-intersection-observer";
const colors = [

      { key: "#dfece8", value: "#c7d6d1" },
    { key: "#e9f5f5", value: "#cedfdf" },
      { key: "#e9f3e4", value: "#cbd3c6" },
  { key: "#fefee5", value: "#e2e2c9" },

  { key: "#f1edfd", value: "#d8d1e9" },
  { key: "#f7e5e5", value: "#e3c8c8" },
  { key: "#faefe6", value: "#ded3ca" },
  { key: "#fffcf5", value: "#dfdbd1" },

  { key: "#B89784", value: "#9c7b70" },
  { key: "#d6c2b8", value: "#baa69c" },
  { key: "#D8D2CF", value: "#bcb6b3" },
  { key: "#eceae8", value: "#cecac8" },
];
const storyParts = [
  "Лёгкий летний ветерок, солнечные блики на коже, ощущение тепла и уюта, будто мы все собрались где-то на природе, среди трав и деревьев…",
  "Будем рады, если ваши образы поддержат это настроение! Нежные, пастельные и природные оттенки, лёгкие и воздушные ткани подойдут для этого как нельзя лучше.",
  "Просим по возможности избегать ярких цветов и тёмного верха — так пространство и фотографии будут выглядеть особенно гармонично.",
  "Формат — smart casual: легко, удобно и без лишней строгости (джинсы допустимы, для мужчин отличным выбором станет светлый верх, например, рубашка).",
]
const color = '#02281c';
const DressColors = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.8     // 20% элемента видно
  })
  return (
     <div className={`grid grid-cols-4 gap-10 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>
    {colors.map((color, index) => (
      <svg
        key={index}
        className="w-10 h-10 md:w-20 md:h-20"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="7.5" fill={color.key}  stroke={color.value} // ← сюда ставишь более тёмный оттенок
    strokeWidth="0.3"/>
      </svg>
    ))}
  </div>
  )
}
const DressCode = () => {
   const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.2     // 20% элемента видно
  })
  return (
    <section id="details" className="py-16">
      <div className={`container mx-auto px-6 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>

        <h2 className="text-5xl text-center mb-10 big-text">
          Дресс-код
        </h2>
        {storyParts.map((cv, i) => <StoryPart text={cv} key={i}className={'text-center low-text mb-4 max-w-2xl mx-auto text-lg md:text-xl'}/>)}
        {/* Блок с 6 SVG */}
        <div className="flex justify-center mt-13">
          <DressColors/>
        </div>
        
   
      </div>
    </section>
  );
};

export default DressCode;