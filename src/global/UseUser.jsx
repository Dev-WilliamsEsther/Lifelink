import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserInformationContext = createContext()

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("userData");
    return stored ? JSON.parse(stored) : null;
  });

  


  const token = user?.data?.token;
  console.log("Token:", token);


  const [userInfo, setUserInfo] = useState(null);
  

  const Base_Url = import.meta.env.VITE_BASEURL
  console.log(`${Base_Url}/dashboard`)

  const userInformations = async() =>{
    try{
      const res = await axios(`${Base_Url}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserInfo(res)
      console.log("TTTTTT",res)
    }catch(err){
      console.log("dashboard", err)
    }
  }

  useEffect(()=>{
    userInformations()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserInformationContext.Provider value={{userInfo, setUserInfo}}>
        {children}
      </UserInformationContext.Provider>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useUserInfo = () => useContext(UserInformationContext);

export default UserProvider;
