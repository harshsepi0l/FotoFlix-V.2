import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Box, Button, TextField } from "@mui/material";

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const ChipsArray = () => {
  const [input, setInput] = React.useState("");
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Test1" },
    { key: 1, label: "Test2" },
    { key: 2, label: "Test3" },
    { key: 4, label: "Test4" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleClick = () => {
    setChipData([...chipData, { key: chipData.length + 1, label: input }]);
    setInput("");
  };

  return (
    <Box>
      <Box>
        <TextField
          placeholder="tag name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
                onDelete={
                  data.label === "React" ? undefined : handleDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Paper>
    </Box>
  );
};
