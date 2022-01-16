import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

import { dicoverMenu } from '@/common/local-data'
import request from '@/service/request'

import { NavLink } from 'react-router-dom';
import {
    DiscoverWrapper,
    TopMenu
} from './style.js'


export default memo(function ALDiscover(props) {
    const { route } = props

    return (
        <DiscoverWrapper>
            <div className='top'>
                <TopMenu className='wrap-v1'>
                    {
                        dicoverMenu.map((item, index) => {
                            return <div className='item' key={item.title}>
                                <NavLink exact to={item.link}>{item.title}</NavLink>
                            </div>
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
