import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    boxSizing: "border-box",
    minHeight: "100vh",
    width: "100vw",
  },

  title: {
    fontSize: "2rem",
    fontWeight: "600",
    padding: "10px",
  },

  image: {
    margin: "50px",
    width: "50%",
  },

  paper: {
    backgroundColor: "white",
    width: "40%",
    margin: "0 auto",
    padding: "50px",
  },

  input: {
    marginBottom: "5px",
  },

  button: {
    marginTop: "10px",
    marginRight: "10px",
    padding: "7px",
    color: "white",
    backgroundColor: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },

  backButton: {
    marginTop: "10px",
    padding: "7px",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
}));

export default useStyles;
