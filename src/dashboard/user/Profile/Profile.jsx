import "./Profile.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

const Profile = () => {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    let { payload, error } = await getProfile();
    console.log(payload);
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
      <section className="Profile">
        <div className="container">
          {profile && (
            <form className="form">
              <div className="col-md-8 offset-md-3">
                <div className="form__profile-pics">
                  <img
                    src={
                      profile?.profileImage ? profile?.profileImage.url : avatar
                    }
                    alt="Avatar"
                    className="image-thumble"
                  />
                </div>

                <div class="form-group">
                  <label className="form__label" for="name">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form__input form-control"
                    placeholder="Enter your name"
                    value={profile.name}
                  />
                </div>

                <div class="form-group">
                  <label className="form__label" for="bio">
                    Enter A Short Bio*
                  </label>
                  <textarea
                    class="form-control form__input"
                    id="bio"
                    rows="5"
                    name="bio"
                    value={profile.bio}></textarea>
                </div>
                <label className="form__label">Social Links</label>
                <div class="form-group icon-box">
                  <div className="form__icon">
                    <FaInternetExplorer />
                  </div>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="form__input form-control"
                    placeholder="Website link"
                    value={profile.links?.website}
                  />
                </div>
                <div class="form-group icon-box">
                  <div className="form__icon">
                    <AiFillLinkedin />
                  </div>
                  <input
                    type="text"
                    id="linkdin"
                    name="linkdin"
                    className="form__input form-control"
                    placeholder="linkdin link"
                    value={profile.links?.linkdin}
                  />
                </div>

                <div class="form-group icon-box mb-5">
                  <div className="form__icon">
                    <AiFillGithub />
                  </div>
                  <input
                    type="text"
                    id="github"
                    name="github"
                    className="form__input form-control"
                    placeholder="Website link"
                    value={profile.links?.github}
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
