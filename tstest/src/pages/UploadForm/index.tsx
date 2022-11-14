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
//import { ChipsArray } from "../../components/Tag";
import { styled } from "@mui/material/styles";
import { Chip, Paper } from "@mui/material";
import { Box, Button, TextField } from "@mui/material";

export interface ChipData {
  key: number;
  label: string;
}
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const UploadForm = () => {
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [imageTitle, setImageTitle] = useState(""); // Control title of image
  const [imageDesc, setImageDesc] = useState(""); // Control image description
  const [imageVis, setImageVis] = useState(1); // Control public (0) vs. private (1)
  const [imageTags, setImageTags] = useState(""); // tags

  const handleTagsChange = (e: any) => {
    const tags = e.target.value;
    setImageTags(tags);
  };
  const [input, setInput] = React.useState("");
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    // How it works:  { key: 0, label: "Test1" }
  ]);
  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  const handleClick = () => {
    setChipData([
      ...chipData,
      { key: chipData.length + 1, label: `#${input}` },
    ]);
    setInput("");
  };

  const handleImageTitleChange = (e: any) => {
    // This updates every single time anything is typed
    const title = e.target.value;
    setImageTitle(title);
  };
  const handleImageDescChange = (e: any) => {
    const desc = e.target.value;
    setImageDesc(desc);
  };
  const handleImageVisChange = (e: any) => {
    // Public or private
    const vis = e.target.value;
    if (vis == "public") {
      setImageVis(0);
    } else {
      setImageVis(1);
    }
  };
  // const handleTagsChange = (e: any) => {
  //   const tags = e.target.value;
  //   setImageTags(tags);
  // }

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
      await fetch("https://full-stack-fotoflix.herokuapp.com/:3000/Cloudinary", {
        method: "POST",
        body: JSON.stringify({
          data: base64EncodedImage,
          Title: imageTitle,
          Description: imageDesc,
          PublicOrPrivate: imageVis,
          Tags: chipData,
        }),
        headers: { "Content-type": "application/json" },
      });
    } catch (err) {
      console.error(err);
    }
  };
  // const uploadData =async (data:any) => {
  //   try {
  //     await fetch("", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         "Title": imageTitle,
  //         "Description": imageDesc,
  //         "PublicOrPrivate": imageVis,
  //         "Tags": imageTags
  //       }),
  //       headers: { "Content-type": "application/json" },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  return (
    <div>
      {" "}
      <div>
        <h1>Upload </h1>
        <form onSubmit={handleSubmitFile} className="form">
          <h3>Upload your image!</h3>
          <br />
          <input
            type="file"
            name="image "
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
          <br />
          <h3>Image Title</h3>
          <input
            type="text"
            name="Image Title"
            onChange={handleImageTitleChange}
            className="form-input"
          />
          <br />
          <h3>Image Description</h3>
          <input
            type="text"
            name="Image Description"
            onChange={handleImageDescChange}
            className="form-input"
          />
          <br />
          <h3>Public or private?</h3>
          <input
            type="radio"
            value="public"
            id="public"
            onChange={handleImageVisChange}
            name="vis"
          />
          <label htmlFor="public">Public</label>
          <br />
          <input
            type="radio"
            value="private"
            id="private"
            onChange={handleImageVisChange}
            name="vis"
          />
          <label htmlFor="private">Private</label>

          <br />
          <Box>
            <Box>
              <TextField
                placeholder="tag name"
                value={input}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setInput(e.target.value)}
              />
              <Button onClick={handleClick}> Save tag</Button>
            </Box>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {chipData.map((data) => {
                let icon;
                return (
                  <ListItem key={data.key}>
                    <Chip
                      icon={icon}
                      label={data.label}
                      onDelete={handleDelete(data)}
                      onChange={handleTagsChange}
                    />
                  </ListItem>
                );
              })}
            </Paper>
          </Box>
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
