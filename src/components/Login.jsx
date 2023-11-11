import React, { useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import "./mix.css";

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    const history =useNavigate()
    const [inpval, setInpVal] = useState({
        email: "",
        password: ""
    })
    // console.log(inpval);
    const setVal = (e) => {
        const { name, value } = e.target //dstructure name and value
        setInpVal(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const loginUser = async (e) => {
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
            try {
                const response = await axios.post("http://localhost:8000/login", {
                    email, password
                })
                if(response.status == 200){
                    console.log(response.data.result.token);
                    // alert("login successfully")
                    localStorage.setItem("userdatatoken",response.data.result.token)
                    history("/dashboard")
                    setInpVal({...inpval, email:"", password:""})
                }
                console.log(response);
            } catch (error) {
                console.log("error email and passoword not valid");
                console.error("Error:", error);
            }
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