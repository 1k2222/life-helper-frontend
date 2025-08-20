import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VoicemailIcon from '@mui/icons-material/Voicemail';
import {Button, Grid} from "@mui/material";
import EnglishPlayer from "./components/EnglishPlayer.jsx";
import RadioIcon from "@mui/icons-material/Radio";
import {useNavigate} from "react-router";

function App() {
    const navigate = useNavigate();
    return (
        <Grid container spacing={2}>
            <Grid size={4}>
                <Button onClick={() => {
                    navigate('/english_study')
                }}>
                    <RadioIcon/>
                    <p>英语学习</p>
                </Button>
            </Grid>
        </Grid>
    )
}

export default App
