import React, { useState,  useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuthStore} from "../../../store/auth";
import {login} from "../../../utils/auth";
import background from '../../../assets/login-background.png'
import './login.css'
import remember from '../../../assets/remember.png'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    console.log(email);
    console.log(password);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate("/");
        }
    });

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await login(email, password);
        if (error) {
            alert(error);
        } else {
            navigate("/");
            resetForm();
        }
        setIsLoading(false);
    };
    console.log("here");

    return (
        <div className="container">
            <div className="firstBackground">
                <img src={background} alt="" className="background-image" />
            </div>
            <div className="second-background" >
                <div className="signup-text">
                    <h1 className="signup-header" >Welcome back</h1>
                    <p className="details-two" >Welcome back! Please enter your details</p>
                    <form onSubmit={handleLogin}  >
                        <label htmlFor="" className="label">Email</label>
                        <br />
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor="" className="label" >Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                           
                        />
                        <br />
                        <br />
<div className="remember" >
    <img src={remember} alt="" srcset="" />
    <p className="days" >Remember me for 30 days</p>
    <p className="forgot" >Forgot password</p>
</div>
                        <button type="submit" className="button-login" >Login</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;
