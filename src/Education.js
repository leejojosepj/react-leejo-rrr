import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateEducation, updatePageCount } from "./actions";

import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
//

const useStyles = styled((theme) => ({
  root: {
    padding: "108px",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Education = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);

  const [edu, setEdu] = useState({ institution: "", degree: "" });

  const educationStore = useSelector((state) => state.education);

  const handleChange = (event) => {
    setEdu({
      ...edu,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = (event, index) => {
    console.log("jy");
    const updatedEducation = [...educationStore];
    console.log("updatedEducation:", updatedEducation);
    updatedEducation[index][event.target.name] = event.target.value;
    setEducation(updatedEducation);
    props.updateEducation(updatedEducation);
  };
  const handleClickNext = () => {
    props.updatePageCount(2);
    navigate("/work-experience");
  };
  const handleClickBack = () => {
    props.updatePageCount(0);
    navigate("/personal-details");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //props.updateEducation(education);

    const updatedEducation = educationStore;
    updatedEducation.push(edu);
    setEducation(updatedEducation);
    props.updateEducation(updatedEducation);
    setEdu({ institution: " ", degree: " " });
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Add Your Educational Details" />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <TextField
                name="institution"
                value={edu.institution}
                label="Institution"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={3} xs={12}>
              <TextField
                name="degree"
                value={edu.degree}
                label="Degree"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <p style={{ marginTop: "25px" }}></p>
          <Grid item md={12} xs={12}>
            <Grid item md={6} xs={6}>
              <Button type="submit" variant="contained">
                Add Education
              </Button>
            </Grid>
          </Grid>
          <p style={{ marginTop: "25px" }}></p>
        </form>
      </Card>
      <p style={{ marginTop: "25px" }}></p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {educationStore.map((edu, index) => (
            <Grid item xs={4} key={index}>
              <Item>
                <h5>Education {index + 1}</h5>
                <TextField
                  name="institution"
                  placeholder="Institution"
                  defaultValue={edu.institution}
                  onChange={(event) => handleUpdate(event, index)}
                />
                <TextField
                  name="degree"
                  placeholder="Degree"
                  defaultValue={edu.degree}
                  onChange={(event) => handleUpdate(event, index)}
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

const mapDispatchToProps = {
  updateEducation,
  updatePageCount,
};

export default connect(null, mapDispatchToProps)(Education);
