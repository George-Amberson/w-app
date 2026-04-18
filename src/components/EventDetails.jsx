// src/components/EventDetails.jsx
import React from 'react';
import { details } from '../../constants';
const EventDetails = () => {
  

  return (
    <section id="details" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Детали события</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-amber-600 text-3xl mb-4">
                <i className={detail.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
              <p className="mb-2"><strong>{detail.date}</strong></p>
              <p className="mb-4">{detail.location}</p>
              <p className="text-sm text-gray-600">{detail.address}</p>
              {detail.note && (
                <p className="mt-4 text-sm text-amber-600">{detail.note}</p>
              )}
              {detail.hasMap && (
                <a 
                  href={detail.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-amber-600 hover:text-amber-800"
                >
                  <i className="fas fa-map-marker-alt mr-2"></i>Проложить маршрут
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;