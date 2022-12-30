import React, { useState, handleSubmit } from "react";
// import axios from "axios";
import { TextField, Button } from "@mui/material";

const Form = () => {
  const [greeting, setGreeting] = useState("");
  handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(e.target.value);
    console.log(greeting, 10);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          onChange={(e) => setGreeting(e.target.value)}
          required
          autoFocus
        />
        <Button type="submit" sx={{ marginLeft: "2em" }} variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Form;
