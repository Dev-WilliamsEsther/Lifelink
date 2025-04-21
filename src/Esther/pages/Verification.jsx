import React, { useEffect, useState } from 'react';
import '../../Esther/styles/verification.css';
import { Modal } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
const Base_Url = import.meta.env.VITE_BASEURL

const mockData = [
  {
    id: 1,
    name: "Clinix Hospital",
    email: "clinix@example.com",
    licenseNumber: "LIC123456",
    accreditedCertificate: "/images/accredited_cert.jpg",
    utilityBill: "/images/utility_bill.jpg",
    status: "pending",
    submittedAt: "2025-04-20",
    image: "/images/hospital_image.jpg"
  },
];

const Verification = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const token = useSelector((state) => state?.token);
  console.log(token)

  const openModal = (hospital) => {
    setSelectedHospital(hospital);
    setModalOpen(true);
  };

  const getHospitalsKYC = async () => {
    try {
      const ress = await axios.get(`${Base_Url}/admin/allKyc`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(ress);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getHospitalsKYC();
  }, []);

  const filteredData = filterStatus === "all" ? mockData : mockData.filter(h => h.status === filterStatus);

  return (
    <div className='verificationwrap'>
      <div className='filter-buttons' style={{ marginBottom: '20px' }}>
        {['all', 'pending', 'approved', 'rejected'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              backgroundColor: filterStatus === status ? '#c0392b' : '#f0f0f0',
              color: filterStatus === status ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {filteredData.map((hospital) => (
        <div className='verifywrapinner' key={hospital.id}>
          <h1>{hospital.name}</h1>
          <button className='adminviewbuttton' onClick={() => openModal(hospital)}>VIEW DETAILS</button>
          <button className='adminverifyotherbtn'>REVIEW</button>
          <button className='adminverifyotherbtn'>APPROVED</button>
          <button className='adminverifyotherbtn'>REJECT</button>
        </div>
      ))}

      <Modal open={modalOpen} onCancel={() => setModalOpen(false)} footer={null}>
        {selectedHospital && (
          <div className='modalContent'>
            <img src={selectedHospital.image} alt='Hospital' style={{ width: '100%', marginBottom: '10px' }} />
            <p><strong>Name:</strong> {selectedHospital.name}</p>
            <p><strong>Email:</strong> {selectedHospital.email}</p>
            <p><strong>License Number:</strong> {selectedHospital.licenseNumber}</p>
            <p><strong>Status:</strong> {selectedHospital.status}</p>
            <p><strong>Submitted At:</strong> {new Date(selectedHospital.submittedAt).toLocaleDateString()}</p>
            <p><strong>Accredited Certificate:</strong><br /><img src={selectedHospital.accreditedCertificate} alt='Certificate' style={{ width: '100%' }} /></p>
            <p><strong>Utility Bill:</strong><br /><img src={selectedHospital.utilityBill} alt='Utility Bill' style={{ width: '100%' }} /></p>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <button className='adminverifyotherbtn'>APPROVE</button>
              <button className='adminverifyotherbtn'>REJECT</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Verification;
