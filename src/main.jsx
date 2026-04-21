import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from './pages/NotFound.jsx';
import MainPage from './pages/MainPage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
        <Route path="/invite/:slug" element={<MainPage />} />
         <Route index  element={<NotFound/>} />
        </Route>
      </Routes>
        
      </BrowserRouter>
  </StrictMode>,
)
