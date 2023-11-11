// import React, { useEffect } from 'react'
// import axios from 'axios';
// import MANPIC from "../assets/pngtree-vector-businessman-icon-png-image_924876.jpg"
// const Dashboard = () => {
//   // let token = localStorage.getItem('userdatatoken');
//   // console.log(token);
//   // const dashboardValid = async () => {
//   //         let token = localStorage.getItem("userdatatoken")
//   //         // console.log(token);
//   //         const res = await fetch("/validuser", {
//   //                 method: "Get",
//   //                 headers: {
//   //                         "Content-Type": "application/json",
//   //                         "Authorization": token
//   //                 }
//   //         });
//   //         const data = await res.json()
//   //         console.log(data);
//   // }
//   // const dashboardValid = async () => {
//   //         try {
//   //                 let token = localStorage.getItem('userdatatoken');
//   //                 console.log(token);
//   //                 const response = await axios.get('/validuser', {
//   //                         headers: {
//   //                                 'Content-Type': 'application/json',
//   //                                 Authorization: token,
//   //                         },
//   //                 });
//   //                 console.log(response.data);
//   //         } catch (error) {
//   //                 console.error('An error occurred while making the request', error);
//   //         }
//   // };
//   const dashboardValid = async () => {
//     try {
//         const response = await axios.get('/validuser', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('userdatatoken')}`,
//           },
//         });
//         console.log(response);
//       }
//      catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     dashboardValid();

//   }, []);

//   return (

//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <img src={MANPIC} style={{ width: "200px", marginTop: 20 }} alt="" />
//       <h1>User Email:daniyal@gmail.com</h1>
//     </div>


//   )
// }
// export default Dashboard;


import React, { useEffect } from 'react';
import axios from 'axios';
import MANPIC from '../assets/pngtree-vector-businessman-icon-png-image_924876.jpg';

const Dashboard = () => {
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
      console.log('Response:', response.data);
    } catch (error) {
      console.error('An error occurred while making the request:', error);
    }
  };

  useEffect(() => {
    dashboardValid();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={MANPIC} style={{ width: '200px', marginTop: 20 }} alt="" />
      <h1>User Email: daniyal@gmail.com</h1>
    </div>
  );
};

export default Dashboard;





//   const dashboardValid = async () => {
//     try {
//       let token = localStorage.getItem('userdatatoken');
//       console.log(token);

//       const response = await axios.get('/validuser', {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: token,
//         },
//       });

//       // You can access the response data using response.data
//       console.log(response.data);
//     } catch (error) {
//       console.error('An error occurred while making the request', error);
//     }
//   };

//   useEffect(() => {
//     dashboardValid();
//   }, []);


