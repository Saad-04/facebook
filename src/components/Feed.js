import React from 'react'
import Storyreel from './Storyreel'
import Messagesender from './Messagesender'
import './feed.css'
import Post from './Post'
import { auth } from '../firebase'
function Feed() {
  const {displayName}= auth.currentUser
  return (
 <>
    <div className="feed">

    <Storyreel/>
    <Messagesender/>
    <Post 
    profilePic='https://scontent.fisb23-1.fna.fbcdn.net/v/t1.6435-9/140410105_232924491763119_2116003296726339242_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5hxGJT2RPM38RWq0JHSkFHB_c7hc_Ft0cH9zuFz8W3f6XrlpqUS88jimIl-opBhWtHk_5AupMxLhjmJ8fvfzM&_nc_ohc=0X5CsjKkissAX_J48WR&_nc_ht=scontent.fisb23-1.fna&oh=00_AfCZnIAah_66Im0yIKPo0wSqA3evgJw20VJA222Qun8M8A&oe=64288C34' 
    image='https://tse4.mm.bing.net/th?id=OIP.r8IqnZvajmcmfws6fDgfvwHaEo&pid=Api&P=0'
    message='hello how are you'
    username={displayName}
    />
    </div>
 </>
  )
}

export default Feed