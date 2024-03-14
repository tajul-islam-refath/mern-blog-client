import "./createPost.scss";
import { useForm } from "react-hook-form";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";

import avatar from "../../../assets/img/thumbnail.jpg";
import AppTitle from "../../../components/Common/AppTitle";
import Loader from "../../../components/Loader/Loader";

import { createNewPost, clearPostState } from "../../../services/postServices";

import Button from "../../../components/ui/buttons/Button";
import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";

import toastService from "../../../utils/Toast";
import { getErrorMessage } from "../../../utils/Error";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [thumbnail, setThumbnail] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [value, setValue] = useState("");

  const editorRef = useRef(null);

  const { isPostLoading, isPostCreated, message } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();

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
      setTags((prev) => [...prev, tag]);
      setTag("");
    }
  };

  return (
    <>
      <AppTitle title="New Post" />
      {isPostLoading ? (
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
            <Form className="form" encType="multipart/form-data">
              <div className="col-md-10 offset-md-1">
                <div className="form__profile-pics">
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
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel text="Title" htmlFor="title" />
                  <FormInput
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    register={register}
                    validation={{ required: true, maxLength: 10 }}
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

                {/* <div class="form-group">
                  <label className="form__label" htmlFor="bio">
                    Body
                  </label>
                  <Editor
                    apiKey="your-api-key"
                    value={value}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onEditorChange={(value, editor) => {
                      setValue(value);
                      setBody(editor.getContent());
                    }}
                    initialValue="<p>Write your valuable words</p>"
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </div> */}

                <div class="form-group mb-5">
                  <label className="form__label" htmlFor="tages">
                    Tages* (Max 10)
                  </label>
                  <div className="input-container">
                    {tags.map((tag) => (
                      <div className="tag">{tag} &#x2718;</div>
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
                </div>

                <Button type="button" text="Create" />
              </div>
            </Form>
          </div>
        </section>
      )}
    </>
  );
};

export default CreatePost;
