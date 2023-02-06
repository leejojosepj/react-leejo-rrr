import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updatePersonalDetails, updatePageCount } from "./actions";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
  },
}));

const PersonalDetails = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const personalDetailsStore = useSelector((state) => state.personalDetails);
  const [details, setDetails] = useState(personalDetailsStore);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name == "url") {
      if (event.target.files.length > 0) {
        setDetails({
          ...details,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        });
      }
    } else {
      setDetails({ ...details, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePersonalDetails(details);
  };

  const handleClick = () => {
    props.updatePageCount(1);
    navigate("/education");
  };

  return (
    <div>
      {/*<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        defaultValue={personalDetailsStore.name ? personalDetailsStore.name : ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        defaultValue={personalDetailsStore.email ? personalDetailsStore.email : ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        defaultValue={personalDetailsStore.phone ? personalDetailsStore.phone : ''}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
  </form>*/}

      <form onSubmit={handleSubmit}>
        <Card className={classes.root}>
          <CardHeader subheader="Add Your Personal Details" />
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="name"
                defaultValue={
                  personalDetailsStore.name ? personalDetailsStore.name : ""
                }
                label="Name"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="email"
                defaultValue={
                  personalDetailsStore.email ? personalDetailsStore.email : ""
                }
                label="Email"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="number"
                defaultValue={
                  personalDetailsStore.phone ? personalDetailsStore.phone : ""
                }
                name="phone"
                label="Phone Number"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                type="file"
                name="url"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/*<Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="address"
                defaultValue={profileData.Data?  profileData.Data.address : null}
                label="Address"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
           <Grid item md={6} xs={12}>
            {profileData.Data.url && profileData.Data.url.length > 0 ? 
             <Button
             color="secondary"
             variant="outlined"
             onClick={RemoveImage}>
               Remove {profileData.Data.FileName}
             </Button>
            
          :
          <div style={{textAlign: "left"}}>
            Profile Image
          <TextField
            fullWidth
            type="file"
            name="url"
            onChange={handleChange}
            variant="outlined"
          />
          </div>
         
         
          }           
        </Grid>*/}
            <Grid item md={12} xs={12}>
              <Grid item md={6} xs={6}>
                <Button type="submit" variant="contained">
                  Save
                </Button>{" "}
                <Button variant="contained" onClick={handleClick}>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  updatePersonalDetails,
  updatePageCount,
};

export default connect(null, mapDispatchToProps)(PersonalDetails);
