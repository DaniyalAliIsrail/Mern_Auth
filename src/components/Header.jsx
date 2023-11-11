import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepPurple} from '@mui/material/colors';
import "./header.css"
import { LoginContext } from './ContextProvider/Context.jsx';
import { useContext } from 'react';

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  // console.log(logindata.fname[0]);
  return (
   <>
   <header>
    <nav><h1>AUTH</h1>
    <div className="avatar">
      {
        logindata.fname ? <Avatar sx={{ bgcolor: deepPurple[500] }}>{logindata.fname[0].toUpperCase()}</Avatar>:<Avatar sx={{ bgcolor: deepPurple[500] }}>h</Avatar>
      }
      
    </div>
    </nav>
   </header>
   </>
  )
}

export default Header