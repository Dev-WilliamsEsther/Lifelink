import React from 'react'
import '../../Esther/styles/kyc.css'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';

const KYC = () => {
  const nav = useNavigate();
  return (
    <div className='kycwrapper'>
      <div className='kycmobilewrap'>
        <h1>KYC</h1>
      </div>
      <div className='kycinfowrap'>
        <div className='kyclogohold'>
        <HiOutlineArrowCircleLeft size={50} onClick={()=> nav(-1)} />
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='kyclogo'/>
          </Link>
        </div>
        <div className='kycinfo1'>
          <h1>KYC</h1>
          <div className="upload-section">
          <label className="upload-label">UPLOAD FACILITY IMJ</label>
          <div className="upload-box" onClick={() => document.getElementById('file1').click()}>
            <input type="file" id="file1" className="hidden-input" />
            <div className="upload-content">
              <p>Upload IMJ</p>
              <span>Drag and drop files</span>
            </div>
          </div>
        </div>

        <div className="upload-section">
          <label className="upload-label">ACCREDITED CERTIFICATE</label>
          <div className="upload-box" onClick={() => document.getElementById('file2').click()}>
            <input type="file" id="file2" className="hidden-input" />
            <div className="upload-content">
              <p>Upload IMJ</p>
              <span>Drag and drop files</span>
            </div>
          </div>
        </div>

          <div className='kycinputwrapper'>
            <p>LICENSE NUMBER</p>
            <input type="text" className='kycinput' />
          </div>

          <div className="upload-section">
          <label className="upload-label">UPLOAD UTILITY BILL</label>
          <div className="upload-box" onClick={() => document.getElementById('file3').click()}>
            <input type="file" id="file3" className="hidden-input" />
            <div className="upload-content">
              <p>Upload IMJ</p>
              <span>Drag and drop files</span>
            </div>
          </div>
        </div>
        <button className='kycbtn' onClick={()=>nav("/dashboard")}>SUBMIT</button>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className='kycsignimage'/>
    </div>
  )
}

export default KYC