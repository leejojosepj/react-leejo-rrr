import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { updatePageCount } from "./actions";

import { Stepper, Step, StepLabel, StepButton } from "@material-ui/core";
//

const Navigation = (props) => {
  const [activeStep, setActiveStep] = React.useState(props.pageCount);
  console.log("#############:", activeStep);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
    };
  };

  //
  const handleStep = (count) => () => {
    props.updatePageCount(count);
    //setActiveStep(count);
  };
  //
  const state = useSelector((state) => state);
  return (
    <div>
      {/*<nav>
      <NavLink to="/personal-details" style={navLinkStyles}>
        Personal Details
      </NavLink>{" "}
      |{" "}
      <NavLink to="/education" style={navLinkStyles}>
        Education
      </NavLink>{" "}
      |{" "}
      <NavLink to="/work-experience" style={navLinkStyles} >
        Work Experience
      </NavLink>{" "}
      |{" "}
      <NavLink to="/final-page" style={navLinkStyles}>
        Final Page
      </NavLink>
      </nav>*/}

      {/*<pre style={{ backgroundColor: "yellow" }}>
        {JSON.stringify(state, null, 2)}
    </pre>*/}
      <div>
        <Stepper nonLinear activeStep={props.pageCount}>
          <Step>
            <StepLabel onClick={handleStep(0)}>
              <NavLink to="/personal-details" style={navLinkStyles}>
                Personal Details
              </NavLink>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel onClick={handleStep(1)}>
              <NavLink to="/education" style={navLinkStyles}>
                Education
              </NavLink>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel onClick={handleStep(2)}>
              <NavLink to="/work-experience" style={navLinkStyles}>
                Work Experience
              </NavLink>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel onClick={handleStep(3)}>
              <NavLink to="/final-page" style={navLinkStyles}>
                Final Page
              </NavLink>
            </StepLabel>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalDetails: state.personalDetails,
    education: state.education,
    workExperience: state.workExperience,
    pageCount: state.pageCount,
  };
};

const mapDispatchToProps = {
  updatePageCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
