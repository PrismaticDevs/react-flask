import React from "react";
import { TextField, Box, Button } from "@mui/material";

const Form = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2em",
        }}
        autoComplete="on"
      >
        <TextField
          sx={{
            "& .MuiFormLabel-root.Mui-focused": {
              color: "rgba(0,0,0,0.75)",
            },
            boxShadow: "0 0 1em 1em rgba(0,0,0,0.5)",
          }}
          id="greeting-input"
          variant="filled"
          label="New Greeting"
        />
        <Button sx={{ marginLeft: "2em" }} variant="contained">
          Add
        </Button>
      </Box>
    </div>
  );
};

export default Form;
