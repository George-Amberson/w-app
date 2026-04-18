// src/components/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Можно ли с детьми?",
      answer: "Конечно! Мы будем рады видеть ваших детей. Для них предусмотрено отдельное меню и развлечения."
    },
    {
      question: "Есть ли парковка?",
      answer: "Да, около ресторана  есть охраняемая парковка. Парковка бесплатная для гостей свадьбы."
    },
   
    {
      question: "Что делать, если я опоздаю на церемонию?",
      answer: "Если вы опоздаете на церемонию, подойдите сразу в ресторан Джанни-Ресторани к 16:00. Мы будем ждать всех!"
    }
  ];

  return (
    <section id="faq" className="py-16  bg-[#b0c7c7]/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-6 bg-white hover:bg-gray-50 font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;