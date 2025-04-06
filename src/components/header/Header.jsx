import React, { useState } from 'react'


const Header = () => {
  const [activenav,setActivenav] = useState(0)

  return (
    <div className='w-full h-[90px] bg-white flex justify-around items-center gap-20 fixed'>
      <div className='w-30 h-20  flex justify-center text-2xl'>
        <img src="public/images/logo.png" alt="" />
      </div>
      <div className='w-[35%] h-20  flex items-center'>
        <ul className=' w-full h-14 flex justify-around items-center '>
          <li className={`font-Poppins w-[30%] h-[80%] flex items-center justify-center ${activenav === 1 ? "w-[30%] h-[80%] rounded-[10px] border-2 border-[#2C3E50] flex items-center justify-center" : ""}`} onClick={()=>setActivenav(1)}>Home</li>
          <li className={`font-Poppins w-[30%] h-[80%] flex items-center justify-center ${activenav === 2 ? "w-[30%] h-[80%] rounded-[10px] border-2 border-[#2C3E50] flex items-center justify-center" : ""}`} onClick={()=>setActivenav(2)}>About Us</li>
          <li className={`font-Poppins w-[30%] h-[80%] flex items-center justify-center ${activenav === 3 ? "w-[30%] h-[80%] rounded-[10px] border-2 border-[#2C3E50] flex items-center justify-center" : ""}`} onClick={()=>setActivenav(3)}>How it works</li>
        </ul>
      </div>
      <div class=" w-[18%] h-[46%] flex justify-center items-center bg-[whitesmoke] rounded-[5px] rounded-tr-tl-br-bl-[5px]" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
        <button class=" w-[40%] h-[95%] text-sm font-medium text-gray-700">
          Sign In
        </button>

        <button class=" w-[50%] h-[95%] text-sm font-medium text-white rounded-[5px] bg-[#D32F2F] relative" style={{clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"}}>
          Log In
        </button>
      </div>
    </div>
  )
}

export default Header