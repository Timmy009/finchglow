import React, { useState, useEffect } from "react";
import { register } from "../../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../../../store/auth";
import "../Register/register.css";
import background from "../../../assets/background.png";

function Register() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [isLoading, setIsLoading] = useState("");

    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate("/");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await register(
            first_name,
            last_name,
            email,
            password,
            password_confirmation,
            phone
            
        );
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate("/email-verification");
        }
    };

    return (
        <div className="container">
            <div className="firstBackground">
                <img src={background} alt="" className="background-image" />
            </div>
            <div className="second-background-reg" >
                <div className="signup-text">
                    <h1 className="signup-header" >Sign up</h1>
                    <form onSubmit={handleSubmit}  >
                        <label htmlFor="" className="label">First Name</label>
                        <br />
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your first name"
                            name="firstname"
                            id="firstname"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor="" className="label">Last Name</label>
                        <br />
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your last name"
                            name="lastname"
                            id="lastname"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor="" className="label" >Email</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                            id="email"
                            className="input"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor="" className="label">Password</label>
                        <br />
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter your password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor="" className="label">Confirm Password</label>
                        <br />
                        <input
                            type="password"
                            className="input"
                            placeholder="confirm your password"
                            name="password2"
                            id="confirm_password"
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor="" className="label">Phone Number</label>
                        <br />
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your phone  number"
                            name="phone"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <br />
                        <br />
                        <button type="submit" className="button" >Create account</button>
                    </form>
                    <h6 className="existing-user" >Already have an account?  <Link className="login" to={'/login'} >Login</Link></h6>
                </div>
            </div>
        </div>
    );
}

export default Register;
