import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/invite/:slug" element={<App />} />
      </Routes>
        
      </BrowserRouter>
  </StrictMode>,
)
