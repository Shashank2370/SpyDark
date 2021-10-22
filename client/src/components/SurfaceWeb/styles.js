import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    boxSizing: "border-box",
    minHeight: "100vh",
    width: "100vw",
    margin: "40px",
  },

  title: {
    fontSize: "2rem",
    fontWeight: "600",
    padding: "10px",
  },

  paper: {
    backgroundColor: "white",
    width: "40%",
    margin: "0 auto",
    padding: "50px",
  },

  input: {
    marginBottom: "10px",
  },

  blackButton: {
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

  whiteButton: {
    marginTop: "10px",
    padding: "7px",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },

  whiteButtonGrp: {
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },

  blackButtonGrp: {
    color: "white",
    backgroundColor: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },

  buttonGrpContainer: {
    margin: "30px",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: "20px",
  },
}));

export default useStyles;
