import React, { useState } from 'react'
import './historyPage.css'
import { SlCalender } from "react-icons/sl";
import { Modal } from 'antd';

const HistoryPage = () => {
  const [viewDetailsPopUp, setViewDetailsPopUp] = useState(false)

  return (
    <>
    <div className='HistoryPageWrapper'>
      <h1>Donation History</h1>

      <div className="DonationsHistoryCardsHeading">
        <div className="DonationsHistoryCardsInnerWrapper">
          <h1>Facilitity Name</h1>
          <h1>VIEW DETAILS</h1>
          <h1><SlCalender />DATE</h1>
          <h1>LOCATION</h1>
          <h1>STATUS</h1>
        </div>
      </div>


      <div className="DonationsHistoryCardsWrapper">

        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3>VIEW DETAILS</h3>
            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>
        <div className="DonationsHistoryCards">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h3>Kings Hospital</h3>
            <h3 onClick={()=> setViewDetailsPopUp(true)} style={{color:"blue", cursor: "pointer"}}>VIEW DETAILS</h3>

            <h3><SlCalender />MAy 23, 2025</h3>
            <h3>Ojo road, Lagos</h3>
            <h3>Pending</h3>
          </div>
        </div>


      </div>
    </div>

    <Modal
    open={viewDetailsPopUp}
    onCancel={()=> setViewDetailsPopUp(false)}
    footer={null}
    >
      <div className="viewDetailsPopUpWrapper">
        <h1>Details</h1>

        <p>Name : <b>King Hospital</b></p>
        <p>Location : <b>Oja orile, Lagos</b></p>
        <p>Date : <b>March 15, 2025</b></p>
        <p>Status : <b>Pending</b></p>

        <img src="/images/hospital image.jpg" alt="Hospital image" />

        <button>Cancel Request</button>
      </div>
    </Modal>
    </>
  )
}

export default HistoryPage