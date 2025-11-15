import React from 'react'
import '../../components/impacts/impacts.css'
import { motion } from 'framer-motion'


const Impacts = () => {
  const features = [
    {
      title: "Verified & Trusted Network",
      description: (
        <>
          "We partner only with verified <br /> hospitals and blood banks, <br /> ensuring every connection is <br /> safe and reliable."
        </>)
    },
    {
      title: "Impact-Driven Mission",
      description: (
        <>
          "Every donation made through <br /> ALIVE directly contributes to<br /> saving lives and strengthening<br /> our communities."
        </>)
    },
    {
      title: "Incentives for Donors",
      description: (
        <>
          "Donors receive health benefits<br /> and small incentives as a<br /> token of appreciation for their<br /> generosity."
        </>
      )
    },
    {
      title: "Instant Notifications",
      description: (
        <>
          "Donors receive timely alerts<br />  whenever a hospital<br />  requests blood."
        </>
      )
    },
    {
      title: "Seamless Donor Experience",
      description: (
        <>
          "From quick registration to<br />  smooth donation coordination,<br />  we make the process simple<br />  and stress-free."
        </>
      )
    }
  ]
  return (
    <>
      <div className='alive-title1'>
        <spam>WHAT MAKES ALIVE DIFFERENT</spam>
      </div>
      <section className='alife-different-section'>

        <div className='alive-different-container'>

          <div className='alive-different-grid'>
            <div className='alive-feature'>
              <div className='icon'>
                <img src="/images/icon.png" alt="Verified icon" />
              </div>
              <h3>{features[0].title}</h3>
              <p>{features[0].description}</p>
            </div>
            <div className='alive-center-image'

            >
                <img src="/images/impact.png" alt="ALIVE hospital care" />
            </div>
            <div className='alive-feature'>
              <div className='icon'>
                <img src="/images/icon.png" alt="" />
              </div>
              <h3>{features[1].title}</h3>
              <p>{features[1].description}</p>
            </div>
          </div>
          <div className='alive-bottom-features'>
            {features.slice(2).map((feature, index) => (
              <div className='alive-feature' key={index}>
                <div className='icon'>
                  <img src="/images/icon.png" alt="" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Impacts