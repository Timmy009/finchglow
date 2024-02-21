import React from "react";
import logo from "../../../assets/logo.png";
import navIcon from "../../../assets/nav-icon.png";
import "./navigation.css";
import dashboard from "../../../assets/dashboard.png";
import userManagement from "../../../assets/user-management.png";
import customManagement from "../../../assets/custom-management.png";
import bookingHistory from "../../../assets/booking-history.png";
import transaction from "../../../assets/transaction.png";
import dispute from "../../../assets/dispute.png";
import configuration from "../../../assets/configuration.png";
import cms from "../../../assets/cms.png";
import activityLog from "../../../assets/activity-log.png";
import support from "../../../assets/support.png";
import chevronDown from "../../../assets/chevron-down.png";

function Navigation() {
    return (
        <div className="nav-container">
            <div className="top-nav" >
                <img src={logo} alt="logo" srcset="" className="logo"  />
                <img src={navIcon} alt="nav-icon" srcset="" className="logo-two" />
            </div>
            <div className="sub-navigation"  id="dashboard" >
                <img className="nav-image" src={dashboard} alt="" />
                <p className="nav-text" >Dashboard</p>
            </div>

            <div className="sub-navigation">
                <img className="nav-image" src={userManagement} alt="" />
                <p className="nav-text">User Management</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation">
                <img className="nav-image" src={customManagement} alt="" />
                <p className="nav-text">Custom Applications</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation">
                <img className="nav-image" src={bookingHistory} alt="" />
                <p className="nav-text">Booking History</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation">
                <img className="nav-image" src={transaction} alt="" />
                <p className="nav-text">Transaction</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation">
                <img className="nav-image" src={dispute} alt="" />
                <p className="nav-text">Dispute</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation">
                <img className="nav-image" src={configuration} alt="" />
                <p className="nav-text">Configuration</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation">
                <img className="nav-image" src={cms} alt="" />
                <p className="nav-text">CMS</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation">
                <img className="nav-image" src={activityLog} alt="" />
                <p className="nav-text">Activity Log</p>
                <img className="dropdown-icon" src={chevronDown} alt="" srcset="" />
            </div>
            <div className="sub-navigation" id="support">
                <img className="nav-image" src={support} alt="" />
                <p className="nav-text"  >Support</p>
            </div>
        </div>
    );
}

export default Navigation;
