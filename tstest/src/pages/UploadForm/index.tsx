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
          <input
            type="file"
            name="image "
            onChange={handleFileInputChange}
            value={fileInputState}
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
