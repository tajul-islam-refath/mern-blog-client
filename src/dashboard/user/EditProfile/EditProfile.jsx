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
import Button from "../../../components/ui/buttons/Button";

const EditProfile = ({ userProfile, setIsEdit }) => {
  const [profile, setProfile] = useState({ ...userProfile });

  const dispatch = useDispatch();

  const onProfileChange = (event) => {
    const file = event.target.files[0];
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

  console.log(profile);

  return (
    <>
      <AppTitle title="Profile" />
      <section className="editProfile">
        <div className="container">
          {profile && (
            <form className="form" onSubmit={onSubmit}>
              <div className="col-md-8 offset-md-3">
                <div className="form__profile-image">
                  <img
                    src={
                      profile?.profileImage ? profile?.profileImage.url : avatar
                    }
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
                    Bio
                  </label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    className="form__input form-control"
                    placeholder="Write about yourself"
                    value={profile.bio}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        bio: event.target.value,
                      }))
                    }
                  />
                </div>

                <div class="form-group">
                  <label className="form__label" for="title">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form__input form-control"
                    placeholder="Location"
                    value={profile.location}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        location: event.target.value,
                      }))
                    }
                  />
                </div>

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
                        website: event.target.value,
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
                        linkedin: event.target.value,
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
                        github: event.target.value,
                      }))
                    }
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className="form__btn dashboard-hover "
                    text="Update"></Button>
                  <Button
                    type="submit"
                    text="Cancle"
                    onClick={() => setIsEdit(false)}></Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default EditProfile;
