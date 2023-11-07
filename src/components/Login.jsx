import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./mix.css";


const Login = () => {
    const [passShow, setPassShow] = useState(false);
    console.log(passShow);
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                    <form>
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
                        <button className='btn'>Login</button>
                        <p>Don't have an Account?<NavLink to="/register"> Sign Up</NavLink> </p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login