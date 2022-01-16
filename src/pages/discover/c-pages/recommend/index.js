import React, { memo } from 'react'

import ALTopBanner from './c-cpns/top-banner'
import ALHotRecommend from './c-cpns/hot-recommend'
import ALNewAlbum from './c-cpns/new-album'
import ALRecommendRanking from './c-cpns/recommend-rangking'

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'

export default memo(function ALRecommend() {
    return (
        <RecommendWrapper>
            <ALTopBanner>
            </ALTopBanner>
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <ALHotRecommend />
                    <ALNewAlbum />
                    <ALRecommendRanking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
})



// function ALRecommend(props) {
//     const { getBanners, topBanners } = props
//     useEffect(() => {
//         getBanners()
//     }, [getBanners])
//     return (
//         <div>
//             ALRecommend:{topBanners.length}
//         </div>
//     )
// }

// const mapStateToProprs = (state) => ({
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = (dispatch) => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProprs, mapDispatchToProps)(memo(ALRecommend));