import axios from "axios";
import { toast } from "sonner";



//Donors endPoints===============================>




//Hospital endPoints===============================>





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
