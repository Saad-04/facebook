import React from 'react'
import { Avatar } from '@mui/material'

import './sidebarrow.css'
function SidebarRow({ title, src, Icons }) {
    return (
        <div className='sidebar_row'>
       
            {src && <Avatar src={src} />}
            {Icons && <Icons style={{ color: "#2e81f4", fontSize: "xx-large" }} />}
            <h4 style={{fontFamily:"'Roboto', sans-serif"}}>{title}</h4>
        </div>
    )
}

export default SidebarRow