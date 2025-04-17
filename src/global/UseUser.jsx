import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserInformationContext = createContext()
const hospitalInformationContext = createContext()
const profileLoadStateContext = createContext()
const UserInformationContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("userData");
    return JSON.parse(stored);
  });

  const token = user?.data?.token;

  const [userInfo, setUserInfo] = useState(null);
  const [hospitalInfo, setHospitalInfo] = useState(null);
  const [profileLoadState, setProfileLoadState] = useState(false);
  

  const Base_Url = import.meta.env.VITE_BASEURL

  const userInformations = async() =>{
    setProfileLoadState(true)
    try{
      const res = await axios(`${Base_Url}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserInfo(res)
      console.log("dashboard response",res)
      setProfileLoadState(false)
      return
    }catch(err){
      console.log("dashboard", err.response.data)
      setProfileLoadState(false)

  const Base_Url = import.meta.env.VITE_BASEURL;
  console.log(`${Base_Url}/dashboard`);

  const userInformations = async () => {
    try {
      const res = await axios(`${Base_Url}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      setUserInfo(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userInformations();
  }, []);



  const hospitalInformations = async() =>{
    setProfileLoadState(true)
    try{
      const res = await axios(`${Base_Url}/hospital/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setHospitalInfo(res)
      console.log("hospital response",res)
      setProfileLoadState(false)
    }catch(err){
      console.log("hospital", err.response.data)
      setProfileLoadState(false)
    }
  }

  useEffect(()=>{
    hospitalInformations()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserInformationContext.Provider value={{userInfo, setUserInfo}}>
        <hospitalInformationContext.Provider value={{hospitalInfo}}>
          <profileLoadStateContext.Provider value={{profileLoadState}}>
            {children}
          </profileLoadStateContext.Provider>
        </hospitalInformationContext.Provider>
      <UserInformationContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
      </UserInformationContext.Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useUserInfo = () => useContext(UserInformationContext);
export const useHospitalInfo = () => useContext(hospitalInformationContext);
export const useprofileLoadState = () => useContext(profileLoadStateContext);

export default UserProvider;
