import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import "./header.css"
import { LoginContext } from './ContextProvider/Context.jsx';
import { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const history = useNavigate()
  // console.log(logindata);
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const goError=()=>{
    history("*")
  }
  const goDash=()=>{
    history("/dashboard")
  }
  const logoutUser = async () => {
    const token = localStorage.getItem('userdatatoken');
    // console.log(token);
    try {
      const response = await axios.get('https://cute-cyan-hatchling-coat.cyclic.app/logout',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        credentials: true // Modified to 'true' for cross-origin requests
      });
      const data = response;
      // console.log(response.data);
      if (data.status === 200) {
        console.log("User logout");
         localStorage.removeItem('userdatatoken');
        setLoginData(false)
        history("/")
      } else {
       console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  




  return (
    <>
      <header>
        <nav><h1>AUTH</h1>
          <div className="avatar">
            {
              logindata.validUserOne ? <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={handleClick} >{logindata.validUserOne.fname[0].toUpperCase()}</Avatar> : <Avatar sx={{ bgcolor: deepOrange[500] }} onClick={handleClick} />
            }
          </div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {

              logindata.validUserOne ? (<>
                <MenuItem onClick={()=>{goDash(),handleClose()}}>profile</MenuItem>
                <MenuItem onClick={()=> {logoutUser(),handleClose()}}>Logout</MenuItem>
              </>) :(
                 <MenuItem onClick={()=>{goError(),handleClose()}}>profile</MenuItem>
              )
        }

          </Menu>
        </nav>
      </header>
    </>
  )
}

export default Header