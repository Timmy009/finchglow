import React, { useState, useEffect } from "react";
import { register } from "../../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../../../store/auth";
import "../EmailVerification/emailVerification.css";
import background from "../../../assets/background.png";

function EmailVerification() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
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
            fullname,
            email,
            mobile,
            password,
            password2
        );
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate("/");
        }
    };

    return (
        <div className="container">
            <div className="firstBackground">
                <img src={background} alt="" className="background-image" />
            </div>
            <div className="second-background" >
                <div className="signup-text">
                    <h1 className="signup-header" >Verify your email</h1>
                    <p className="verify-instruction" >Hi, {}, Please use the link below to verify your email and start booking your tickets</p>
                    <form onSubmit={handleSubmit}  >
                        
                        <button type="submit" className="button" >Verify email</button>
                    </form>
                    <h6 className="existing-user" >Questions? email us at <span className="login" >support@fgt.com</span></h6>
                </div>
            </div>
        </div>
    );
}

export default EmailVerification;
