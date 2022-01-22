import { Redirect } from 'react-router-dom'
import ALDiscover from '@/pages/discover'
import ALFriend from '@/pages/friend'
import ALMine from '@/pages/mine'
import ALRecommend from '@/pages/discover/c-pages/recommend'
import ALRanking from '@/pages/discover/c-pages/ranking'
import ALSongs from '@/pages/discover/c-pages/songs'
import ALDjradio from '@/pages/discover/c-pages/djradio'
import ALArtist from '@/pages/discover/c-pages/artist'
import ALAlbum from '@/pages/discover/c-pages/album'
import ALPlayer from '@/pages/player'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (<Redirect to='/discover' />)
    },
    {
        path: '/discover',
        component: ALDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => (<Redirect to="/discover/recommend" />)
            },
            {
                path: '/discover/recommend',
                component: ALRecommend
            },
            {
                path: '/discover/ranking',
                component: ALRanking
            },
            {
                path: '/discover/songs',
                component: ALSongs
            },
            {
                path: '/discover/djradio',
                component: ALDjradio
            },
            {
                path: '/discover/artist',
                component: ALArtist
            },
            {
                path: '/discover/album',
                component: ALAlbum
            },
            {
                path: '/discover/player',
                component: ALPlayer
            }
        ]
    },
    {
        path: '/mine',
        component: ALMine
    },
    {
        path: '/friend',
        component: ALFriend
    },
]

export default routes