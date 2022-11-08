import React, { useState } from "react";
import Axios from "axios";

class ImagesForm extends React.Component {
  state = {
    imageSelected: undefined,
  };

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]') as any;
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "flixerimages");

    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      "https://api.cloudinary.com/v1_1/dtnnbtfja/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          imageSelected: res.secure_url,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { imageSelected } = this.state;
    return (
      <main className="ImagesForm">
        <section className="left_sode">
          <form>
            <div className="form-group">
              <input type="file" />
            </div>
            <button type="button" onClick={this.handleImageUpload}>
              {" "}
            </button>
          </form>
        </section>
        <section className="right_side">
          <div className="image">
            {imageSelected && <img src={imageSelected} alt="Upload Preview" />}
          </div>
        </section>
      </main>
    );
  }
}

export default ImagesForm;
// const uploadImage = () => {
//   const formData = new FormData();
//   formData.append("image", imageSelected ?? "");
//   Axios.post(
//     "https://api.cloudinary.com/v1_1/dtnnbtfja/image/upload",
//     formData
//   ).then((response) => {
//     console.log(response);
//   });
// };

// return (
//   <div>
//     <input
//       type="file"
//       onChange={(event) => {
//         setImageSelected(event.target.files[0]);
//       }}
//     />
//     <button onClick={uploadImage}>Upload</button>
//     <Image cloudName="dtnnbtfja" />
//   </div>
// );
