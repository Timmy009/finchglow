import React, {useState} from 'react'
import apiInstance from '../../utils/axios'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = () => {
        try {
            apiInstance.get(`user/password-reset/${email}`).then((res) => {
                alert("An email has been sent to you")
                navigate('/create-new-password')
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
       
    }
  return (
    <div>
      <h1>Forgot Password</h1>
      <input type="email" 
      onChange={(e) => setEmail(e.target.value)}
      placeholder='Enter email'
      value={email}
      />
      <br />
      <br />
      <button onClick={handleSubmit} >Reset Password</button>
    </div>
  )
}

export default ForgotPassword
