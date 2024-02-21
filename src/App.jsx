import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/auth/Login/Login";
import Register from "./views/auth/Register/Register";
import Logout from "./views/auth/Logout";
import Dashboard from "./views/Dashboard/Dashboard";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreateNewPassword from "./views/auth/CreateNewPassword";
import EmailVerification from "./views/auth/EmailVerification/EmailVerification";
import ResetPassword from "./views/auth/ResetPassword/ResetPassword";
import HotelBooking from "./views/HotelBooking/HotelBooking";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/create-new-password" element={<CreateNewPassword />} />
                <Route path="/email-verification" element={<EmailVerification />} />
                <Route path="/reset-verification" element={<ResetPassword />} />
                <Route path="/hotel-booking" element={<HotelBooking />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
