import React from "react";
import { createRef } from "react";
import { connect } from "react-redux";
import Pdf from "react-to-pdf";
import Button from "@mui/material/Button";

const FinalPage = (props) => {
  const ref = createRef();

  return (
    <div>
      <div ref={ref}>
        <h2>Resume</h2>
        <div>
          <h3>Personal Details</h3>
          <p>
            Name: {props.personalDetails.name} <br />
            Email: {props.personalDetails.email} <br />
            Phone: {props.personalDetails.phone}
          </p>
        </div>
        <div>
          <h3>Education</h3>
          {props.education.map((edu, index) => (
            <p key={index}>
              Degree: {edu.degree} <br />
              Institution: {edu.institution} <br />
            </p>
          ))}
        </div>
        <div>
          <h3>Work Experience</h3>
          {props.workExperience.map((exp, index) => (
            <p key={index}>
              Company: {exp.company} <br />
              Position: {exp.position} <br />
              Start Date: {exp.startDate} <br />
              End Date: {exp.endDate}
            </p>
          ))}
        </div>
      </div>
      <Pdf targetRef={ref} filename="code-fins.pdf">
        {({ toPdf }) => (
          <Button variant="contained" onClick={toPdf}>
            Download Resume
          </Button>
        )}
      </Pdf>
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

export default connect(mapStateToProps)(FinalPage);
