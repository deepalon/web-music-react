import { getTopBanners, getHotRecommends } from '@/service/recommend'

import * as actionTypes from './constans'

const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then((res) => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

export const getHotRecommendAction = () => {
    return dispatch => {
        getHotRecommends().then((res) => {
            // console.log(res);
            dispatch(changeHotRecommendAction(res))
        })
    }
}