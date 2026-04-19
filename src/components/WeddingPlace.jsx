// src/components/EventDetails.jsx
import React from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useInView } from "react-intersection-observer";
const position = {
  latitude: 56.326497,
  longitude: 44.011897
};

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
  <div className="w-full md:w-3/4 lg:w-2/3 h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#e6dccb]">
    <Map
      initialViewState={{
        longitude: position.longitude,
        latitude: position.latitude,
        zoom: 16
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={{
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: [
              "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ],
            tileSize: 256
          }
        },
        layers: [
          {
            id: "osm-layer",
            type: "raster",
            source: "osm"
          }
        ]
      }}
    >
      <Marker
        longitude={position.longitude}
        latitude={position.latitude}
        anchor="bottom"
      >
        <img src="/pin.svg" className="w-16 h-16"/>
      </Marker>
    </Map>
  </div>
  </div>

    </div>
</div>
</section>
  );
};

export default WeddingPlace;