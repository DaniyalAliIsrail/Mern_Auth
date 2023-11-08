
import "./mix.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'; // Import Axios

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const setVal = (e) => {
        const { name, value } = e.target;
        setInpval((prevInputValues) => ({
            ...prevInputValues,
            [name]: value
        }));
    };

    const addUserdata = async (e) => {
        e.preventDefault();
        const { fname, email, password, cpassword } = inpval;

        if (!fname || !email || !password || !cpassword) {
            alert("Please fill up all input fields.");
        } else if (!email.includes("@")) {
            alert("Enter a valid email address.");
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters.");
        } else if (cpassword.length < 8) {
            alert("Confirm password must be at least 8 characters.");
        } else if (password !== cpassword) {
            alert("Passwords do not match.");
        } else {
            try {
                const response = await axios.post("http://localhost:8000/register", {
                    fname,
                    email,
                    password,
                    cpassword
                });
                console.log(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };
    return (
        <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>SignUp</h1>
                    <p style={{ textAlign: "center" }}>Please Signup and create your Account.</p>
                </div>
                <form>

                    <div className="form_input">
                        <label htmlFor="text">Name</label>
                        <div className="two">
                            <input name="fname" id="fname" value={inpval.fname} onChange={setVal} placeholder='Enter Your Name' />
                        </div>
                    </div>

                    <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <div className="two">
                            <input name="email" id="email" value={inpval.email} onChange={setVal} placeholder='Enter Your Email' />
                        </div>
                    </div>

                    <div className="form_input">
                        <label htmlFor="password">Password</label>
                        <div className="two">
                            <input type={!passShow ? "Password" : "text"} name="password" value={inpval.password} id="password" onChange={setVal} placeholder='Enter Your password' />
                            <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                {!passShow ? "show" : "Hide"}
                            </div>
                        </div>
                    </div>

                    <div className="form_input">
                        <label htmlFor="password">Confim Password</label>
                        <div className="two">
                            <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} name="cpassword" id="cpassword" onChange={setVal} placeholder='Enter Your Confim Password' />
                            <div className="showpass" onClick={() => setCPassShow(!cpassShow)} >
                                {!cpassShow ? "show" : "Hide"}
                            </div>
                        </div>
                    </div>
                    <button className='btn' onClick={addUserdata}>SignUP</button>
                    <p>Don't have an Account? <NavLink to="/">LogIn</NavLink></p>
                </form>
            </div>
        </section>
    )
}

export default Register