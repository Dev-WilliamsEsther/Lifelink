import axios from "axios";
import { toast } from "sonner";
import { logOut } from "./Slice";



//Donors endPoints===============================>




//Hospital endPoints===============================>





export const handleLogout = async (Base_Url, nav, token, dispatch, setLoadLogOut) => {
  try {
    setLoadLogOut(true)
    const res = await axios.post(
      `${Base_Url}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(logOut())
    toast.success(res?.data?.message);
    nav("/");
    setLoadLogOut(false)
    return
  } catch (err) {
    toast.error(err?.data?.message);
    setLoadLogOut(false)
  }
};
