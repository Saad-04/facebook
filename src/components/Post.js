import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// import { auth } from '../firebase'

// const {photoURL,displayName}= auth.currentUser
function Post({message,image}) {
  const [fb,setFb]=useState()
  const changeColor=(e)=>{
const btn =e.target;
btn.style.color ='#2e81f4'
    setFb(btn)
  }
  return (
    <div className="post">

      {/* post top  */}
      <div className="post_top">
        <Avatar src={image} className='post_avatar' />
        <div className="top_postinfo">
          <h3>{message}</h3>
          <p>this is the </p>
        </div>
      </div>

      {/* bottom */}
      <div className="post_bottom">
        <p>{message}</p>
      </div>

      {/* img  */}
      <div className="post_image">
        <img src={image} alt="this is image" />
      </div>

{/* post options  */}
<div className="post_options">

<div className="post_option" onClick={(e)=>changeColor(e)}>
  <ThumbUpIcon style={{color:{fb}}} />
  <p style={{color:{fb}}}>Like</p>
</div>
<div className="post_option">
  <ChatBubbleOutlineOutlinedIcon/>
  <p>Comment</p>
</div>
<div className="post_option">
  <NearMeIcon/>
  <p>Share</p>
</div>
<div className="post_option">
  <AccountCircleIcon/>
  <ExpandMoreOutlinedIcon/>

</div>

</div>
    </div>

  )
}

export default Post