// src/App.jsx
import React from 'react';
import Header from './components/Header';
import TitlePage from './components/TitilePage';
import OurStory from './components/Story';
import EventDetails from './components/EventDetails';
import Timeline from './components/Timeline';
import RSVPForm from './components/RSVPForm';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import WeddingPlace from './components/WeddingPlace';
import Invite from './components/Invite'
import Calendar from './components/Calendar';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts'
import Chats from './components/Chats';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from './api/api';
function App() {
  const { slug } = useParams()
  const [invite, setInvite] = useState(null)
  // const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    if (!slug) return

    api.get(`/guest/${slug}`)
      .then(res => setInvite(res.data))
      .catch(err => setError(err.message))
      // .finally(() => setLoading(false))
  }, [slug])

  // if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>
  if (!invite) return null

  return (
   <div className="relative">

  {/* ФИКСИРОВАННАЯ РАСТИТЕЛЬНОСТЬ */}
  <img
    src="/back-p1.png"
    alt="decor"
    className="
      fixed
    inset-0
    z-0
    opacity-65
  "
  />

  {/* Контент сайта */}
  <div className="relative z-10">
    <Header />
      <TitlePage />
      <Invite invite={invite}/>
      <Calendar/>
      <OurStory />
      <WeddingPlace />
      <Timeline />
      <DressCode/>
      <Gifts/>
      <RSVPForm guests={invite.guests}/>
      <Contacts />
       <Chats/>
      <Footer />

    </div>
     <img
    src="/back-p2.png"
    alt="decor"
    className="
      fixed
   right-0 bottom-0
    z-0
    opacity-65
  "
  />
    </div>
   
  );
}

export default App;