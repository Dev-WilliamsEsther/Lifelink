import axios from "axios";



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
    console.log("Signup successful:", res.data.message);
    setRess(res.data.data.message);
    localStorage.setItem("userData", JSON.stringify(res));
    setTimeout(() => {
      nav("/dashboard");
    }, 1000);
    return res.data.message;
  } catch (err) {
    console.error("Signup error:", err?.response?.data?.message || err);
    setRess(err?.response?.data?.message);
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
    console.log("Login successful:", res?.data?.message);
    console.log(res);
    setRess(res?.data?.message);
    localStorage.setItem("userData", JSON.stringify(res));
    setTimeout(() => {
      nav("/dashboard");
    }, 1000);
    return res.message;
  } catch (err) {
    console.error("Login error:", err?.response?.damessageta || err);
    setRess(
      err?.response?.damessageta || "Something went wrong during registration."
    );
  } finally {
    setIsLoading(false);
  }
};



export const donorSettings = async(Base_Url, token, userData, setLoading, setRess)=>{
    setLoading(true);
    try {
      const res = await axios.put(`${Base_Url}/update-profile`, userData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRess(r );
    } catch (err) {
      console.error("Error updating profile:", err);
      setRess(err);
    } finally {
      setLoading(false);
    }
}




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



export const handleHospitaLogin = async ( hospitalLoginData, Base_Url, setIsLoading, nav, setRess) => {
  setIsLoading(true);
  try {
    const res = await axios.post(
      `${Base_Url}/hospital/login`,
      hospitalLoginData
    );

    const message = res?.data?.data?.message || "Login successful";
    console.log("Login successful:", message);
    console.log("hospital ress", res)
    setRess(message);

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

    setRess(err?.response?.data?.message);
  } finally {
    setIsLoading(false);
  }
};



export const getListOfHospitals = async (
  setIsLoading,
  Base_Url,
  setListOfHospitals
) => {
  setIsLoading(true);
  try {
    const res = await axios.get(`${Base_Url}/hospitals`);
    console.log("List of Hospitals", res)
    setListOfHospitals(res);
  } catch (err) {}
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
    console.log(res);
    localStorage.removeItem("userData");
    nav("/");
  } catch (err) {
    console.log(err);
  }
};
