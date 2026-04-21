// src/App.jsx
import { Outlet } from "react-router-dom";
import backgroundOne from '@/assets/background/back-p1.png'
import backgroundTwo from '@/assets/background/back-p2.png'
function App() {


  return (
   <div className="relative">

  {/* ФИКСИРОВАННАЯ РАСТИТЕЛЬНОСТЬ */}
  <img
    src={backgroundOne}
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
    <Outlet/>
    </div>
     <img
    src={backgroundTwo}
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