import "./createPost.scss";
import { useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import avatar from "../../../assets/img/thumbnail.jpg";
import AppTitle from "../../../components/Common/AppTitle";

const CreatePost = () => {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [value, setValue] = useState("");

  const editorRef = useRef(null);

  const onThumbnailImage = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      setThumbnail(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  const onSubmitPost = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("tags", tags);
  };

  return (
    <>
      <AppTitle title="Dashboard-Create New Post" />
      <section className="createPost">
        <div className="container">
          <form
            className="form"
            onSubmit={onSubmitPost}
            encType="multipart/form-data">
            <div className="col-md-10 offset-md-1">
              <div className="form__profile-pics">
                {thumbnail && (
                  <img src={thumbnail} alt="Avatar" className="image-thumble" />
                )}
                <label className="form__label" htmlFor="post-thumb">
                  Post thumbnail*
                </label>
                <input
                  type="file"
                  name=" thumbnail"
                  id="post-thumb"
                  accept="image/*"
                  onChange={onThumbnailImage}
                />
              </div>

              <div className="form-group">
                <label className="form__label" htmlFor="title">
                  Post Title*
                </label>
                <input
                  type="text"
                  id="title"
                  className="form__input form-control"
                  placeholder="Enter a short title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>

              <div class="form-group">
                <label className="form__label" htmlFor="bio">
                  Post Body
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
                  value={tags}
                  onChange={(event) => setTags(event.target.value)}
                />
              </div>

              <button type="submit" className="form__btn dashboard-hover">
                Create
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePost;
