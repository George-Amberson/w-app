// src/components/RSVPForm.jsx
import React, { useState, useRef, useEffect } from "react";
import api from '../api/api';
import { useInView } from "react-intersection-observer";
const RSVPForm = ({ guests }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedGuest, setExpandedGuest] = useState(null);
const [attendance, setAttendance] = useState({

});
const [submittedGuests, setSubmittedGuests] = useState({});
const timeoutsRef = useRef({});
useEffect(() => {
  return () => {
    Object.values(timeoutsRef.current).forEach(clearTimeout);
  };
}, []);
const handleSubmit = async (e, guest) => {
  e.preventDefault();

  const payload = {
    id: guest.id,
    ...attendance[guest.id],
  };

  try {
    await api.post(`rsvp`, payload);

    // показываем "спасибо"
    setSubmittedGuests((prev) => ({
      ...prev,
      [guest.id]: true,
    }));

    // если уже есть таймер — очищаем
    if (timeoutsRef.current[guest.id]) {
      clearTimeout(timeoutsRef.current[guest.id]);
    }

    // ставим новый таймер на 10 сек
    timeoutsRef.current[guest.id] = setTimeout(() => {
      setSubmittedGuests((prev) => ({
        ...prev,
        [guest.id]: false,
      }));
    }, 10000);

  } catch (err) {
    console.error(err);
  }
};
     const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.5     // 20% элемента видно
  })
  return (
    <section id="rsvp" className="py-16">
      <div className={`container mx-auto px-4 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>
        <h2 className="text-5xl  text-center mb-10 big-text">
           Дорогие гости!
        </h2>
        <p className="text-center low-text mb-8 max-w-2xl mx-auto text-lg md:text-xl">
       
          Чтобы наш праздник был по-настоящему уютным, просим заполнить анкету для каждого гостя, указанного в вашем приглашении. 
        </p>
        <p className="text-center important-text mb-8 max-w-2xl mx-auto text-lg md:text-xl">
          Не забудьте подтвердить своё присутствие до 15 июня!
        </p>
        {/* --- Десктоп: Tabs --- */}
        <div className="hidden md:block max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex border-b border-gray-200 mb-6">
            {guests.map((guest, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-semibold ${
                  activeTab === index ? "border-b-2 border-[#834a12] text-[#834a12]" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {guest.name}
              </button>
            ))}
          </div>

          <div>
            {guests.map((guest, index) => (
              <div key={index} className={activeTab === index ? "block" : "hidden"}>
               
                  <Form
                    guest={guest}
                    attendance={attendance}
                    setAttendance={setAttendance}
                    handleSubmit={handleSubmit}
                     isSubmitted={submittedGuests[guest.id]}
                  />
            
              </div>
            ))}
          </div>
        </div>

        {/* --- Мобильные: Accordion --- */}
        <div className="md:hidden max-w-3xl mx-auto space-y-4">
          {guests.map((guest, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
              <button
                className="w-full text-left font-semibold text-[#834a12] flex justify-between items-center"
                onClick={() => setExpandedGuest(expandedGuest === index ? null : index)}
              >
                {guest.name}
                <span>{expandedGuest === index ? "−" : "+"}</span>
              </button>

              {expandedGuest === index && (
                <div className="mt-4">

                    <Form
                      guest={guest}
                      attendance={attendance}
                      setAttendance={setAttendance}
                      handleSubmit={handleSubmit}
                       isSubmitted={submittedGuests[guest.id]}
                    />
  


                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Форма одного гостя ---
const Form = ({ guest, attendance, setAttendance, handleSubmit, isSubmitted }) => {
  const alcoholOptions = [
    { label: 'Шампанское', value: 'champagne' },
    { label: 'Виски', value: 'whiskey' },
    { label: 'Красное вино', value: 'wineRed' },
    { label: 'Водка', value: 'vodka' },
    { label: 'Белое вино', value: 'wineWhite' },
    { label: 'Безалкогольные', value: 'alkoFree'},
  ]

  // Разбиваем на две колонки
  const mid = Math.ceil(alcoholOptions.length / 2)
  const col1 = alcoholOptions.slice(0, mid)
  const col2 = alcoholOptions.slice(mid)
  if (isSubmitted) {
    return <Submitted />;
  }
  console.log(attendance[guest.id])
  return (
    <form onSubmit={(e) => handleSubmit(e, guest)}>
      {/* RSVP */}
      <div className="mb-6">
        <label className="block text-[#02281c] mb-4 font-semibold">Вы придёте на нашу свадьбу? *</label>
        <div className="flex space-x-6">
          <label className="flex items-center cursor-pointer text-[#02281c] hover:text-[#834a12] transition">
            <input
              type="radio"
              name={`attendance-${guest}`}
              value="accepted"
              required
              className="mr-2 h-5 w-5 accent-[#02281c] hover:accent-[#834a12]"
              onChange={(e) => setAttendance((prev) => ({ ...prev,  [guest.id]: {
      ...prev[guest.id],
      status: e.target.value,
    }, }))}
            />
            <span>С радостью приду!</span>
          </label>
          <label className="flex items-center cursor-pointer text-[#02281c] hover:text-[#834a12] transition">
            <input
              type="radio"
              name={`attendance-${guest}`}
              value="rejected"
              required
              className="mr-2 h-5 w-5 accent-[#02281c] hover:accent-[#834a12]"
              onChange={(e) => setAttendance((prev) => ({ ...prev,   [guest.id]: {
      ...prev[guest.id],
      status: e.target.value,
    },e }))}
            />
            <span>К сожалению, не смогу</span>
          </label>
        </div>
      </div>
{ attendance[guest.id]?.status === 'accepted' && <>
      {/* Аллергии */}
      <div className="mb-6">
        <label className="block text-[#02281c] mb-2 font-semibold">Аллергии</label>
        <textarea
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02281c] text-[#02281c]"
          placeholder="Есть ли у Вас аллергии?"
          onChange={(e) => setAttendance((prev) => ({ ...prev, [guest.id]: {
            ...prev[guest.id],
            comment: e.target.value,
          }, }))}
        ></textarea>
      </div>

      <div className='mb-6'>
        <label className="block text-[#02281c] mb-4 font-semibold">
          Какие напитки Вы предпочитаете? *  
          <span className="font-normal"> (Можно выбрать несколько вариантов)</span>
        </label>

      <div className="grid gap-2 justify-items-start grid-cols-2">
        {alcoholOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center cursor-pointer text-[#02281c] hover:text-[#834a12] transition md:hover:accent-[#834a12]
              md:checked:hover:accent-[#834a12]"
          >
            <input
              type="checkbox"
              name={`alcohol-${guest}`}
              value={option.value}
             className="
              mr-2 h-5 w-5
              accent-[#02281c]
              checked:accent-[#02281c]
              md:hover:accent-[#834a12]
              md:checked:hover:accent-[#834a12]"
              onChange={(e) => setAttendance((prev) => ({ ...prev,  [guest.id]: {
            ...prev[guest.id],
            [option.value]: e.target.checked,
          }, }))
              }
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
  </div>
  </>}
      {/* Submit */}
<button
  type="submit"
  disabled={!attendance[guest.id]?.status}
  className="
    w-full py-4 rounded-lg font-semibold transition

    bg-[#02281c] text-white shadow-md
    enabled:hover:bg-[#834a12]
    enabled:hover:-translate-y-1

    disabled:bg-white
    disabled:text-gray-500
    disabled:border disabled:border-gray-300
    disabled:shadow-none
    disabled:cursor-not-allowed
  "
>
  Отправить ответ
</button>
    </form>
  )
}

// --- Сообщение после отправки ---
const Submitted = () => (
  <div className="mt-6 p-4 bg-[#02281c]/20 rounded-lg text-center">
    <p className="font-semibold  low-text">Спасибо! Ваш ответ успешно отправлен.</p>
  </div>
);

export default RSVPForm;