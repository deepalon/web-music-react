import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import ALAppHeader from '@/components/app-header'
import ALAppFooter from '@/components/app-footer'
import ALAppPlayerBar from '@/pages/player/app-player-bar'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

export default memo(function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ALAppHeader />
                {renderRoutes(routes)}
                <ALAppFooter />
                <ALAppPlayerBar />
            </BrowserRouter>
        </Provider>
    )
})
