import React, {useState} from 'react'
import {useSearchParams, useNavigate} from 'react-router-dom'
import apiInstance from '../../utils/axios'


function CreateNewPassword() {

const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
console.log(password)

const navigate = useNavigate()
const [searchParam] = useSearchParams()
const otp = searchParam.get("otp")
const uidb64 = searchParam.get("uidb64")

console.log(uidb64)
console.log("otp ",otp)
const handleSubmit = async (e) => {
  e.preventDefault()
  if (password !== confirmPassword) {
    alert("Password does not match")
  } else {
const formdata = new FormData()
formdata.append("password", password)
formdata.append("uidb64", uidb64)
formdata.append("otp", otp)


try {
  await apiInstance.post('user/password-change/', formdata).then((res) => {
    console.log(res.data)
    alert("Password changed successfully")
  })
} catch (error) {
  alert(error, "An error occured while trying to change the password")
}
  }
}

  return (
    <div>

        <h1>Confirm Password</h1>
        <form onSubmit={handleSubmit} > 
            <input type="password"
            id='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            />
            <br />
            <br />

            <input type="password"
            id='confirm-password'
            placeholder='confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            
            />

            <button type="submit"> Save new password</button>
        </form>
    </div>
  )
}

export default CreateNewPassword