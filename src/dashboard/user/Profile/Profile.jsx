import "./Profile.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaInternetExplorer } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { toast } from "react-toastify";

import avatar from "../../../assets/img/default.png";
import AppTitle from "../../../components/Common/AppTitle";

import {
  updateUserProfile,
  clearUserState,
  getProfile,
} from "../../../services/userService";
import { userProfileAction } from "../../../store/slices/userSlice";
import toastService from "../../../utils/Toast";
import Button from "../../../components/ui/buttons/Button";
import EditProfile from "../EditProfile/EditProfile";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    let { payload, error } = await getProfile();
    if (payload) {
      dispatch(userProfileAction(payload.profile));
    }
    if (error) {
      toastService.error("Internal server error!");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <AppTitle title="Profile" />
      {isEdit ? (
        <EditProfile userProfile={profile} setIsEdit={setIsEdit} />
      ) : (
        <section className="profile">
          <div className="container">
            {profile && (
              <div className="profile__card">
                <div className="profile__header">
                  <img
                    src={
                      profile?.profileImage ? profile?.profileImage.url : avatar
                    }
                    alt="Avatar"
                    className="profile__image"
                  />
                  <div className="profile__action">
                    <Button
                      className="profile__editBtn"
                      text="Edit Profile"
                      onClick={() => setIsEdit(true)}
                    />
                  </div>
                </div>

                <div className="profile__details">
                  <h1 className="profile__name">{profile?.name || "N/A"}</h1>
                  <h3 className="profile__bio">{profile?.bio || "N/A"}</h3>
                  <div className="profile__icons">
                    <Link to="" className="profile__icon">
                      <FaInternetExplorer />
                    </Link>
                    <Link to="" className="profile__icon">
                      <AiFillLinkedin />
                    </Link>
                    <Link to="" className="profile__icon">
                      <AiFillGithub />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
