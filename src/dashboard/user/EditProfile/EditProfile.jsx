import "./EditProfile.scss";
import { FaInternetExplorer } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import avatar from "../../../assets/img/default.png";
import AppTitle from "../../../components/Common/AppTitle";

const EditProfile = () => {
  return (
    <>
      <AppTitle title="Dashboard-Edit Profile" />
      <section className="editProfile">
        <div className="container">
          <form className="form">
            <div className="col-md-8 offset-md-3">
              <h4 className="form__title">Update Profile</h4>

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
                <label className="form__label" for="name">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="form__input form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div class="form-group">
                <label className="form__label" for="email">
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div class="form-group">
                <label className="form__label" for="title">
                  Enter A Short Title*
                </label>
                <input
                  type="text"
                  id="title"
                  className="form__input form-control"
                  placeholder="Enter a short title"
                />
              </div>

              <div class="form-group">
                <label className="form__label" for="bio">
                  Enter A Short Bio*
                </label>
                <textarea
                  class="form-control form__input"
                  id="bio"
                  rows="5"></textarea>
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
                />
              </div>

              <button className="form__btn dashboard-hover">Update</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
