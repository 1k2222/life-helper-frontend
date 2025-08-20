import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import EnglishPlayer from "./components/EnglishPlayer.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/english_study" element={<EnglishPlayer/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
