import React, { memo } from 'react'

import { RecommendRankingWrapper } from './style'
import ALThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function ALRecommendRanking() {
    return (
        <RecommendRankingWrapper>
            <ALThemeHeaderRCM title="榜单" />
        </RecommendRankingWrapper>
    )
})
