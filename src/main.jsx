import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import EnglishPlayer from "./components/EnglishPlayer.jsx";
import CantonesePronouncer from "./components/CantonesePronouncer.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/english_study" element={<EnglishPlayer/>}/>
                <Route path="/cantonese_pronouncer" element={<CantonesePronouncer/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
