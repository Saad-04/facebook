import React from 'react'
import '../index.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ForumIcon from '@mui/icons-material/Forum';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
function Header() {
    return (
        <div className="header">
            {/* left section  */}
            <div className="header_left">
                <img src="https://tse1.mm.bing.net/th?id=OIP.55DCXbXlKDgEBoZhKxpzLAHaHa&pid=Api&rs=1&c=1&qlt=95&w=118&h=118" alt="" />
                <div className="search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            {/* middle section  */}

            <div className="header_middle">
                <div className="icon_option">
                    <HomeIcon />
                </div>
                <div className="icon_option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="icon_option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="icon_option">
                    <SupervisedUserCircleOutlinedIcon />
                </div>
            </div>

            {/* right section  */}
            <div className="header_right">
                <div className="login_icons">
                    <Avatar sizes='30px' />
                    <h3>saad ali</h3>
                </div>
                <div className="left_icons">
                    <IconButton>
                        <CircleNotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default Header