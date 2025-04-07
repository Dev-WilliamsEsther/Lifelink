

import React, { useState } from 'react'
import '../../components/header/header.css'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  const [activetab,setActivetab] = useState(0)
  return (
    <>
    <div className='headerwrapper'>
      <div className='headerwrapperinner1'>
        <img src="public/images/logo.png" alt="" />
      </div>
      <div className='headerwrapperinner2'>
        <ul className='headerul'>
          <li className={`headerli ${activetab === 1 ? "headerliactive" : ""}`}onClick={()=>setActivetab(1)}>Home</li>
          <li className={`headerli ${activetab === 2 ? "headerliactive" : ""}`}onClick={()=>setActivetab(2)}>About Us</li>
          <li className={`headerli ${activetab === 3 ? "headerliactive" : ""}`}onClick={()=>setActivetab(3)}>How it works</li>
        </ul>
      </div>
      <div className='headerwrapperinner3'>
        <button className='headerbtn'>Sign Up</button>
        <button className='headerbtn1'>Log In</button>
      </div>
    </div>
    <div className='MobileHeader'>
    <RxHamburgerMenu size={30} />
    </div>
    </>
  )
}

export default Header