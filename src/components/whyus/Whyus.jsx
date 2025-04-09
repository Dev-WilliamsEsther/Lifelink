import React from 'react'
import '../../components/whyus/whyus.css'
const Whyus = () => {
  return (
    <div className='whyuswrapper'>
        <h1>WHY JOIN LIFELINK</h1>
        <div className='whyinnerwrapper'>
            <div className='whyusinner'>
                <h4>INCREASE BLOOD <br /> DONATIONS</h4>
                <p>Get more blood donors by making <br /> your hospital or blood bank <br /> easily discoverable.</p>
            </div>
            <div className='whyusinner'>
                <h4>SIMPLIFIED DONOR <br />TRACKING</h4>
                <p>Use a unique code system to verify and track donations seamlessly.</p>
            </div>
            <div className='whyusinner'>
                <h4>BOOST VISIBILITY & CREDIBILITY</h4>
                <p>Gain recognition as a trusted donation center & attract more donors.</p>
            </div>
        </div>
    </div>
  )
}

export default Whyus