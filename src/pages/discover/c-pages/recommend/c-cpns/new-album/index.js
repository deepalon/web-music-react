import React, { memo } from 'react'

import { NewAlbumWrapper } from './style'
import ALThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function ALNewAlbum() {
    return (
        <NewAlbumWrapper>
            <ALThemeHeaderRCM title="新碟上架" />
        </NewAlbumWrapper>
    )
})
