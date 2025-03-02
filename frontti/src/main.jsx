import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'


//app injektoidaan sivulle - kaiken alku, luodaan router 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>  
   <App /> 
   </BrowserRouter>
  </StrictMode>,
)
