import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const Base_Url = import.meta.env.VITE_BASEURL;


const UserContext = createContext();
const UserInformationContext = createContext();
const HospitalInformationContext = createContext();
const ProfileLoadStateContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("userData");
    return JSON.parse(stored);
  });

  const token = user?.data?.token;
  const [userInfo, setUserInfo] = useState(null);
  const [hospitalInfo, setHospitalInfo] = useState(null);
  const [profileLoadState, setProfileLoadState] = useState(false);



  const userInformations = async () => {
    setProfileLoadState(true);
    try {
      const res = await axios.get(`${Base_Url}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(res?.data?.message);
    } catch (err) {
    } finally {
      setProfileLoadState(false);
    }
  };


  const hospitalInformations = async () => {
    setProfileLoadState(true);
    try {
      const res = await axios.get(`${Base_Url}/hospital/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHospitalInfo(res);
    } catch (err) {
      console.log("hospital", err);
    } finally {
      setProfileLoadState(false);
    }
  };

  
  useEffect(() => {
    if (user?.data?.data?.role === "donor") {
      userInformations();
    } else if (user?.data?.data?.role === "hospital") {
      hospitalInformations();
    }
  }, []);


  useEffect(() => {
    const handleOnline = () => toast.success("You are back online");
    const handleOffline = () => toast.error("You are offline");

    if (navigator.onLine) {
      toast.success("You are online");
    } else {
      toast.error("You are offline");
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserInformationContext.Provider value={{ userInfo, setUserInfo }}>
        <HospitalInformationContext.Provider value={{ hospitalInfo }}>
          <ProfileLoadStateContext.Provider value={{ profileLoadState }}>
            {children}
          </ProfileLoadStateContext.Provider>
        </HospitalInformationContext.Provider>
      </UserInformationContext.Provider>
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);
export const useUserInfo = () => useContext(UserInformationContext);
export const useHospitalInfo = () => useContext(HospitalInformationContext);
export const useProfileLoadState = () => useContext(ProfileLoadStateContext);

export default UserProvider;