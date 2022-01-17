import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import ALThemeHeaderRCM from '@/components/theme-header-rcm'
import ALAlbumCover from '@/components/album-cover'
import { AlbumWrapper } from './style'

export default memo(function ALNewAlbum() {

    const newAlbums = useSelector(state => state.getIn(['recommend', 'newAlbums']), shallowEqual)
    const dispatch = useDispatch();

    const CalRef = useRef();
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch])

    return (
        <AlbumWrapper>
            <ALThemeHeaderRCM title="新碟上架" />
            <div className='content'>
                <div className='arrow arrow-left sprite_02' onClick={e => { CalRef.current.prev() }}></div>
                <div className='album'>
                    <Carousel dots={false} ref={CalRef}>
                        {
                            [0, 1].map((item, index) => {
                                return (
                                    <div className='page' key={index}>
                                        {
                                            newAlbums.slice(item * 5, (item + 1) * 5).map((iten, indey) => {
                                                return (
                                                    <ALAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px" />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className='arrow arrow-right sprite_02' onClick={e => { CalRef.current.next() }}></div>
            </div>
        </AlbumWrapper>
    )
})
