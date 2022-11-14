// This file is no longer used; use UploadForm/index instead!

import * as React from "react";
import { styled } from "@mui/material/styles";
import { Chip, Paper } from "@mui/material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export interface ChipData {
  key: number;
  label: string;
}
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

// export const TagData = ({tags: string}) => {
//   const [imageTags, setImageTags] = useState(""); // tags
//   setImageTags(tags);
// }

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

export const ChipsArray = () => {
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

  //console.log(chipData);
  return (
    <Box>
      <Box>
        <TextField
          placeholder="tag name"
          value={input}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setInput(e.target.value)
          }
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
  );
};
