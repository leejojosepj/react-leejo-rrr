import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

//import { useReactToPrint } from "react-to-print";
import Pdf from "react-to-pdf";
import Button from "@mui/material/Button";

import { Paper, Grid, Typography } from "@material-ui/core";
//import { createNonNullExpression } from "typescript";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ParentResumePaper: {
    margin: "auto",
    marginTop: "1%",
    textAlign: "left",
    padding: "15px",
    maxWidth: "1000px",
  },

  ParentResumeModel: {
    margin: "auto",
    marginTop: "1%",
    padding: "15px",
    maxWidth: "1000px",
    borderColor: "pink",
  },
  ParentSkillSection: {
    textAlign: "left",
  },
  profilePhoto: {
    textAlign: "left",
  },
  header: {
    textAlign: "left",
  },
  content: {
    textAlign: "left",
    margin: "8px 3px",
  },
}));
const FinalUIPage = (props) => {
  const componentRef = useRef();
  const ref = createRef();

  const handlePrint = () => {};
  const classes = useStyles();

  return (
    <div>
      <p style={{ marginTop: "25px" }}></p>
      <Pdf targetRef={ref} filename="code-fins.pdf">
        {({ toPdf }) => (
          <Button variant="contained" onClick={toPdf}>
            Download Resume
          </Button>
        )}
      </Pdf>
      <Paper className={classes.ParentResumeModel} elevation={1}>
        <div elevation={1} ref={ref} className={classes.ParentResumePaper}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <div className={classes.profilePhoto}>
                {props.personalDetails ? (
                  <img
                    src={props.personalDetails.url}
                    width="100px"
                    heigh="100px"
                  ></img>
                ) : null}
              </div>
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h4" component="h2">
                    {props.personalDetails ? props.personalDetails.name : null}{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Email :{" "}
                    {props.personalDetails ? props.personalDetails.email : null}
                  </Typography>
                  <Typography variant="subtitle1">
                    Phone Number:{" "}
                    {props.personalDetails ? props.personalDetails.phone : null}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Grid container spacing={3}>
                    {/* Skills */}
                    <Grid item xs={12}>
                      {/*<div className={classes.ParentSkillSection}>
                        <Typography variant="h5" component="h2">
                          Skills
                        </Typography>
                        <Divider />
                        {props.SkillsFormData.Data &&
                          props.SkillsFormData.Data.length > 0 &&
                          props.SkillsFormData.Data.map((item) => (
                            <li>{item}</li>
                          ))}
                          </div>*/}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={9}>
                  <Grid container spacing={3}>
                    {/* Education */}
                    <Grid item xs={12}>
                      <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                          Education
                        </Typography>
                      </div>
                      <Divider />

                      {props.education &&
                        props.education.length > 0 &&
                        props.education.map((instance) => (
                          <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                              {instance.degree}
                            </Typography>
                            <Typography variant="body2">
                              {instance.institution}
                            </Typography>
                          </div>
                        ))}
                    </Grid>

                    <Grid item xs={12}>
                      {/* projects */}
                      <div className={classes.header}>
                        <Typography variant="h5" component="h2">
                          Work Experience
                        </Typography>
                      </div>
                      <Divider />

                      {props.workExperience &&
                        props.workExperience.length > 0 &&
                        props.workExperience.map((instance) => (
                          <div className={classes.content}>
                            <Typography variant="h6" component="h2">
                              {instance.company}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.position}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.startDate}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {instance.endDate}
                            </Typography>
                          </div>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalDetails: state.personalDetails,
    education: state.education,
    workExperience: state.workExperience,
  };
};

export default connect(mapStateToProps)(FinalUIPage);
