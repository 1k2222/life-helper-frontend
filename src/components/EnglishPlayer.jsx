import RadioIcon from '@mui/icons-material/Radio';
import {axiosInstance} from "../utils/network.jsx";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";

export default function EnglishPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        axiosInstance.get("/api/english_player/is_playing").then((response) => {
            setIsPlaying(response.is_playing)
        })
    });
    const clickHandler = () => {
        const url = isPlaying ? "/api/english_player/stop" : "/api/english_player/start"
        axiosInstance.post(url).then(() => {
            setIsPlaying(!isPlaying)
        })
    }
    return (
        <Button onClick={clickHandler}>
            <RadioIcon/>
            <p>{isPlaying ? "停止播放英语" : "播放英语"}</p>
        </Button>

    )
}
