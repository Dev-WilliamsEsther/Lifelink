import React from 'react'
import './loadComponent.css'
import FadeLoader from 'react-spinners/CircleLoader'


const LoadComponents = () => {
  return (
    <div className='LoadComponents'>
        <FadeLoader color="black" size={35}/>
    </div>
  )
}

export default LoadComponents