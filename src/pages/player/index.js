import React, { memo } from 'react';

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style'

export default memo(function ALPlayer() {
    return (
        <PlayerWrapper>
            <div className="content">
                <PlayerLeft>
                    <h2>ALPlayerInfo</h2>
                    <h2>ALPlayercontent</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>ALPlayerSongs</h2>
                    <h2>ALPlayerSimiList</h2>
                    <h2>ALPlayerDownLoad</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
