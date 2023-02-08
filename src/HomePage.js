import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(10),
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(5),
  },
  description: {
    marginBottom: theme.spacing(10),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/personal-details");
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Create Your Own Resume Design
      </Typography>
      <Typography variant="body1" className={classes.description}>
        With our resume builder app, you can create a unique and professional
        resume design that stands out from the crowd. Choose from a variety of
        templates and customize the design to match your personal style.
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClick}
      >
        Start Building Your Resume
      </Button>
    </div>
  );
};

export default HomePage;
