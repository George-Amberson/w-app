// src/components/Timeline.jsx
import React from "react";

const events = [
  { time: "14:45", title: "Сбор гостей", icon: "/toast-s.svg" },
  { time: "15:10", title: "Церемония", icon: "/wedding-rings.svg" },
  { time: "16:00", title: "Банкет", icon: "/banquet.svg" },
  { time: "22:00", title: "Завершение вечера", icon: "/fireworks.svg" }
];

const color = "#02281c";

const Timeline = () => {
  return (
    <section id="program" className="py-16 bg-[#b0c7c7]/20">
      <div className="container mx-auto px-6">

        <h2 className="text-5xl text-center mb-10 text-[#834a12] big-text">
          Программа дня
        </h2>

        {/* Мобильная версия — вертикальная */}
        <div className="md:hidden max-w-3xl mx-auto relative">
          {/* центральная линия */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#02281c] -translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_40px_1fr] items-center"
              >
                {/* левая колонка — иконка */}
                <div className="flex justify-center">
                  <img src={event.icon} alt={event.title} className="w-12 h-12" />
                </div>

                {/* центр — сердце */}
                <div className={`flex justify-center text-[${color}] text-lg`}>
                  ❤
                </div>

                {/* правая колонка — текст */}
                <div className="text-center">
                  <div className="text-xl font-semibold text-[#02281c] leading-none">
                    {event.time}
                  </div>
                  <div className={`text-md text-[${color}] mt-1`}>
                    {event.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Десктопная версия — горизонтальная */}
        <div className="hidden md:block max-w-5xl mx-auto relative">
          {/* горизонтальная линия */}
          <div className="absolute top-20 left-0 right-0 h-[2px] bg-[#02281c]"></div>

          <div className="flex flex-row justify-between">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* иконка */}
                <div className="w-12 h-12 mb-4">
                  <img src={event.icon} alt={event.title} className="w-full h-full" />
                </div>

                {/* сердечко */}
                <div className={`text-[20px] text-[${color}] mb-4`}>❤</div>

                {/* время */}
                <div className="text-xl font-semibold text-[#02281c] leading-none">
                  {event.time}
                </div>

                {/* подпись */}
                <div className={`text-md text-[${color}] mt-1`}>
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;