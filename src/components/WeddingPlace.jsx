// src/components/EventDetails.jsx
import React from "react";

import { useInView } from "react-intersection-observer";

const isLowEndIOS = () => {
  console.log(1)
  const ua = navigator.userAgent;

  const isIOS = /iPhone|iPad|iPod/.test(ua);
  console.log(isIOS)
  if (!isIOS) return false;
}
const Map = React.lazy(() => import("./Map"));
const WeddingPlace = () => {
   const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.4    // 20% элемента видно
  })

  return (
<section id="place" className="py-20">
  <div className={`mx-auto px-4 md:px-6 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>

    <div className="flex flex-col gap-10">

      {/* информация */}
      <div className="space-y-6 low-text text-center">
        <h2 className="text-5xl mb-10 big-text">
          Место проведения торжества
        </h2>

        <p className="text-xl">
          Крыша <br />
          <span className="font-semibold text-2xl">
            "Джани Ресторани",
          </span>
          <br />
          ул. Пискунова, 40к3
        </p>

        <a
          href="https://yandex.ru/maps/47/nizhny-novgorod/house/ulitsa_piskunova_40k3/YE0YdgZhQUwAQFtsfX9zd3hqYw==/?ll=44.012581%2C56.326362&z=18.6"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 border-1 border-[#02281c] border-solid rounded-lg hover:bg-[#02281c] hover:text-white transition color-[#02281c]  font-bold"
        >
          Открыть в Яндекс.Картах
        </a>
      </div>

      {/* карта */}
     <div className="w-full flex justify-center">
      {!isLowEndIOS() && (
        <React.Suspense fallback={null}>
          <Map />
        </React.Suspense>
      )}
  </div>

    </div>
</div>
</section>
  );
};

export default WeddingPlace;