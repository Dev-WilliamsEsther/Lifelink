import axios from "axios";
import { toast } from "sonner";


//Donors endPoints===============================>

export const handleSignup = async (
  userData,
  Base_Url,
  setIsLoading,
  setRess,
  nav
) => {
  setIsLoading(true);
  try {
    const res = await axios.post(`${Base_Url}/register`, userData);
    toast.success(res.data.message);
    localStorage.setItem("userData", JSON.stringify(res));
    setTimeout(() => {
      nav("/dashboard");
    }, 1000);
    return res.data.message;
  } catch (err) {
    toast.error(err?.response?.data?.message);
  } finally {
    setIsLoading(false);
  }
};



export const handleLogin = async (
  userLoginData,
  Base_Url,
  setIsLoading,
  setRess,
  nav
) => {
  setIsLoading(true);
  try {
    const res = await axios.post(`${Base_Url}/login`, userLoginData);
    toast.success(res?.data?.message);
    localStorage.setItem("userData", JSON.stringify(res));
    setTimeout(() => {
      nav("/");
    }, 1000);
    return res.message;
  } catch (err) {
    console.error("Login error:", err?.response?.damessageta || err);
    toast.error(
      err?.response?.damessageta || "Something went wrong during registration."
    );
  } finally {
    setIsLoading(false);
  }
};



export const donorSettings = async(Base_Url, token, userData, setUserData, setLoading)=>{
    setLoading(true);
    try {
      const res = await axios.put(`${Base_Url}/update-profile`, userData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success(res?.data?.message)
      setUserData("")
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err)
    } finally {
      setLoading(false);
    }
}







//Hospital endPoints===============================>

export const handleHospitalSignup = async ( hospitalInput, Base_Url, setIsLoading, setHospitalRess, nav) => {
  setIsLoading(true);
  try {
    const res = await axios.post(`${Base_Url}/hospital/register`, hospitalInput);
    console.log("signup successful:", res?.data?.message);
    console.log(res);
    setHospitalRess(res?.data?.message);
    localStorage.setItem("userData", JSON.stringify(res));
    setTimeout(() => {
      nav("/kyc");
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



export const handleHospitaLogin = async ( hospitalLoginData, Base_Url, setIsLoading, nav) => {
  setIsLoading(true);
  try {
    const res = await axios.post(
      `${Base_Url}/hospital/login`,
      hospitalLoginData
    );

    const message = res?.data?.data?.message || "Login successful";
    console.log("Login successful:", message);
    console.log("hospital ress", res)

    localStorage.setItem("userData", JSON.stringify(res));

    setTimeout(() => {
      nav("/dashboard");
    }, 1000);

    return message;
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message || "Something went wrong during login.";
    console.error("Login error:", errorMsg);
    console.log(err?.response?.data?.message )

  } finally {
    setIsLoading(false);
  }
};



export const getListOfHospitals = async (setIsLoading, Base_Url, setListOfHospitals, token) => {
  setIsLoading(true);
  try {
    const res = await axios.get(`${Base_Url}/hospitals`, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
    console.log("List of Hospitals", res)
    setListOfHospitals(res?.data?.data);
    setIsLoading(false)
  } catch (err) {
    console.log(err)
    setIsLoading(false)
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
