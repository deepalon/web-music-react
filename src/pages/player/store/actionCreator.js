import * as actionTypes from './constants'
import { getSongDetail, getLyric } from '@/service/player'
import { getRandomNum } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'

const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

const changeLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})

export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList'])
        const sequence = getState().getIn(['player', 'sequence'])
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
        switch (sequence) {
            case 1:
                let randomIndex = getRandomNum(playList.length);
                while (currentSongIndex === randomIndex) {
                    randomIndex = getRandomNum(playList.length)
                }
                currentSongIndex = randomIndex
                break;
            default:
                currentSongIndex += tag
                if (currentSongIndex >= playList.length) currentSongIndex = 0
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1
        }

        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        dispatch(getLyricAction(currentSong.id))

    }
}

export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {

        //根据id查找播放列表中是否已存在歌曲
        const playList = getState().getIn(['player', 'playList'])
        const songIndex = playList.findIndex((song) => song.id === ids)
        let song = null;

        if (songIndex > 0) { //播放列表中找到歌曲
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))
            dispatch(getLyricAction(song.id))
        } else { //播放列表中没找到歌曲

            //去请求新的歌曲
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0]

                if (!song) return;

                //最新请求的歌曲添加到播放列表中
                const newPlayList = [...playList]
                newPlayList.push(song)
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                dispatch(changeCurrentSongAction(song))
                dispatch(getLyricAction(song.id))
            })
        }


    }
}

const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric;
            const lyricList = parseLyric(lyric)
            dispatch(changeLyricListAction(lyricList))
        })
    }
}