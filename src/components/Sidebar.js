import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import './sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { auth } from '../firebase';
function Sidebar() {
 const logOut= ()=>{
  logOut(auth)
 }
//  const {displayName,photoURL}= auth.currentUser
  return (
    <>
      <div className="sidebar">
        <button style={{ color: 'yellow', backgroundColor: 'black', padding: '5pc' }} onClick={()=>{auth.signOut()}} > logout</button>
        <SidebarRow src='' title={'saad'} />
        <SidebarRow Icons={LocalHospitalIcon} title='Covid-19 Information System' />
        <SidebarRow Icons={EmojiFlagsIcon} title='Location' />
        <SidebarRow Icons={EmojiPeopleIcon} title='Friends' />
        <SidebarRow Icons={ChatIcon} title='Messenger' />
        <SidebarRow Icons={StorefrontIcon} title='Marketplace' />
        <SidebarRow Icons={VideoLibraryIcon} title='Videos' />
        <SidebarRow Icons={ExpandMoreIcon} title='pages' />
      </div>
    </>
  )
}

export default Sidebar