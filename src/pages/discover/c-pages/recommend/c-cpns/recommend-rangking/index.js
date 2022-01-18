import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'

import { RankingWrapper } from './style'
import ALThemeHeaderRCM from '@/components/theme-header-rcm'
import ALTopRanking from '@/components/top-ranking'

export default memo(function ALRecommendRanking() {

    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
    }), shallowEqual);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    }, [dispatch])

    return (
        <RankingWrapper>
            <ALThemeHeaderRCM title="榜单" />
            <div className='tops'>
                <ALTopRanking info={upRanking} />
                <ALTopRanking info={newRanking} />
                <ALTopRanking info={originRanking} />
            </div>
        </RankingWrapper>
    )
})
