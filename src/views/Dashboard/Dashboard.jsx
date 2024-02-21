import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'
import Navigation from '../auth/nav/Navigation'
import './dashboard.css'
import notification from '../../assets/notification.png'
import profile from '../../assets/profile.png'
import welcome from '../../assets/welcome.png'
import threeDots from '../../assets/three-dots.png'
import memoji from '../../assets/memoji.png'
import userDashboard from '../../assets/user-dashboard.png'
import performance from '../../assets/performance.png'
import tracker from '../../assets/tracker.png'
import route from '../../assets/route.png'
import activity from '../../assets/activity.png'

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn ] = useAuthStore((state) => [
        state.isLoggedIn, 
        state.user
    ])
  return (
    <div className='container' >
   
      <div className='nav' >
<Navigation  /></div>

<div className='top-nav-two'>
  <div className='welcome' >
  <p>
    Welcome, John Deo 
  </p>
  <img src={welcome} alt="" srcset="" className='welcome-image' />
  </div>
<div className='side-prof' >
  <img src={notification} alt="" srcset="" id='not' className='welcome-image-two'/>
  <img src={profile} alt="" srcset="" className='welcome-image-two' />
</div>
<div className='second' >
<div className='second-top' >
  <div className='second-top-two'>
<p>Top Partners</p>

<img src={threeDots} alt="" srcset="" />
</div>
<div className='but-container' >
  <button>Top Users</button>
  <button>Active Users</button>
  <button>Inactive Users</button>
</div>
<div className='active-user-profile' >
<div>
<img src={userDashboard} alt="" srcset="" className='dash'/></div>

</div>


</div>
<div className='second-top' >
<div className='second-top-two'>
<p  >Performance</p>

<img src={threeDots} alt="" srcset="" />

</div>
<div className='but-container' >
  <button>Daily Sales</button>
  <button>Monthly Sales</button>
  <button>Yearly Sales</button>
</div>
<img src={performance} alt="" srcset="" className='dash' />
</div>
<div className='second-top'>
<div className='second-top-two'>
<p>Target Tracker</p>
<div>
<img src={threeDots} alt="" srcset="" /></div>


</div>
<div className='but-container' >
  <button>Flight Booking</button>
  <button>Hotel Booking</button>
  <button>Custom Booking</button>
</div>
<img src={tracker} alt="" srcset="" id='tracker' className='dash' />
</div>
</div>
<div className='third' >


<div className='second-top'>
<div className='second-top-two'>
<p>Top Routes</p>



</div>

<img src={route} alt="" srcset=""  className='dash-two' />
</div>
<div className='second-top'>
<div className='second-top-two'>
<p>Activity Log</p>



</div>
<p>Today</p>
<img src={activity} alt="" srcset=""  className='dash-two' />
</div>

</div>
</div>

</div  >
  )
}

export default Dashboard
