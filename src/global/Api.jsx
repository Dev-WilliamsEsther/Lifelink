import axios from "axios";

export const handleSignup = async (userData, Base_Url, setIsLoading, setRess, nav) => {
    setIsLoading(true);
    try {
        const res = await axios.post(`${Base_Url}/register`, userData);
        console.log("Signup successful:", res.data.message);
        setRess(res.data.message) 
        localStorage.setItem("userData", JSON.stringify(res));
        setTimeout(() => {
            nav('/login')
        }, 3000);
        return res.data.message;
    } catch (err) {
        console.error("Signup error:", err?.response?.data?.message || err);
        setRess(err?.response?.data?.message)
    } finally {
        setIsLoading(false);
    }
};


export const handleLogin = async (userLoginData, Base_Url, setIsLoading, setRess, nav) => {
    setIsLoading(true);
    try {
        const res = await axios.post(`${Base_Url}/login`, userLoginData);
        console.log("Login successful:", res?.data?.message);
        console.log(res)
        setRess(res?.data?.message)
        localStorage.setItem("userData", JSON.stringify(res));
        setTimeout(() => {
            nav('/dashboard')
        }, 3000);
        return res.message;
    } catch (err) {
        console.error("Login error:", err?.response?.damessageta || err);
        setRess(err?.response?.damessageta || "Something went wrong during registration.")
    } finally {
        setIsLoading(false);
    }
};

export const handleHospitalSignup = async (hospitalInput, Base_Url, setIsLoading, setRess, nav) => {
    setIsLoading(true);
    try {
        const res = await axios.post(`${Base_Url}/hospital/register`, hospitalInput);
        console.log("Login successful:", res?.data?.message);
        console.log(res)
        setRess(res?.data?.message)
        localStorage.setItem("userData", JSON.stringify(res));
        setTimeout(() => {
            nav("/kyc")
        }, 3000);
        return res.data.message;
    } catch (err) {
        console.error("Login error:", err?.response?.damessageta || err);
        setRess(err?.response?.message || "Something went wrong during registration.")
    } finally {
        setIsLoading(false);
    }
};



export const getListOfHospitals = async(setIsLoading, Base_Url, setListOfHospitals) =>{
    setIsLoading(true)
    try{
        const res = await axios.get(`${Base_Url}/hospitals`)
        setListOfHospitals(res)
    }catch(err){
        
    }
}

export const handleLogout = async(Base_Url, setRess, nav, token)=>{
    try{
        const res = await axios.post(`${Base_Url}/logout`, {},  {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res)
        setRess(res?.data?.message)
        localStorage.removeItem("userData");
        nav("/")
    }catch(err){
        console.log(err)
    }
}