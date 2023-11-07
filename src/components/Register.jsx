import "./mix.css"
import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
  return (
        <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>SignUp</h1>
                <p style={{textAlign:"center"}}>Please Signup and create your Account.</p>
            </div>
            <form>

                <div className="form_input">
                    <label htmlFor="text">Name</label>
                    <div className="two">
                        <input name="text" id="fname" placeholder='Enter Your Name' />
                    </div>
                </div>

                <div className="form_input">
                    <label htmlFor="email">Email</label>
                    <div className="two">
                        <input name="email" id="email" placeholder='Enter Your Email' />
                    </div>
                </div>
               
                <div className="form_input">
                    <label htmlFor="password">Password</label>
                    <div className="two">
                        <input type={!passShow ? "Password" : "text"} name="password" id="password" placeholder='Enter Your password' />
                        <div className="showpass" onClick={() => setPassShow(!passShow)}>
                            {!passShow ? "show" : "Hide"}
                        </div>
                    </div>
                </div>

                <div className="form_input">
                    <label htmlFor="password">Confim Password</label>
                    <div className="two">
                        <input  type={!cpassShow?"password":"text"} name="cpassword" id="cpassword" placeholder='Enter Your Confim Password' />
                        <div className="showpass" onClick={()=> setCPassShow(!cpassShow)} >
                            {!cpassShow ? "show" : "Hide"}
                        </div>
                    </div>
                </div>
                <button className='btn'>SignUP</button>
                <p>Don't have an Account? <NavLink to="/">LogIn</NavLink></p>
            </form>
        </div>
    </section>
  )
}

export default Register