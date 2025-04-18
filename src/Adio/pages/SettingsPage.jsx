import React, { useRef, useState } from "react";
import "./settingsPage.css";
import { toast } from "sonner";
import FadeLoader from "react-spinners/CircleLoader";
import axios from "axios";
import { FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";

const Base_Url = import.meta.env.VITE_BASEURL;

const SettingsPage = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    gender: "",
    location: "",
    phoneNumber: "",
    email: "",
    age: "",
    bloodType: "",
  });

  const [newPassword, setNewPasswords] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log(newPassword);

  const [passwordLoading, setPasswordLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = useSelector((state) => state?.loggedInUser?.token);

  const handleUpdateProfile = async () => {
    if (
      !userData.fullName &&
      !userData.gender &&
      !userData.location &&
      !userData.phoneNumber &&
      !userData.email &&
      !userData.age &&
      !userData.bloodType
    ) {
      toast.error("Please input fields");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.put(`${Base_Url}/update-profile`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(res?.data?.message);
      setUserData("");
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New Password do not match");
      return;
    }
    if (!newPassword || !confirmPassword) {
      toast.error("Please input a new Password");
      return;
    }
    setPasswordLoading(true);
    try {
      const res = await axios.post(`${Base_Url}/resetPassword/${token}`, {
        newPassword,
      });
      toast.success(res?.data?.message);
      console.log(res);
      setPasswordLoading(false);
      return;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err);
      setPasswordLoading(false);
    }
  };

  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [resetInput, setResetInput] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfilePicture(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setProfilePicture(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("profilePics", profilePicture);

      await axios.put(`${Base_Url}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setResetInput((prev) => !prev);
      setLoading(false);
      toast.success("Successful");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        console.error("An error occurred while submitting the form:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SettingsPageWrapper">
      <h1>Profile Settings</h1>

      <div className="SettingssideWrapper">
        <div className="profilePageProflePicWrapper">
          <label htmlFor="imageUpload">
            <div className="settingsProfilePicture">
              {!imagePreview && <FaCamera className="cam" />}
              {imagePreview && <img src={imagePreview} alt="User Profile" />}
              <input
                key={resetInput ? "reset" : "normal"}
                ref={fileInputRef}
                type="file"
                id="imageUpload"
                accept="image/*"
                name="addImage"
                className="UploadFileInput"
                onChange={handleImageChange}
              />
            </div>
          </label>
          <button onClick={handleSubmit}> Add Photo</button>
          <button>Delete</button>
        </div>

        <div className="settingsInputsWrapper">
          <label>Full Name</label>
          <input
            type="text"
            className="settingInputs"
            placeholder="Full Name"
            value={userData.fullName}
            onChange={(e) =>
              setUserData({ ...userData, fullName: e.target.value })
            }
          />
          <label>Gender</label>
          <select
            className="settingInputs"
            value={userData.gender}
            onChange={(e) =>
              setUserData({ ...userData, gender: e.target.value })
            }
          >
            <option value="">--Male/Female--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            className="settingInputs"
            placeholder="Location"
            value={userData.location}
            onChange={(e) =>
              setUserData({ ...userData, location: e.target.value })
            }
          />
          <label>Phone Number</label>
          <input
            type="text"
            className="settingInputs"
            placeholder="+234***********"
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
          />
          <label>Email</label>
          <input
            type="text"
            className="settingInputs"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <label>Age</label>
          <input
            type="text"
            className="settingInputs"
            placeholder="Age"
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          />
          <label>Blood Type</label>
          <select
            className="settingInputs"
            value={userData.bloodType}
            onChange={(e) =>
              setUserData({ ...userData, bloodType: e.target.value })
            }
          >
            <option value="">-- Select Blood Type --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <button
            className="editProfileButton"
            onClick={handleUpdateProfile}
            disabled={loading}
          >
            {loading ? <FadeLoader color="white" size={25} /> : "Edit Profile"}
          </button>
        </div>
      </div>

      <div className="SettingsPasswordsideWrapper">
        <div className="settingsInputsWrapper">
          <label>New Password</label>
          <input
            type="password"
            className="settingInputs"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPasswords(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            className="settingInputs"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="editProfileButton" onClick={handleResetPassword}>
            {passwordLoading ? (
              <FadeLoader color="white" size={25} />
            ) : (
              "Change Password"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
