import React from "react";
import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikValues,
} from "formik";
export const UploadForm = () => {
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [imageTitle, setImageTitle] = useState(""); // Control title of image
  const [imageDesc, setImageDesc] = useState(""); // Control image description
  const [imageVis, setImageVis] = useState(""); // Control public vs. private
  const [imageTags, setImageTags] = useState(""); // tags

  const handleImageTitleChange = (e: any) => { // This updates every single time anything is typed
    const title = e.target.value;
    setImageTitle(title);
  }
  const handleImageDescChange = (e: any) => {
    const desc = e.target.value;
    setImageDesc(desc);
  }
  const handleImageVisChange = (e: any) => {// Public or private
    const vis = e.target.value;
    setImageVis(vis);
  }
  const handleTagsChange = (e: any) => {
    const tags = e.target.value;
    setImageTags(tags);
  }

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };
  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader?.result as string);
    };
  };
  const handleSubmitFile = (e: any) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage: any) => {
    try {
      await fetch("http://localhost:3000/Cloudinary", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {" "}
      <div>
        <h1>Upload </h1>
        <form onSubmit={handleSubmitFile} className="form">
          <h3>Upload your image!</h3><br />
          <input
            type="file"
            name="image "
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          <br /><h3>Image Title</h3>
          <input
            type="text"
            name="Image Title"
            onChange={handleImageTitleChange}
            className="form-input"
          />
          <br /><h3>Image Description</h3>
          <input 
            type="text"
            name="Image Description"
            onChange={handleImageDescChange}
            className="form-input"
          />
          <br /><h3>Public or private?</h3>
          <input type="radio" value="public" id="public"
                onChange={handleImageVisChange} name="vis" />
          <label htmlFor="public">Public</label>
          <br />
          <input type="radio" value="private" id="private"
            onChange={handleImageVisChange} name="vis"/>
          <label htmlFor="private">Private</label>

          <br /><h3>Tags (Use a # for each tag)</h3>
          <input
            type="text"
            name="Tags"
            onChange={handleTagsChange}
            className="form-input"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
        )}
      </div>
    </div>
  );
};
