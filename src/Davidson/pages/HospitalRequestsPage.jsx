import React, { useEffect, useState } from 'react'
import '../../components/hospitalCard/hospitalCard.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Base_Url = import.meta.env.VITE_BASEURL

const HospitalRequestsPage = () => {
    const [hospitalRequests, setHospitalRequests] = useState([])
    const token = useSelector((state)=> state?.token)

    const getAllHospitalRequest = async()=>{
        try{
            const ress = await axios.get(`${Base_Url}/blood-requests`, {headers : {
                Authorization : `Bearer ${token}`
            }})
            setHospitalRequests(ress?.data?.bloodRequests)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllHospitalRequest()
    }, [])
  return (
    <div className='hospitalRequestPageWrapper'>
        <div className="hospitalCardsWRapper">
            {
                hospitalRequests.map((request, index)=>(
                    <div className='hospitalCardWRapper' key={index}>
                    <img src="/images/hospital image.jpg" alt="Hospital image" />
                    <div className="hospitalTextWRapper">
                      <h3>{request?.hospital?.fullName}</h3>
                    </div>
            
                    <button className="viewDetailButton" onClick={()=> nav(`/dashboard/hospitaldetails/${hospital._id}`)}>
                      View Details <span className="arrow-icon">{">"}</span>
                    </button>
                  </div>
                ))
            }
      </div>
    </div>
  )
}

export default HospitalRequestsPage