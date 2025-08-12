import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VoicemailIcon from '@mui/icons-material/Voicemail';
import {Grid} from "@mui/material";
import EnglishPlayer from "./components/EnglishPlayer.jsx";

function App() {

    return (
        <Grid container spacing={2}>
            <Grid size={4}>
                <EnglishPlayer/>
            </Grid>
        </Grid>
    )
}

export default App
