import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendAction } from '../../store/actionCreators'

import { HotRecommendWrapper } from './style'
import ALThemeHeaderRCM from '@/components/theme-header-rcm'
import ALSongsCover from '@/components/songs-cover'

export default memo(function ALHotRecommend() {

    const hotRecommends = useSelector(state => state.getIn(['recommend', 'hotRecommends']), shallowEqual)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotRecommendAction(8))
    }, [dispatch])

    return (
        <HotRecommendWrapper>
            <ALThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
            <div className='recommend-list'>
                {
                    hotRecommends.map((item, index) => {
                        return (
                            <ALSongsCover key={item.id} info={item} />
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
