// src/components/Contacts.jsx
import React from 'react';
import { contacts } from '../../constants';
import { useInView } from "react-intersection-observer";
const Contact = ({contact, index}) => {
   const { ref, inView } = useInView({
     triggerOnce: true, // анимация только один раз
     threshold: 0.5     // 20% элемента видно
   })
  return(
  <div key={index} className={`text-center p-6 bg-white rounded-xl shadow-md ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>
    <div className="flex justify-center mb-4">
    <div className="w-70 h-70 rounded-full overflow-hidden bg-amber-100">
      <img
        src={contact.url}
        alt={contact.name}
        className={`w-full h-full object-cover ${index == 1 ? '-scale-x-100 transform' : ''} md:transform-none md:scale-none`}
      />
    </div>
    </div>
    {/* <h3 className="text-xl font-bold mb-2">{contact.role}</h3> */}
    <p className="font-semibold low-text">{contact.name}</p>
    {/* <p className="low-text mt-2">{contact.description}</p> */}
    <p className="mt-4">
      <a 
        href={`tel:${contact.phone}`} 
        className="text-[#834a12] hover:text-[#834a12] mr-4"
      >
        <i className="fas fa-phone mr-2"></i>{contact.phone}
      </a>
    </p>
    <p className="mt-2">
      <a 
        href={`https://t.me/${contact.telegram.replace('@', '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#834a12] hover:text-[#834a12"
      >
        <i className="fab fa-telegram mr-2"></i>{contact.telegram}
      </a>
    </p>
  </div>
  )
}
const Contacts = () => {
  const { ref, inView } = useInView({
     triggerOnce: true, // анимация только один раз
     threshold: 0.3     // 20% элемента видно
   })
  return (
    <section className="py-16  bg-[#b0c7c7]/20">
      <div className={`container mx-auto px-4 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}> 
        <h2 className="text-5xl text-center mb-10 big-text">Контакты</h2>
           <p className="text-center low-text mb-10 max-w-2xl mx-auto text-lg md:text-xl">
       
          Если у вас возникнут вопросы — смело звоните или пишите нам!
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <Contact contact={contact} index={index} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;