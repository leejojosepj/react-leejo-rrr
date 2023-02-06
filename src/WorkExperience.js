import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { updateWorkExperience, updatePageCount } from "./actions";
import { useNavigate } from "react-router-dom";

//
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
//
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const WorkExperience = (props) => {
  const navigate = useNavigate();
  //const [experience, setExperience] = useState({ company: "", position: "", startDate: "", endDate: "" });
  const [exp, setExp] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });
  const [experience, setExperience] = useState([]);

  //useEffect(() => {

  //}, [experience]);

  const experienceStore = useSelector((state) => state.workExperience);

  const handleChange = (event) => {
    setExp({
      ...exp,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickNext = () => {
    props.updatePageCount(3);
    navigate("/final-page");
  };
  const handleClickBack = () => {
    props.updatePageCount(1);
    navigate("/education");
  };

  //
  //const handleChange = (event, index) => {
  //   const updatedExperience = [...experience];
  //  updatedExperience[index][event.target.name] = event.target.value;
  // setExperience(updatedExperience);
  // }
  //

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedExperience = experienceStore;
    updatedExperience.push(exp);
    setExperience(updatedExperience);
    props.updateWorkExperience(updatedExperience);
    setExp({ company: "", position: "", startDate: "", endDate: "" });
  };

  const handleUpdate = (event, index) => {
    console.log("jy");
    const updatedExperience = [...experienceStore];
    console.log("updatedExperience:", updatedExperience);
    updatedExperience[index][event.target.name] = event.target.value;
    setExperience(updatedExperience);
    props.updateWorkExperience(updatedExperience);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="company"
          value={exp.company}
          onChange={handleChange}
          placeholder="Company"
        />
        <TextField
          name="position"
          value={exp.position}
          onChange={handleChange}
          placeholder="Position"
        />
        <TextField
          name="startDate"
          value={exp.startDate}
          onChange={handleChange}
          placeholder="Start Date"
        />
        <TextField
          name="endDate"
          value={exp.endDate}
          onChange={handleChange}
          placeholder="End Date"
        />
        <Button type="submit" variant="contained">
          Add Experience
        </Button>
      </form>
      <p style={{ marginTop: "25px" }}></p>
      <Box
        sx={{ flexGrow: 1, "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      >
        <Grid container spacing={2}>
          {experienceStore.map((exp, index) => (
            <Grid item xs={4} key={index}>
              <h3>Experience {index + 1}</h3>
              <Item>
                <TextField
                  name="company"
                  value={exp.company}
                  onChange={(event) => handleUpdate(event, index)}
                  variant="outlined"
                  label="Company"
                />
                <TextField
                  name="position"
                  value={exp.position}
                  onChange={(event) => handleUpdate(event, index)}
                  variant="outlined"
                  label="Position"
                />
                <TextField
                  name="startDate"
                  value={exp.startDate}
                  onChange={(event) => handleUpdate(event, index)}
                  variant="outlined"
                  label="Start Date"
                />
                <TextField
                  name="endDate"
                  value={exp.endDate}
                  onChange={(event) => handleUpdate(event, index)}
                  variant="outlined"
                  label="End Date"
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <p style={{ marginTop: "25px" }}></p>
      <Grid item md={12} xs={12}>
        <Grid item md={6} xs={6}>
          <Button variant="contained" onClick={handleClickBack}>
            Back
          </Button>{" "}
          <Button variant="contained" onClick={handleClickNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateWorkExperience: (experience) =>
      dispatch(updateWorkExperience(experience)),
    updatePageCount: (pageCount) => dispatch(updatePageCount(pageCount)),
  };
};

export default connect(null, mapDispatchToProps)(WorkExperience);
