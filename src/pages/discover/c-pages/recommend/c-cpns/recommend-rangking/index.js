import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'

import { RankingWrapper } from './style'
import ALThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function ALRecommendRanking() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    }, [dispatch])

    return (
        <RankingWrapper>
            <ALThemeHeaderRCM title="榜单" />
        </RankingWrapper>
    )
})
