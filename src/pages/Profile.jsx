import React from "react";

import ProfilePage from "../components/profileComp/ProfilePage";
import ChangeLanguage from "../components/profileComp/ChangeLanguage";
import ChangeEmail from "../components/profileComp/ChangeEmail";
import ChangePassword from "../components/profileComp/ChangePassword";
import ChangePhoneNumber from "../components/profileComp/ChangePhoneNumber";
import ChangeGender from "../components/profileComp/ChangeGender";
import ChangeName from "../components/profileComp/ChangeName";
import EditProfilePage from "../components/profileComp/EditProfilePage";
import LogoutPage from "../components/profileComp/LogoutPage";

const Profile = () => {
  return (
    <div className="pl-4 pr-6 mt-5">
      <ProfilePage/>
      <EditProfilePage/>
      <ChangeLanguage />
      <ChangeEmail />
      <ChangePassword />
      <ChangePhoneNumber />
      <ChangeGender/>
      <ChangeName/>
      <LogoutPage/>
    </div>
  );
};

export default Profile;
