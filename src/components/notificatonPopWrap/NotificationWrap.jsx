import React from 'react'
import './notificationWrap.css'
import 'animate.css';
import { MdOutlineCancel } from "react-icons/md";

const NotificationWrap = (props) => {
  return (
    <div className='animate__animated animate__headShake NotificationWrapWrapper'>
      <span>{props.children}</span>
      <MdOutlineCancel cursor="pointer"/>
    </div>
  )
}

export default NotificationWrap
