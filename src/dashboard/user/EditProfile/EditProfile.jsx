import "./EditProfile.scss";
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
} from "../../../services/userService";

const EditProfile = () => {
  const [profile, setProfile] = useState({});
  const { myProfile, isProfileUpdated, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const onProfileChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfile((prev) => ({ ...prev, profilePic: e.target.result }));
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(profile);

    const updatedProfile = {
      name: profile.name,
      title: profile.title,
      profilePic: profile.profilePic,
      bio: profile.bio,
      links: profile.links,
    };
    dispatch(updateUserProfile(updatedProfile));
  };

  useEffect(() => {
    if (myProfile) {
      setProfile(myProfile);
    }
  }, [myProfile]);

  useEffect(() => {
    if (isProfileUpdated) {
      dispatch(clearUserState());
      toast(message);
    }
  }, [isProfileUpdated, message, dispatch]);

  return (
    <>
      <AppTitle title="Profile" />
      <section className="editProfile">
        <div className="container">
          {profile && (
            <form className="form" onSubmit={onSubmit}>
              <div className="col-md-8 offset-md-3">
                <h4 className="form__title">Update Profile</h4>

                <div className="form__profile-pics">
                  <img
                    src={profile.profilePic ? profile.profilePic : avatar}
                    alt="Avatar"
                    className="image-thumble"
                  />
                  <input
                    type="file"
                    name="profilePic"
                    id="profilePicFile"
                    accept="image/*"
                    onChange={onProfileChange}
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
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                  />
                </div>

                <div class="form-group">
                  <label className="form__label" for="title">
                    Enter A Short Title*
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form__input form-control"
                    placeholder="Enter a short title"
                    value={profile.title}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        title: event.target.value,
                      }))
                    }
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
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        bio: event.target.value,
                      }))
                    }
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
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        links: { website: event.target.value },
                      }))
                    }
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
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        links: { linkdin: event.target.value },
                      }))
                    }
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
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        links: { github: event.target.value },
                      }))
                    }
                  />
                </div>

                <button type="submit" className="form__btn dashboard-hover">
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default EditProfile;
