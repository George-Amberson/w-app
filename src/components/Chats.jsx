// src/components/Chats.jsx
import React from "react";

const Chats = () => {
  return (
    <section id="chats" className="py-16">
      <div className="container mx-auto px-6">

        <h2 className="text-5xl text-center mb-10 big-text">
          Чаты
        </h2>

        <p className="text-center low-text mb-10 max-w-2xl mx-auto text-lg md:text-xl">
          Чтобы быть в курсе всех новостей о празднике, присоединяйтесь к нашей беседе в ТГ или ВК!
          Здесь мы будем делиться актуальной информацией, важными напоминаниями и деталями торжества.
        </p>

        {/* кнопки */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">

          {/* Telegram */}
          <a
            href="https://t.me/+58TrqEEkRkVlNTUy"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl border border-[#02281c] text-[#02281c]
                       hover:bg-[#02281c] hover:text-white transition duration-300
                       w-full md:w-auto text-center font-bold"
          >
            Присоединиться в ТГ
          </a>

          {/* VK */}
          <a
            href="https://vk.me/join/KGBgeneMLuf7L/rEt5RZxou3yLQNfPxbQD0="
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-xl border border-[#02281c] text-[#02281c]
                       hover:bg-[#02281c] hover:text-white transition duration-300
                       w-full md:w-auto text-center font-bold"
          >
            Присоединиться в ВК
          </a>

        </div>

      </div>
    </section>
  );
};

export default Chats;