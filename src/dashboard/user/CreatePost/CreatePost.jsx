import "./createPost.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import avatar from "../../../assets/img/thumbnail.jpg";
import AppTitle from "../../../components/Common/AppTitle";
import Loader from "../../../components/Loader/Loader";

import Button from "../../../components/ui/buttons/Button";
import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import FormTextArea from "../../../components/ui/forms/FormTextArea";
import Form from "../../../components/ui/forms/Form";
import toastService from "../../../utils/Toast";
import { getErrorMessage } from "../../../utils/Error";
import { log } from "../../../utils/Log";
import { createPost } from "../../../services/postServices";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [thumbnail, setThumbnail] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const { loading } = useSelector((state) => state.settings);
  const onThumbnailImage = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      setThumbnail(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const onkeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags((prev) => [...prev, tag]);
      setTag("");
    }
  };

  const removeTag = (tag) => {
    setTags((prevValues) => {
      return prevValues.filter((prevTag) => prevTag != tag);
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("cover", data.cover[0]);
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("tags", tags);
    let { payload, error } = await createPost(formData);

    if (payload) {
      log("Registration", "info", payload);

      toastService.success("Post successfully created");
      navigate("/user/posts");
    }
    if (error) {
      toastService.error("Post create faild!");
      log("newPost", "error", error);
    }
  };

  return (
    <>
      <AppTitle title="New Post" />
      {loading ? (
        <Loader />
      ) : (
        <section className="createPost">
          <div className="container">
            <div className="header">
              <h1 className="header__title">New Post</h1>
              <Link className="header__btn" to="/user/posts">
                Back
              </Link>
            </div>
            <Form
              className="form"
              encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="col-md-10 offset-md-1">
                <div className="cover">
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt="Avatar"
                      className="image-thumble"
                    />
                  )}
                </div>

                <FormGroup>
                  <FormLabel text="Cover" htmlFor="cover" />
                  <FormInput
                    type="file"
                    id="cover"
                    name="cover"
                    register={register}
                    onChange={onThumbnailImage}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel text="Title" htmlFor="title" />
                  <FormInput
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    register={register}
                    validation={{ required: true }}
                    errorMessage={getErrorMessage({
                      errors: errors,
                      name: "title",
                      errorTypes: ["required"],
                      messages: {
                        required: "Title is required",
                      },
                    })}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel text="Body" htmlFor="body" />
                  <FormTextArea
                    className="px-3"
                    placeholder="Write here.."
                    name="body"
                    register={register}
                    validation={{ required: true }}
                    errorMessage={getErrorMessage({
                      errors: errors,
                      name: "body",
                      errorTypes: ["required"],
                      messages: {
                        required: "Body is required",
                      },
                    })}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel text="Tages (Max 6)" htmlFor="tages" />
                  <div className="input-container">
                    {tags.map((tag, index) => (
                      <div
                        className="input-tag"
                        onClick={() => removeTag(tag)}
                        key={index}>
                        # {tag} &#x2718;
                      </div>
                    ))}
                    <input
                      type="text"
                      id="tages"
                      className="form__input form-control"
                      placeholder="Enter tag"
                      value={tag}
                      onChange={(event) => setTag(event.target.value)}
                      onKeyDown={onkeydown}
                    />
                  </div>
                </FormGroup>

                <Button type="submit" text="Create" className="create-btn" />
              </div>
            </Form>
          </div>
        </section>
      )}
    </>
  );
};

export default CreatePost;
