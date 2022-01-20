import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils'

import { Slider } from 'antd'
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'
import { getSongDetailAction } from '../store/actionCreator'
import { set } from 'immutable'

export default memo(function ALAppPlayerBar() {
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0);
    const [isChanging, setIsChanging] = useState(false)
    const [isPlay, setIsPlay] = useState(false)


    const currentSong = useSelector(state => state.getIn(['player', 'currentSong']), shallowEqual)
    const dispatch = useDispatch()


    const audioRef = useRef();

    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [dispatch])

    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
    }, [currentSong])


    const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
    const singerName = (currentSong.ar && currentSong.ar[0].name) || ""
    const duration = currentSong.dt || 0
    const showDuration = formatMinuteSecond(duration)
    const showCurrentTime = formatMinuteSecond(currentTime)


    const playMusic = useCallback(() => {
        isPlay ? audioRef.current.pause() : audioRef.current.play()
        setIsPlay(!isPlay)
    }, [isPlay])

    const timeUpdate = (e) => {
        if (!isChanging) {
            setCurrentTime(e.target.currentTime * 1000)
            setProgress(currentTime / duration * 100)
        }
    }

    const sliderChange = useCallback((value) => {
        setIsChanging(true);
        const currentTime = value / 100 * duration
        setCurrentTime(currentTime)
        setProgress(value)
    }, [duration])

    const afterSliderChange = useCallback((value) => {
        const currentTime = value / 100 * duration / 1000
        audioRef.current.currentTime = currentTime
        setCurrentTime(currentTime * 1000)
        setIsChanging(false);
        if (!isPlay) {
            playMusic()
        }
    }, [duration, isPlay, playMusic])

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlay}>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play" onClick={playMusic}></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <img src={getSizeImage(picUrl, 35)} alt="" />
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="#/" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={afterSliderChange} />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator >
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop" ></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} />
        </PlaybarWrapper>
    )
})
