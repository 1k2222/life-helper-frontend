import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import ReviewsIcon from '@mui/icons-material/Reviews';
import {axiosInstance} from "../utils/network.jsx";
import {useEffect, useState} from "react";
import {Alert, Box, Button, Container, Grid, Snackbar} from "@mui/material";

export default function EnglishPlayer() {
    const [status, setStatus] = useState(false)
    const [alertConfig, setAlertConfig] = useState({show: false})
    console.log(status)
    useEffect(() => {
        axiosInstance.get("/api/english_player/get_status").then((response) => {
            setStatus(response)
        })
    }, []);
    if (!status) {
        return <></>
    }
    const showButton = () => {
        if (status.is_playing) {
            return (
                <Container>
                    <Button onClick={() => {
                        axiosInstance.post("/api/english_player/stop").then(() => {
                            location.reload()
                        })
                    }}>
                        <StopIcon/>
                        <p>停止播放英语</p>
                    </Button>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Button onClick={() => {
                        axiosInstance.post("/api/english_player/start_newest").then(() => {
                            location.reload()
                        })
                    }}>
                        <PlayArrowIcon/>
                        <p>循环播放最新课程</p>
                    </Button>
                    <Button onClick={() => {
                        axiosInstance.post("/api/english_player/start").then(() => {
                            location.reload()
                        })
                    }}>
                        <ReviewsIcon/>
                        <p>复习旧课程</p>
                    </Button>
                </Container>
            )
        }
    }
    const showAlert = (severity, message) => {
        setAlertConfig({
            show: true,
            severity: severity,
            message: message
        })
        setTimeout(() => {
            setAlertConfig({
                show: false,
                severity: "info",
                message: ""
            })
        }, 3000)
    }
    return (
        <Box>
            {showButton()}
            <Container>
                学习进度: {<input type="number"
                                  disabled={status.is_playing}
                                  value={status.study_progress} min={status.cursor + 1}
                                  max={status.audio_count}
                                  onChange={(e) => {
                                      setStatus({...status, study_progress: parseInt(e.target.value)})
                                  }}/>}
            </Container>
            <Container>
                当前播放: {<input type="number" disabled={status.is_playing} value={status.cursor} min={0}
                                  max={status.study_progress - 1}
                                  onChange={(e) => {
                                      setStatus({...status, cursor: parseInt(e.target.value)})
                                  }}/>}
            </Container>
            {
                !status.is_playing && <Container>
                    <Button onClick={() => {
                        axiosInstance.post('/api/english_player/set_progress', {
                            study_progress: status.study_progress,
                            cursor: status.cursor,
                        }).then(() => {
                            showAlert("success", "修改成功")
                        }).catch(() => {
                            showAlert("error", "修改失败")
                        })
                    }}>保存配置</Button>
                </Container>
            }
            {status.is_playing && <Container>
                当前播放文件名：{status.current_file}
            </Container>}
            {
                alertConfig.show &&
                <Alert variant="filled" severity={alertConfig.severity}>
                    {alertConfig.message}
                </Alert>
            }

        </Box>
    )
}
