import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getSongDetailAction } from '../store/actionCreator'

import { Slider } from 'antd'

import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

export default memo(function ALAppPlayerBar() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [])

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play"></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name"></span>
                            <a href="#/" className="singer-name"></a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} />
                            <div className="time">
                                <span className="now-time"></span>
                                <span className="divider">/</span>
                                <span className="duration"></span>
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
        </PlaybarWrapper>
    )
})
