import React, { useState } from "react";
import "../../Esther/styles/hospitalslog.css";
import { Link, useNavigate } from "react-router-dom";
import { handleHospitaLogin } from "../../global/Api";
import FadeLoader from "react-spinners/CircleLoader";
import NotificationWrap from "../../components/notificatonPopWrap/NotificationWrap";

const Base_Url = import.meta.env.VITE_BASEURL;

const Hospitallogin = () => {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [ress, setRess] = useState("");
  const [hospitalLoginData, setHospitalLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hospitalLoginData.email || !hospitalLoginData.Password) {
      setRess("please fill all field");
      return;
    }
    handleHospitaLogin(hospitalLoginData, Base_Url, setIsLoading, nav, setRess);
  };
  return (
    <div className="hosloginwrapper">
      <NotificationWrap>{ress}</NotificationWrap>
      <div className="hoslogmobilewrap">
        <h2>LOG IN</h2>
      </div>
      <div className="hoslogininfowrap">
        <div className="hosloginlogohold">
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className="hosloginlogo" />
          </Link>
        </div>
        <div className="hoslogininfo1">
          <h2>LOG IN</h2>
          <div className="hoslogininputwrapper">
            <p>EMAIL ADDRESS</p>
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="hoslogininput"
              value={hospitalLoginData.email}
              onChange={(e) =>
                setHospitalLoginData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="hoslogininputwrapper">
            <p>ENTER PASSWORD</p>
            <input
              type="password"
              placeholder="PASSWORD"
              className="hoslogininput"
              value={hospitalLoginData.password}
              onChange={(e) =>
                setHospitalLoginData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <button className="hosloginbtn" onClick={handleSubmit}>
            {isLoading ? <FadeLoader color="white" size={25} /> : "LOG-IN"}
          </button>
          <div className="hosloginforgotwrap">
            <p onClick={() => nav("/hospitalsignup")}>
              DON'T HAVE AN ACCOUNT?SIGNUP
            </p>
            <p>FORGOT PASSWORD</p>
          </div>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className="hospiloginimage" />
    </div>
  );
};

export default Hospitallogin;
