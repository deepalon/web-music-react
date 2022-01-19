import request from '@/service/request'

export const getSongDetail = (ids) => {
    return request({
        url: '/song/detail',
        params: {
            ids: ids
        }
    })
}