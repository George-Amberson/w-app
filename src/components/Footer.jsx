// src/components/Footer.jsx
import React from 'react';
import Countdown from 'react-countdown';
import { weddingName, weddingDateISO } from '../../constants';
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {

    return <div className='flex items-center justify-center gap-10 count-down-text'>
      <div className='text-3xl flex flex-col'>
        <div>
        {days}
        </div>
        <div className='mt-2'>Дней</div>
        </div>
      <div className='text-3xl flex flex-col'>
        <div className=''>
        {hours}
        </div>
        <div className='mt-2 '>Часов</div>
        </div>
        <div className='text-3xl'><div>
        {minutes}
        </div>
        <div className='mt-2 '>Минут</div></div>
          <div className='text-3xl'>
            <div className=''>
              {seconds}
            </div>
        <div className='mt-2 '>Секунд</div>
          </div>
    </div>;
  }
};

const Footer = () => {
  return (
    <footer className="py-12  bg-[#b0c7c7]/20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-5xl  mb-6 low-text" style={{ fontFamily: "Lumios-Marker" }}>
          {weddingName}
        </h3>
        <p className="text-xl mb-6 low-text">С нетерпением ждём встречи с вами через:</p>
        <Countdown date={weddingDateISO} renderer={renderer}/>
        <p className="text-gray-400 text-sm mt-8">Создано нами с любовью!</p>
      </div>
    </footer>
  );
};

export default Footer;