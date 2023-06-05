import React from 'react'
import Story from './Story'
import './storyreel.css'
// import { auth } from '../firebase'
// const {photoURL,displayName}= auth.currentUser
const images = [
  {
    profileSrc:'https://tse4.mm.bing.net/th?id=OIP.NmpT2sL39XjTblxVVIpXiwHaGX&pid=Api&P=0',
   title:'displayName',
   src:'https://tse3.mm.bing.net/th?id=OIP.yjvx5tZA37enNAKy8FNvFwHaE8&pid=Api&P=0'
  //  'https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0'
  },
  {profileSrc:'https://tse4.mm.bing.net/th?id=OIP.NmpT2sL39XjTblxVVIpXiwHaGX&pid=Api&P=0',
   title:'hdaf',
   src:'https://tse3.mm.bing.net/th?id=OIP.yjvx5tZA37enNAKy8FNvFwHaE8&pid=Api&P=0'},
  
  {profileSrc:'https://tse2.mm.bing.net/th?id=OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH&pid=Api&P=0',
   title:'df',
   src:'https://tse1.mm.bing.net/th?id=OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo&pid=Api&P=0'},
  {profileSrc:'https://tse4.mm.bing.net/th?id=OIP.UGlKxiZQylR3CnJIXSbFIAHaLL&pid=Api&P=0',
   title:'df',
   src:'https://tse3.mm.bing.net/th?id=OIP.M41isCekP96zFUUQUKZ9JAHaEK&pid=Api&P=0'},
  {profileSrc:'https://tse1.mm.bing.net/th?id=OIP.cJp3uVqDRH8o8CD8msD1ZgAAAA&pid=Api&P=0',
   title:'df',
   src:'https://tse3.mm.bing.net/th?id=OIP.yjvx5tZA37enNAKy8FNvFwHaE8&pid=Api&P=0'},
]


function Storyreel() {
  
  
  return (
    <>
      <div className="story_reel">
      {images.map((e)=>{
        return <Story title={e.title} profileSrc={e.profileSrc} src={e.src} />
      })}
      </div>
    </>
  )
}

export default Storyreel