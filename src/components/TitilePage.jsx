// src/components/Hero.jsx
import React, { useState } from "react";
import { weddingDateISO } from "../../constants";
import { DateTime } from "luxon";
import invite from '@/assets/invite/invite.webp'
// Ваша SVG


const TitlePage = () => {
  const dateOfWedding = DateTime.fromISO(weddingDateISO).setLocale("ru");

  
  // Форматируем дату
  const dayOfWeek = dateOfWedding.toFormat("cccc"); // день недели
  const day = dateOfWedding.toFormat("d");         // число
  const month = dateOfWedding.toFormat("LLLL");     // месяц
  const year = dateOfWedding.toFormat("yyyy");      // год


  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 low-text">

      <div className="relative z-10 flex flex-col items-center top-9">

        {/* SVG с именами */}
        <div
          className={`transition-all duration-700 ease-out ${
           "opacity-0 animate-fade-up"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <img className="w-auto h-32 md:h-48 mx-auto" src={invite}/>
        </div>

        {/* Блок даты и времени */}
        <div className="mt-8 flex flex-col items-center text-[#02281c] w-full opacity-0 animate-fade-up">

      {/* День недели */}
      <div className="text-xl tracking-[0.35em] uppercase mb-3">
        {dayOfWeek}
      </div>

      {/* Центральная строка с линиями */}
      <div className="flex items-center w-full gap-4">
        <div className="h-px flex-1 bg-[#5c6f64]/40" />

        <div className="text-6xl md:text-7xl text-[#834a12] font-light">
          {day}
        </div>

        <div className="h-px flex-1 bg-[#5c6f64]/40" />
      </div>

      {/* Месяц */}
      <div className="mt-3 text-xl tracking-[0.35em] uppercase">
        {month}а
      </div>

      {/* Год */}
      <div className="mt-1 text-sm tracking-[0.25em]">
        {year}
      </div>
    </div>

      </div>
    </section>
  );
};

export default TitlePage;