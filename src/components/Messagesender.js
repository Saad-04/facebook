import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import './messagesender.css'

function Messagesender() {

  // states hare 
  const {input,setInput}=useState()
  const {imgUrl,setImageUrl}=useState();

  // some clever db stuff here
  
  const  handleSubmit=(e)=>{
    e.preventDefault();
    setInput('');
    // setImageUrl('');
    
  }
  return (
    <>
      <div className="message_sender">

      {/* top */}
        <div className="messagesender_top">
          <Avatar src='https://scontent.fisb23-1.fna.fbcdn.net/v/t1.6435-9/140410105_232924491763119_2116003296726339242_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5hxGJT2RPM38RWq0JHSkFHB_c7hc_Ft0cH9zuFz8W3f6XrlpqUS88jimIl-opBhWtHk_5AupMxLhjmJ8fvfzM&_nc_ohc=0X5CsjKkissAX_J48WR&_nc_ht=scontent.fisb23-1.fna&oh=00_AfCZnIAah_66Im0yIKPo0wSqA3evgJw20VJA222Qun8M8A&oe=64288C34'/>
          <form action="">
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='whats in your mind' />
            <input value={imgUrl} onChange={(e)=>setImageUrl(e.target.value)} type="text" placeholder='post image' />
            <button onClick={handleSubmit} >post</button>
          </form>
        </div>

        {/* bottom  */}
        <div className="messagesender_bottom">
        <div className="messagesender_option">
          <VideocamIcon style={{color:'red'}}/>
          <h3>Live Video</h3>
        </div>
        <div className="messagesender_option">
          <PhotoLibraryIcon style={{color:'green'}}/>
          <h3>Photo/Video</h3>
        </div>
        <div className="messagesender_option">
          <InsertEmoticonIcon style={{color:'yellow'}}/>
          <h3>Activity Feeling</h3>
        </div>
        </div>
        </div>

    </>
  )
}

export default Messagesender