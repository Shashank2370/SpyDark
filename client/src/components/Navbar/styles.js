import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  desktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  mobile: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  title: {
    flexGrow: 1,
    color: "white",
  },

  extraMargin: {
    margin: "5px 50px",
  },

  button: {
    marginRight: "10px",
    padding: "7px",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },

  active: {
    backgroundColor: "white",
    color: "black",
  },
}));

export default useStyles;
