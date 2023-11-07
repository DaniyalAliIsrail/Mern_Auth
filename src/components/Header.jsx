import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepPurple} from '@mui/material/colors';
import "./header.css"

const Header = () => {
  return (
   <>
   <header>
    <nav><h1>AUTH</h1>
    <div className="avatar">
      <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
    </div>
    </nav>
   </header>
   </>
  )
}

export default Header