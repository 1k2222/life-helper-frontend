import {Box, Button, CircularProgress, Grid, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";

export default function CantonesePronouncer() {
    const [status, setStatus] = useState(0)
    const [text, setText] = useState("")
    const [audioContent, setAudioContent] = useState(null)
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const generate = () => {
        setStatus(1)
        axios.post('/api/pronounce_cantonese', {
            text: text
        }, {
            responseType: "blob"
        }).then((resp) => {
            setStatus(0)
            setAudioContent(resp.data)
            console.log(resp.data)
        }).catch((error) => {
            setStatus(2)
            console.log("Pronounce Cantonese Failed, error: ", error)
        })
    }
    const showProgressBar = () => {
        if (status === 1) {
            return (
                <>
                    <Grid container size={6} sx={{alignItems: "center", justifyContent: "flex-end"}}>
                        <CircularProgress/>
                    </Grid>
                    <Grid container size={6} sx={{alignItems: "center", justifyContent: "flex-start"}}>
                        生成中...
                    </Grid>
                </>
            )
        } else if (status === 2) {
            return (
                <Grid container size={12} sx={{alignItems: "center", justifyContent: "center"}}>
                    生成失败，请重试
                </Grid>
            )
        }
        return null
    }
    const showAudio = () => {
        if (!audioContent) {
            return null
        }
        return (
            <audio controls>
                <source src={URL.createObjectURL(audioContent)} type="audio/aac"/>
            </audio>
        )

    }
    return (
        <Grid container sx={{justifyContent: "center"}} spacing={3}>
            <Grid size={12}>
                <TextField fullWidth placeholder="请输入要朗读的内容..." multiline variant="filled"
                           onChange={(e) => {
                               setButtonEnabled(e.target.value.trim().length > 0)
                               setText(e.target.value)
                           }}
                           sx={{backgroundColor: "white"}}/>
            </Grid>
            <Grid size={12}>
                <Button onClick={generate} disabled={!buttonEnabled} variant="contained"
                        sx={{alignItems: "center"}}>点击生成语音</Button>
            </Grid>
            {showProgressBar()}
            <Grid size={12}>
                {showAudio()}
            </Grid>
        </Grid>
    )
}
