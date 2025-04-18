import React, { useState } from 'react'
import '../../Esther/styles/reset.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import FadeLoader from 'react-spinners/CircleLoader';
import { toast } from 'sonner'

const Base_Url = import.meta.env.VITE_BASEURL

const Resetpassword = () => {
  const [newPassword, setNewPassword] = useState("")
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("")
  const [loading, setLoading] = useState(false)


  const {token} = useParams()

  const handleResetPassword = async() =>{
    setLoading(true)
    if(newPassword !== ConfirmNewPassword){
      toast.error("New Password do not match!")
      return
    } if(!newPassword || !ConfirmNewPassword){
      toast.error("Input a new password!")
      return
    }
    try{
      const ress = await axios.post(`${Base_Url}/resetPassword/${token}`, newPassword)
      console.log(ress)
      setLoading(false)
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <div className='resetwrapper'>
      <div className='resetmobilewrap'>
        <h2>RESET PASSWORD</h2>
      </div>
      <div className='resetinfowrap'>
        <div className='resetlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='resetlogo'/>
          </Link>
        </div>
        <div className='resetinfo1'>
          <h2>RESET PASSWORD</h2>
          <div className='resetinputwrapper'>
            <p>PASSWORD</p>
            <input type="password" className='resetinput'
            placeholder='Password'
            value={newPassword}
            onChange={(e)=> setNewPassword(e.target.value)}
            />
          </div>
          <div className='resetinputwrapper'>
            <p>CONFIRM PASSWORD</p>
            <input type="password" className='resetinput'
             placeholder='Password'
             value={ConfirmNewPassword}
             onChange={(e)=> setConfirmNewPassword(e.target.value)}
            />
          </div>
          <button className='resetbtn' onClick={handleResetPassword}>{setLoading? "RESET" : <FadeLoader color='white' size={25}/> }</button>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className='resetimage'/>
    </div>
  )
}

export default Resetpassword