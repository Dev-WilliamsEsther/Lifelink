import React from 'react'
import '../../Esther/styles/donorterms.css'
import { VscDash } from "react-icons/vsc";


const donorterms = [
    {
        id:1,
        title:"Eligibility",
        terms:"Facility must have a government license and provide accreditation document ",
    },
    {
        id:2,
        title:"Confidentiality",
        terms:"Must keep donor data confidential. ",
    },
    {
        id:3,
        title:"Fee",
        terms:"Obiligated to pay the subscription fee required to access Lifelink features."
    },
    {
        id:4,
        title:"Liability",
        terms:"Facility is responsible for blood testing and retesting.Life link only connects donors;not liable for donors no-shows or misuse.",
    },
    {
        id:5,
        title:"Termination",
        terms:"Lifelink may suspend for violations (illegal sales, fraud etc) ",
    }
]


const Hospitalterms = () => {
    return (
        <div className='donortermswrapper'>
            <div className='donortermsname'>
            <img src="images/logo.png" alt="" className='donortermlogo'/>
            <h1>HOSPITAL/BLOODBANK TERMS&AGREEMENT</h1>
            </div>
            <div className='donortermshold'>
                {donorterms.map((term,index) => (
                    <div key={term.id} className='donorsmaphold'>
                        <h3>{index + 1}{term.title}</h3>
                        <p><VscDash />{term.terms} <br /></p>
                    </div>
                ))}
                <button className='donortermsbtn'>AGREE</button>
            </div>
        </div>
      )
}

export default Hospitalterms