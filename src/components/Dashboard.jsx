import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from './ContextProvider/Context.jsx';
import MANPIC from '../assets/pngtree-vector-businessman-icon-png-image_924876.jpg';


const Dashboard = () => {

  //contect ka state banaya ismay curly bracket may hota 
  const { logindata, setLoginData } = useContext(LoginContext);
  console.log(logindata);
  const history = useNavigate()
  const dashboardValid = async () => {
    try {
      const token = localStorage.getItem('userdatatoken');
      if (!token) {
        console.error('Token not found in localStorage.');
        return;
      }
      const response = await axios.get('http://localhost:8000/validuser', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = response.data
      console.log(data.validUserOne);
    
      if(data.status == 400 || !data){
        history("*")
      }else{
        console.log("verify user");
        setLoginData(data.validUserOne) //data bhjdeya login contect ko 
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dashboardValid();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={MANPIC} style={{ width: '200px', marginTop: 20 }} alt="" />
      <h1>email: {logindata ? logindata.fname:""} {logindata ? logindata.email : ""}</h1>
    </div>
  );
};

export default Dashboard;




