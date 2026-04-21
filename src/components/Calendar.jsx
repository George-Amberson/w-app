import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import heart from '@/assets/icons/heart.svg'
const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const dates = [
  "","","","","", "1", "2", "3", "4", "5", "6",
  "7", "8", "9", "10", "11", "12", "13",
  "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27",
  "28", "29", "30"
];

const Calendar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.5     // 20% элемента видно
  })
  return (
    <section id="date" className="py-20 text-[#2f2a26]">
      <div className={`container mx-auto text-center ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>

        {/* Заголовок */}
        <h2 className="text-5xl mb-10 font-[cursive] big-text">
          Дата проведения
        </h2>

        {/* Месяц */}
        <p className="tracking-[0.3em] text-sm mb-4 low-text text-xl">
          Август
        </p>

        {/* Дни недели */}
        <div className="grid grid-cols-7 max-w-md mx-auto mb-2 text-sm low-text">
          {days.map((day) => (
            <div key={day} className="opacity-70">
              {day}
            </div>
          ))}
        </div>

        {/* Календарь */}
        <div className="grid grid-cols-7 max-w-md mx-auto gap-y-2 relative text-lg">
          {dates.map((d, i) => {
            const isWedding = d === "7";

            return (
              <div key={i} className="relative h-8 flex items-center justify-center low-text">
                {d}

                {isWedding && (
                  <motion.img
                    src={heart} // твоя картинка сердца
                    alt="heart"
                    className="absolute w-10 h-10 top-"
                    animate={{ scale: [1.2, 1.1, 1] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Calendar;