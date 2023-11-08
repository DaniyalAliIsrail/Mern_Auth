import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./mix.css";

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    const [inpval, setInpVal] = useState({
        email: "",
        password: ""
    })
    console.log(inpval);
    const setVal = (e) => {
        const { name, value } = e.target
        setInpVal(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const loginUser = (e) => {
        e.preventDefault();
        const { email, password } = inpval;
        console.log(inpval);
        if (!email || !password) {
            alert("please fill up the input filled");
        } else if (!email.includes("@")) {
            alert("Enter You valid email")
        } else if (password.length < 8) {
            alert("please must be 8 char")
        }
        else {
            alert("Login sucessfully")
        }
    }
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
                                <input name="email" id="email" value={inpval.email} onChange={setVal} placeholder='Enter Your Email' />
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "Password" : "text"} name="password" id="password" value={inpval.password} onChange={setVal} placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={loginUser}>Login</button>
                        <p>Don't have an Account?<NavLink to="/register">Sign Up</NavLink> </p>
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login