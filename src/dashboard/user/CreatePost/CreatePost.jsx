import "./createPost.scss";

import avatar from "../../../assets/img/thumbnail.jpg";
import AppTitle from "../../../components/Common/AppTitle";

const CreatePost = () => {
  return (
    <>
      <AppTitle title="Dashboard-Create New Post" />
      <section className="createPost">
        <div className="container">
          <form className="form">
            <div className="col-md-10 offset-md-1">
              <div className="form__profile-pics">
                <img src={avatar} alt="Avatar" className="image-thumble" />
                <label className="form__label" htmlFor="post-thumb">
                  Post thumbnail*
                </label>
                <input
                  type="file"
                  name=" thumbnail"
                  id="post-thumb"
                  accept="image/*"
                />
              </div>

              <div class="form-group">
                <label className="form__label" htmlFor="title">
                  Post Title*
                </label>
                <input
                  type="text"
                  id="title"
                  className="form__input form-control"
                  placeholder="Enter a short title"
                />
              </div>

              <div class="form-group">
                <label className="form__label" htmlFor="bio">
                  Post Body
                </label>
                <textarea
                  class="form-control form__input"
                  id="bio"
                  rows="5"></textarea>
              </div>

              <div class="form-group mb-5">
                <label className="form__label" htmlFor="tages">
                  Post Tages* (Max 10)
                </label>
                <input
                  type="text"
                  id="tages"
                  className="form__input form-control"
                  placeholder="tag1, tag2 etc"
                />
              </div>

              <button className="form__btn dashboard-hover">Create</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePost;
