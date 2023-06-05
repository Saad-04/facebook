import React from 'react'
import { Avatar } from '@mui/material'
import './story.css'
function Story({src,profileSrc,title}) {
  return (
  <>
    <div style={{backgroundImage:`url(${src})`}} className="story">
<Avatar src={profileSrc} className='Avatar'/>
<h4>{title}</h4>
    </div>
  </>
  )
}

export default Story