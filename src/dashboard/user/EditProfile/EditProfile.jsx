import "./EditProfile.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaInternetExplorer } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import Button from "../../../components/ui/buttons/Button";
import AppTitle from "../../../components/Common/AppTitle";
import avatar from "../../../assets/img/default.png";

import {
  updateUserProfile,
  clearUserState,
} from "../../../services/userService";

import toastService from "../../../utils/Toast";
import { updateUserProfileAction } from "../../../store/slices/userSlice";

const EditProfile = ({ userProfile, setIsEdit }) => {
  const [profile, setProfile] = useState({
    name: userProfile?.name || "",
    bio: userProfile?.bio || "",
    location: userProfile?.location || "",
    website: userProfile?.website || "",
    linkdin: userProfile?.linkdin || "",
    github: userProfile?.github || "",
    image: "",
  });

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", profile?.name);
    formData.append("bio", profile?.bio);
    formData.append("website", profile?.website);
    formData.append("location", profile?.location);
    formData.append("linkdin", profile?.linkdin);
    formData.append("github", profile?.github);
    formData.append("profileImage", profile?.image);

    let { payload, error } = await updateUserProfile(formData);
    console.log(payload);
    if (payload) {
      toastService.success("Profile update successfully 💖");
      dispatch(updateUserProfileAction(payload.user));
      setIsEdit(false);
    }
    if (error) {
      toastService.error("Profile update fail. Try again!");
    }
  };

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
                      userProfile?.profileImage
                        ? userProfile?.profileImage.url
                        : avatar
                    }
                    alt="Avatar"
                    className="image-thumble"
                  />
                  <input
                    type="file"
                    name="profileImage"
                    id="profileImage"
                    accept="image/*"
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        image: event.target.files[0],
                      }))
                    }
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
                    value={profile?.website}
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
                    value={profile?.linkdin}
                    onChange={(event) =>
                      setProfile((prev) => ({
                        ...prev,
                        linkdin: event.target.value,
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
                    placeholder="Github link"
                    value={profile?.github}
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
                    className="form__btn"
                    text="Update"></Button>
                  <Button
                    type="button"
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
