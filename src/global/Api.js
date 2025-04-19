import axios from "axios";
import { toast } from "sonner";



//Donors endPoints===============================>




//Hospital endPoints===============================>

export const handleHospitalSignup = async ( hospitalInput, Base_Url, setIsLoading, setHospitalRess, nav) => {
  setIsLoading(true);
  try {
    const res = await axios.post(`${Base_Url}/hospital/register`, hospitalInput);
    console.log("signup successful:", res?.data?.message);
    console.log(res);
    setHospitalRess(res?.data?.message);
    setTimeout(() => {
      nav("/hospitallogin");
    }, 1000);
    return res.data.message;
  } catch (err) {
    console.error("Login error:", err?.response?.damessageta || err);
    setRess(
      err?.response?.data?.message || "Something went wrong during registration."
    );
  } finally {
    setIsLoading(false);
  }
};



export const handleLogout = async (Base_Url, nav, token) => {
  try {
    const res = await axios.post(
      `${Base_Url}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(res?.data?.message);
    localStorage.removeItem("userData");
    nav("/");
    return
  } catch (err) {
    toast.error(err?.data?.message);
  }
};
