import "./createProfile.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { FaInternetExplorer } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import avatar from "../../assets/img/default.png";
import AppTitle from "../../components/Common/AppTitle";

import Loader from "../../components/Loader/Loader";

import { createUserProfile, clearUserState } from "../../services/userService";
import { userProfileValidation } from "../../Validation/userProfile";

const CreateProfile = () => {
  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [linkdin, setLinkdin] = useState("");
  const [github, setGithub] = useState("");

  const { message, isProfileCreated, isLoading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const body = {
      name,
      title,
      bio,
      profilePic: profileImage,
      links: {
        website,
        linkdin,
        github,
      },
    };

    const { isError, error } = userProfileValidation(body);

    if (isError) {
      console.log(error);
      console.log(bio);
      setErrors(error);
    } else {
      setErrors({});

      dispatch(createUserProfile(body));
    }
  };

  useEffect(() => {
    if (isProfileCreated) {
      toast(message);
      navigate("/home");
    }

    dispatch(clearUserState());
  }, [isProfileCreated, dispatch, message]);
  return (
    <>
      <AppTitle title="MindShare-Create Profile" />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="createProfile">
          <div className="container">
            <form className="form" onSubmit={onSubmit}>
              <div className="col-md-8 offset-md-3">
                <h4 className="form__title">Create Profile</h4>

                <div className="form__profile-pics">
                  <img src={avatar} alt="Avatar" className="image-thumble" />
                  <input
                    type="file"
                    name="profilePics"
                    id="profilePicFile"
                    accept="image/*"
                  />
                </div>

                <div class="form-group">
                  <label className="form__label" htmlFor="name">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`form__input form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your name"
                    onChange={(event) => setName(event.target.value)}
                  />
                  {errors.name && (
                    <div
                      id="validationServerEmail"
                      className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div class="form-group">
                  <label className="form__label" htmlFor="title">
                    Enter A Short Title*
                  </label>
                  <input
                    type="text"
                    id="title"
                    className={`form__input form-control ${
                      errors.title ? "is-invalid" : ""
                    }`}
                    placeholder="Enter a short title"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  {errors.title && (
                    <div
                      id="validationServerEmail"
                      className="invalid-feedback">
                      {errors.title}
                    </div>
                  )}
                </div>

                <div class="form-group">
                  <label className="form__label" htmlFor="bio">
                    Enter A Short Bio*
                  </label>
                  <textarea
                    className={`form__input form-control ${
                      errors.bio ? "is-invalid" : ""
                    }`}
                    id="bio"
                    rows="5"
                    onChange={(event) => setBio(event.target.value)}></textarea>
                  {errors.bio && (
                    <div
                      id="validationServerEmail"
                      className="invalid-feedback">
                      {errors.bio}
                    </div>
                  )}
                </div>
                <label className="form__label">Social Links</label>
                <div class="form-group icon-box">
                  <div className="form__icon">
                    <FaInternetExplorer />
                  </div>
                  <input
                    type="text"
                    id="website"
                    className="form__input form-control"
                    placeholder="Website link"
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>
                <div class="form-group icon-box">
                  <div className="form__icon">
                    <AiFillLinkedin />
                  </div>
                  <input
                    type="text"
                    id="linkdin"
                    className="form__input form-control"
                    placeholder="Website link"
                    onChange={(event) => setLinkdin(event.target.value)}
                  />
                </div>

                <div class="form-group icon-box mb-5">
                  <div className="form__icon">
                    <AiFillGithub />
                  </div>
                  <input
                    type="text"
                    id="github"
                    className="form__input form-control"
                    placeholder="Website link"
                    onChange={(event) => setGithub(event.target.value)}
                  />
                </div>

                <button className="form__btn">Create</button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default CreateProfile;
